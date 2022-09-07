import { ethers } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners()

  const Voting = await ethers.getContractFactory('Voting', deployer)
  const voting = await Voting.deploy(['p1', 'p2'], 1)

  await voting.deployed()

  console.log('Voting deployed to:', voting.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
