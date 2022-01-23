import React, { useEffect, useState } from "react";
import getBlockchain from "./ethereum";
import Store from "./components/Store";

function App() {

  const [paymentProcessor, setPaymentProcessor] = useState(undefined);
  const [dai, setDai] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, dai } = await getBlockchain;
      setPaymentProcessor(paymentProcessor);
      setDai(dai);
    };
    init();
  }, []);

  if (typeof window.ethereum == undefined) {
    return (
      <div className="container">
        <div className="col-sm-12">
          <h1> Blockchain E-Commerce App </h1>
          <p> You need to install the latest version of MetaMask </p>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="col-sm-12">
        <h1> Blockchain E-Commerce App </h1>
        <Store paymentProcessor={paymentProcessor} dai={dai} />
      </div>
    </div>
  );
}

export default App;
