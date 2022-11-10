import "@nomiclabs/hardhat-etherscan";
import hre from "hardhat";

const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.01"),
  });
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
