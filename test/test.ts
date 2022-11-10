import { WavePortal } from "../typechain-types";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("WavePortal", () => {
  let contract: WavePortal;

  beforeEach(async () => {
    const Contract = await ethers.getContractFactory("WavePortal");
    contract = await Contract.deploy();
  });
  it("Should store Wave", async () => {
    await contract.deployed();

    await contract.wave("hello");
    const myWave = await contract.getAllWaves();
    expect(myWave[myWave.length - 1].message).to.not.equal(undefined);
    expect(myWave[myWave.length - 1].message).to.equal("hello");
  });
});
