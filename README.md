# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

## Packages

- Truffle: v5.4.16
- Solidity: ^0.5.2
- Node.js: v15.14.0
- Zokrates: v0.4.4
- truffle-hdwallet-provider: v1.0.17

### Installation

#### Truffle

You can compile, test and migrate to the Ethereum network with Truffle.

```
$ npm i -g truffle
```

#### Zokrates

Zokrates is the software supporting to introduce zk-SNARK.

```
$ docker run -v /path/to/zokrates/code:/home/zokrates/code -ti zokrates/zokrates:0.4.4 /bin/bash
```

#### truffle-hdwallet-provider

To deploy this contract on the Ethereum Rinkeby test network, use truffle-hdwallet-provider package.

```
$ npm i truffle-hdwallet-provider
```

## Test

Execute test scripts below `/test` directory.

- TestERC721Mintable.js: test to mint the ERC721 Mintable token
- TestSolnSquareVerifier.js: test to bind the ERC721 Mintable token and the functions of Zokrates
- TestSquareVerifier.js: test to work zk-SNARK algorithms with Zokrates

```
$ cd ./eth-contracts
$ truffle test
```

## Migration

Compile solidity files and deploy to Ethereum rinkeby test network.

To connect rinkeby network, `--network` option refer to the settings in [truffle-config.js](./eth-contracts/truffle-config.js).

```
$ truffle compile
$ truffle migrate --network rinkeby
```

## Mint NFT

Use [remix](https://remix-ide.readthedocs.io/en/latest/run.html) to mint the migrated contract.

You can interact with the contract when open the remix editor and input your contract in "At Address".

1. Select "Injected Web3" as environment of deploy and run transactions
1. Display ABI in the active tab
1. In "At Address", input the contract address deployed on rinkeby network
1. Call `verifiedMint` function with appropriate parameters

You need to set parameters about zk-SNARK (`a`,`a_p`,`b`,`b_p`,`c`,`c_p`,`h`,`k`, `input`), receipient address and token ID.

## Project information

In this project, deploy two contracts.

- verifier.sol: inherited from SolnSquareVerifier
- SolnSquareVerifier.sol

### Rinkeby network

This contract migrated in Ethereum rinkeby test network.

Contract address is `0x652A617AEdCDEbFc729D6EB6c102D1802B1d2859`.

### ABI

When you interact with your contract, you need to send the message according to the contract ABI. It is generated in compiling.

Detail in [JSON File](./eth-contracts/build/contracts/RealEstateMarketplaceToken.json)

### OpenSea Marketplace

OpenSea is the marketplace where you can trade NFT.

I minted some tokens and sell in OpenSea.

- <https://testnets.opensea.io/assets/0x652a617aedcdebfc729d6eb6c102d1802b1d2859/1>
- <https://testnets.opensea.io/assets/0x652a617aedcdebfc729d6eb6c102d1802b1d2859/2>
- <https://testnets.opensea.io/assets/0x652a617aedcdebfc729d6eb6c102d1802b1d2859/3>
- <https://testnets.opensea.io/assets/0x652a617aedcdebfc729d6eb6c102d1802b1d2859/4>
- <https://testnets.opensea.io/assets/0x652a617aedcdebfc729d6eb6c102d1802b1d2859/5>

# Project Resources

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)
