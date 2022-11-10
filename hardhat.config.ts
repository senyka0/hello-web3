import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
      allowUnlimitedContractSize: true,
    },
  },
};

export default config;
