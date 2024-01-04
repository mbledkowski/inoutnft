import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomicfoundation/hardhat-toolbox-viem";

import "dotenv/config";

const { PRIVATE_KEY } = process.env;
if (!PRIVATE_KEY) throw new Error("PRIVATE_KEY is not set");

const config: HardhatUserConfig = {
  defaultNetwork: "PolygonMumbai",
  networks: {
    PolygonMumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
