import { ethers } from "hardhat";


async function mintNFT(contractAddress: string, metaDataURL: string) {
  const GamePlatformItemsToNFT = await ethers.getContractFactory("GamePlatformItemsToNFT")
  const [owner] = await ethers.getSigners()
  const arrayMetaDataURL = metaDataURL.split(',')
  await GamePlatformItemsToNFT.attach(contractAddress).mintNFTs(owner.address, arrayMetaDataURL)
  console.log("NFT minted to: ", owner.address)
}

const CONTRACT_ADDRESS = "0x3b22aEE6179B6C67994283Cf3f9924fB3eBaaa9a"
const META_DATA_URL = ",".repeat(420)

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

