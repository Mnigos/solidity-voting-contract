const voting = artifacts.require('Voting')
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract('Voting', accounts => {
  it('should assert true', async () => {
    await voting.deployed()
    return assert.isTrue(true)
  })

  it('should have 2 avaible votes', async () => {
    const votingInstance = await voting.deployed()

    const avaibleVotes = +(await votingInstance.getAvaibleVotes())

    assert.equal(avaibleVotes, 2)
  })

  it('should vote', async () => {
    const votingInstance = await voting.deployed()

    await votingInstance.vote(0)

    const voterInfo = await votingInstance.voters(accounts[0])

    assert.equal(voterInfo[0], true)
  })

  it('should add proposal', async () => {
    const votingInstance = await voting.deployed()

    await votingInstance.addProposal('p3')

    const newProposal = await votingInstance.proposals(2)

    assert.equal(newProposal[0], 'p3')
  })

  it('should get winning proposal index', async () => {
    const votingInstance = await voting.deployed()

    const winningProposalIndex =
      +(await votingInstance.getWinningProposalIndex())

    assert.equal(winningProposalIndex, 0)
  })

  it('winning proposal name should match index', async () => {
    const votingInstance = await voting.deployed()

    const winningProposalIndex =
      +(await votingInstance.getWinningProposalIndex())

    const winningProposalName = await votingInstance.getWinningProposalName()

    const proposal = await votingInstance.proposals(winningProposalIndex)

    assert.equal(proposal[0], winningProposalName)
  })

  it('winning proposal should have proper amount of votes', async () => {
    const votingInstance = await voting.deployed()

    const winningProposalVoteCount =
      +(await votingInstance.getWinningProposalVoteCount())

    assert.equal(winningProposalVoteCount, 2)
  })

  it('should have no avaible votes', async () => {
    const votingInstance = await voting.new(['p1', 'p2'], 2, {
      from: accounts[1],
    })

    const avaibleVotes = +(await votingInstance.getAvaibleVotes())

    assert.equal(avaibleVotes, 0)
  })

  it('should add new voter', async () => {
    const votingInstance = await voting.new(['p1', 'p2'], 2, {
      from: accounts[1],
    })

    await votingInstance.addVoter()

    const avaibleVotes = +(await votingInstance.getAvaibleVotes())

    assert.equal(avaibleVotes, 2)
  })
})
