import { connectWallet } from "../utils/connect";
import { Wave } from "../utils/waves";
import { makeWave } from "../utils/waves";
import React, { FC, useState } from "react";

interface Props {
  currentAccount: string;
  setCurrentAccount: React.Dispatch<React.SetStateAction<string>>;
  setWaves: React.Dispatch<React.SetStateAction<Wave[] | undefined>>;
  setTotalWaves: React.Dispatch<React.SetStateAction<number | undefined>>;
  setShowAlert: React.Dispatch<React.SetStateAction<string>>;
}

const MakeWave: FC<Props> = ({ currentAccount, setCurrentAccount, setWaves, setTotalWaves, setShowAlert }) => {
  const [message, setMessage] = useState<string>("");
  return (
    <>
      <div className="mx-4 sm:mx-auto mt-8 max-w-xl select-none">
        <form className="sm:flex sm:gap-4">
          <div className="sm:flex-1">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)} placeholder="Message" className="w-full placeholder-slate-300 border-black border-2 bg-transparent p-3 text-black shadow-sm transition focus:outline-none focus:ring focus:ring-[hsla(343,100%,76%,1)]" />
          </div>
          <div className="mt-3 float-right sm:mt-0">
            {currentAccount ? (
              <button onClick={(e: React.MouseEvent<HTMLElement>) => makeWave(e, message)} className="group relative inline-block">
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[hsla(343,100%,76%,1)] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">WAVE</span>
              </button>
            ) : (
              <button
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  connectWallet(setCurrentAccount, setWaves, setTotalWaves, setShowAlert);
                }}
                className="group relative inline-block"
              >
                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[hsla(343,100%,76%,1)] transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">CONNECT</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default MakeWave;
