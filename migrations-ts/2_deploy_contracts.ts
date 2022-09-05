const Voting = artifacts.require('Voting')

const migration: Truffle.Migration = deployer => {
  deployer.deploy(Voting, ['p1', 'p2'], 2)
}

module.exports = migration
