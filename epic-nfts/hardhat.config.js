require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");



module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/vCLl2YPgMicMNcqM87f4NL5H8HG7rJ6U",
      accounts: [process.env.PRIVATE_KEY]
    }
  },  
  etherscan: {
    apiKey: process.env.API_KEY
},
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
  },
},
}