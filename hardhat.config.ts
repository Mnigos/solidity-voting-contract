import { HardhatUserConfig, task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import 'hardhat-watcher'
import 'solidity-coverage'
import 'dotenv/config'
import '@typechain/hardhat'

task('accounts', 'Prints the list of accounts', async (taskArguments, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

const configuration: HardhatUserConfig = {
  solidity: '0.8.9',
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true,
      clearOnStart: true,
    },
  },
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.API_KEY}`,
      accounts: [process.env.PRIVATE_KEY ?? ''],
    },
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
  },
}
export default configuration
