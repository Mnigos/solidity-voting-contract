import { ethers } from 'hardhat'
import '@nomiclabs/hardhat-ethers'
import { expect } from 'chai'

async function setup(proposals = ['p1', 'p2'], defaultVoterWeight = 1) {
  const [deployer] = await ethers.getSigners()

  const Voting = await ethers.getContractFactory('Voting', deployer)
  const voting = await Voting.deploy(proposals, defaultVoterWeight)

  return {
    deployer,
    voting,
    proposals,
    defaultVoterWeight,
  }
}

describe('Voting', () => {
  it('should not be undefined', async () => {
    const { voting } = await setup()

    expect(voting).to.not.be.undefined
  })

  it('should have avaible votes', async () => {
    const { voting, defaultVoterWeight } = await setup()

    const avaibleVotes = +(await voting.getAvaibleVotes())

    expect(avaibleVotes).to.equal(defaultVoterWeight)
  })

  it('should vote', async () => {
    const { voting, deployer } = await setup()

    await voting.vote(0)

    const [voterInfo] = await voting.voters(deployer.address)

    expect(voterInfo).to.be.true
  })

  it('should add proposal', async () => {
    const { voting } = await setup()

    await voting.addProposal('p3')

    const [newProposalName] = await voting.proposals(2)

    expect(newProposalName).to.equal('p3')
  })

  it('should get winning proposal index', async () => {
    const { voting } = await setup()

    const winningProposalIndex = +(await voting.getWinningProposalIndex())

    expect(winningProposalIndex).to.equal(0)
  })

  it('winning proposal name should match index', async () => {
    const { voting } = await setup()

    const winningProposalIndex = +(await voting.getWinningProposalIndex())

    const winningProposalName = await voting.getWinningProposalName()

    const [proposalName] = await voting.proposals(winningProposalIndex)

    expect(proposalName).to.equal(winningProposalName)
  })

  it('winning proposal should have proper amount of votes', async () => {
    const { voting } = await setup()

    await voting.vote(0)

    const winningProposalVoteCount =
      +(await voting.getWinningProposalVoteCount())

    expect(winningProposalVoteCount).to.equal(1)
  })

  it('should have no avaible votes', async () => {
    const { voting } = await setup()
    const [, secondAccount] = await ethers.getSigners()

    const avaibleVotes = +(await voting
      .connect(secondAccount)
      .getAvaibleVotes())

    expect(avaibleVotes).to.equal(0)
  })

  it('should add new voter', async () => {
    const { voting } = await setup()
    const [, secondAccount] = await ethers.getSigners()

    await voting.connect(secondAccount).addVoter()

    const avaibleVotes = +(await voting
      .connect(secondAccount)
      .getAvaibleVotes())

    expect(avaibleVotes).to.equal(1)
  })
})
