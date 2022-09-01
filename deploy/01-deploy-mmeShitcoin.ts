import { ethers, network, run } from "hardhat";
import { DeployFunction, DeployedContract } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { networkConfig } from "../helper-hardhat-config";

const deploy: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  // env variables
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const initSupply = ethers.utils.parseEther("50").toString();

  log("deploying Shitcoin contract...");
  const mmeShitcoin: DeployedContract = await deploy("mmeShitcoin", {
    from: deployer,
    log: true,
    args: [initSupply],
    waitConfirmations: networkConfig[network.name].blockConfirmations,
  });
};

export default deploy;
deploy.tags = ["all", "shitcoin"];
