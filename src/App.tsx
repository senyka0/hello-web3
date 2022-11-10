import "./App.css";
import Bio from "./components/Bio";
import MakeWave from "./components/MakeWave";
import Waves from "./components/Waves";
import { connectWallet } from "./utils/connect";
import { Wave } from "./utils/waves";
import React, { useEffect, useState, FC } from "react";

const App: FC = () => {
  useEffect(() => {
    connectWallet(setCurrentAccount, setWaves, setTotalWaves);
  }, []);
  const [currentAccount, setCurrentAccount] = useState<string>("");
  const [waves, setWaves] = useState<Wave[] | undefined>(undefined);
  const [totalWaves, setTotalWaves] = useState<number | undefined>(undefined);
  return (
    <>
      <Bio />
      {waves && <Waves waves={waves!} />}
      <div>{totalWaves}</div>
      <MakeWave currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} setTotalWaves={setTotalWaves} setWaves={setWaves} />
    </>
  );
};

export default App;
