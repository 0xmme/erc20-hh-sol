import { ethers, getNamedAccounts } from "hardhat";
import { Address } from "hardhat-deploy/types";
import { assert } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract, ContractFactory } from "ethers";

describe("mmeShitcoin", () => {
  let mmeShitcoin: Contract;
  let mmeShitcoinFactory: ContractFactory;
  let initalSupply = ethers.utils.parseEther("50").toString();
  let deployerAddress: Address;
  let deployer: SignerWithAddress;

  beforeEach(async () => {
    deployerAddress = (await getNamedAccounts()).deployer;
    deployer = await ethers.getSigner(deployerAddress);
    mmeShitcoinFactory = await ethers.getContractFactory(
      "mmeShitcoin",
      deployer
    );
    mmeShitcoin = await mmeShitcoinFactory.deploy(initalSupply);
  });

  describe("constructor", () => {
    it("should mint the initalSupply", async () => {
      const balance = await mmeShitcoin.balanceOf(deployerAddress);
      console.log(balance);
      assert.equal(initalSupply, balance.toString());
    });
  });
});
