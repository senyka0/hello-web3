import "./App.css";
import Alert from "./components/Alert";
import Bio from "./components/Bio";
import MakeWave from "./components/MakeWave";
import Waves from "./components/Waves";
import { connectWallet } from "./utils/connect";
import { Wave } from "./utils/waves";
import React, { useEffect, useState, FC } from "react";

const App: FC = () => {
  useEffect(() => {
    connectWallet(setCurrentAccount, setWaves, setTotalWaves, setShowAlert);
  }, []);

  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [waves, setWaves] = useState<Wave[] | undefined>(undefined);
  const [totalWaves, setTotalWaves] = useState<number | undefined>(undefined);
  const [showAlert, setShowAlert] = useState<string>("");

  return (
    <div className="App">
      {showAlert && <Alert message={showAlert} />}
      <div className="pt-24">
        <Bio />
        <MakeWave currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} setTotalWaves={setTotalWaves} setWaves={setWaves} setShowAlert={setShowAlert} />
        {waves && <Waves waves={waves!} totalWaves={totalWaves} />}
      </div>
    </div>
  );
};

export default App;
