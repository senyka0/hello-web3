import WawePortal from "../constants/abis/WavePortal.json";
import { contractAddress } from "./../constants/index";
import { ethers } from "ethers";

export interface Wave {
  address: string;
  timestamp: number;
  message: string;
}

export const getWaves = async (setWaves: React.Dispatch<React.SetStateAction<Wave[] | undefined>>): Promise<void> => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(contractAddress, WawePortal.abi, signer);
      let res = await wavePortalContract.getAllWaves();
      const waves = res.map((wave: any) => {
        return {
          address: wave.waver,
          timestamp: new Date(wave.timestamp * 1000),
          message: wave.message,
        };
      });
      setWaves(waves);
    } else {
      alert("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};
export const getTotalWaves = async (setTotalWaves: React.Dispatch<React.SetStateAction<number | undefined>>): Promise<void> => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(contractAddress, WawePortal.abi, signer);
      let count = await wavePortalContract.totalWaves();
      setTotalWaves(Number(count));
    } else {
      alert("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};
export const makeWave = async (e: React.MouseEvent<HTMLElement>, message: string): Promise<void> => {
  e.preventDefault();
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const wavePortalContract = new ethers.Contract(contractAddress, WawePortal.abi, signer);
      const waveTxn = await wavePortalContract.wave(message);
      await waveTxn.wait();
    } else {
      alert("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};
