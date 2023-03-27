/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const rpcUrl = process.env.RPC_URL;
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "sepolia",
    networks: {
      sepolia: {
        url: rpcUrl,
        accounts: [privateKey],
        chainId: 11155111,
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
