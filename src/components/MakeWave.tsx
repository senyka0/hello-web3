import { connectWallet } from "../utils/connect";
import { Wave } from "../utils/waves";
import { makeWave } from "../utils/waves";
import React, { FC } from "react";

interface Props {
  currentAccount: string;
  setCurrentAccount: React.Dispatch<React.SetStateAction<string>>;
  setWaves: React.Dispatch<React.SetStateAction<Wave[] | undefined>>;
  setTotalWaves: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const MakeWave: FC<Props> = ({ currentAccount, setCurrentAccount, setWaves, setTotalWaves }) => {
  return (
    <>
      <div>{currentAccount ? <button onClick={makeWave}>MakeWave</button> : <button onClick={() => connectWallet(setCurrentAccount, setWaves, setTotalWaves)}>Connect</button>}</div>
    </>
  );
};

export default MakeWave;
