const Voting = artifacts.require('Voting')

module.exports = deployer => {
  deployer.deploy(Voting, ['p1', 'p2'], 2)
}
