# Solidity Voting Contract

[![CI](https://github.com/Mnigos/solidity-voting-contract/actions/workflows/main.yml/badge.svg)](https://github.com/Mnigos/solidity-voting-contract/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/Mnigos/solidity-voting-contract/branch/main/graph/badge.svg?token=d0C6GbFlHC)](https://codecov.io/gh/Mnigos/solidity-voting-contract)

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![CodeCov](https://img.shields.io/badge/codecov-%23ff0077.svg?style=for-the-badge&logo=codecov&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TsNode](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)

![Web3.js](https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white)
![Blockchain](https://img.shields.io/badge/Blockchain.com-121D33?logo=blockchaindotcom&logoColor=fff&style=for-the-badge)

![Commitlint](https://img.shields.io/badge/commitlint-000000.svg?style=for-the-badge&logo=commitlint&logoColor=white)
![ConventionalCommits](https://img.shields.io/badge/Conventional%20Commits-FE5196.svg?style=for-the-badge&logo=Conventional-Commits&logoColor=white)

![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![EditorConfig](https://img.shields.io/badge/Editor%20Config-E0EFEF?style=for-the-badge&logo=editorconfig&logoColor=000)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
![Chai](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)

![.ENV](https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## Description

Solidity Smart Contract for simple voting application.

Deploy on `Goerli`: https://goerli.etherscan.io/address/0x37354B24326911424cD0f3BB8a0D1C372C42F80A

Goerli address: `0x37354B24326911424cD0f3BB8a0D1C372C42F80A`

Other repositories:

- [voting-www](https://github.com/Mnigos/voting-www)

## Installation

```bash
$ yarn
```

## Linting

```bash
# lint javascript/typescript files
$ yarn lint:js

# lint solidity files
$ lyarn int:sol

# lint all files
$ yarn lint

# lint and fix all files
$ yarn lint:fix

# format solidity files
$ yarn format
```

## Testing

```bash
# run tests
$ yarn test

# run tests in watch mode
$ yarn test:watch

# run tests with coverage
$ yarn test:coverage
```

## Deploy

```bash
# compile contracts
$ yarn compile

# deploy contract to kovan test network
$ yarn deploy:kovan
```
