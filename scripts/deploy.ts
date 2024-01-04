import { network, ethers } from "hardhat";
async function deployContract() {
  const [owner] = await ethers.getSigners();
  let ContractFactory = await ethers.getContractFactory("ExampleNFT");
  let contract = await ContractFactory.deploy(owner.address);

  const txHash = contract.deployTransaction.hash;
  console.log(`Contract transaction hash: ${txHash}`);
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
