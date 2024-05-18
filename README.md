# ERC20_2024

[![](https://img.shields.io/badge/HardHat-2.22.3-yellow.svg)](https://hardhat.org/docs)
[![](https://img.shields.io/badge/ERC-20-blue.svg)](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
[![](https://img.shields.io/badge/React-18.2.0-orange.svg)](https://react.dev/)

Some big changes:

1. [Hard Hat](https://hardhat.org/hardhat-network/docs/overview) is now preferred [post-Truffle and Ganache](https://archive.trufflesuite.com/docs/truffle/how-to/migrate-to-hardhat/)
2. [ethers](https://www.npmjs.com/package/ethers) is better maintained and typically used now instead of [web3](https://www.npmjs.com/package/web3).

## Installation

```bash
# Copies contracts dir into both containers for:
## 1.) Compilation for generating frontend facade and ABI's
## 2.) Compilation and deployment
bash run.sh
```

## Resources and Links

1. https://hardhat.org/hardhat-network/docs/overview
2. https://wizard.openzeppelin.com/#erc20
3. https://github.com/NomicFoundation/hardhat-ignition-examples/tree/main
4. https://moralis.io/ethers-js-tutorial-how-to-get-started-using-a-simple-ethers-js-example/