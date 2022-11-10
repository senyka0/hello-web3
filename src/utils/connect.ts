import { Wave, getTotalWaves, getWaves } from "../utils/waves";

export const connectWallet = async (setCurrentAccount: React.Dispatch<React.SetStateAction<string>>, setWaves: React.Dispatch<React.SetStateAction<Wave[] | undefined>>, setTotalWaves: React.Dispatch<React.SetStateAction<number | undefined>>): Promise<void> => {
  if (window.ethereum) {
    if (window.ethereum.networkVersion !== 5) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x5" }],
        });
      } catch (err: any) {
        if (err.code === 4902) {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: "Goerli Test Network",
                chainId: "0x5",
                nativeCurrency: { name: "GoerliETH", decimals: 18, symbol: "GoerliETH" },
                rpcUrls: ["https://goerli.infura.io/v3/"],
              },
            ],
          });
        }
      }
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setCurrentAccount(accounts[0]);
    getWaves(setWaves);
    getTotalWaves(setTotalWaves);
  }
};
