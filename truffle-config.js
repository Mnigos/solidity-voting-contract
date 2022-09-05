const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv/config')
require('ts-node').register({
  files: true,
})

module.exports = {
  networks: {
    ropsten: {
      provider: () => {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.API_KEY}`
        )
      },
      network_id: '3',
      gas: 3_000_000,
      from: process.env.CHAIR_PERSON,
    },
  },
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
}
