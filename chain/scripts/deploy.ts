import { network, ethers } from "hardhat";
async function deployContract() {
  let GamePlatformItemsToNFT = await ethers.getContractFactory("GamePlatformItemsToNFT");
  let contract = await GamePlatformItemsToNFT.deploy();

  const contractHash = contract.address;
  console.log("Contract deployed to:", contractHash);
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
