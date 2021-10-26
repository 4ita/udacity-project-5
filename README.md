# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.

## Packages

- Truffle: v5.1.4
- Solidity: ^0.5.2
- Node.js: v15.14.0
- Zokrates: v0.4.4
- truffle-hdwallet-provider: v1.0.17

### Installation

#### Zokrates

```
$ docker run -v /path/to/zokrates/code:/home/zokrates/code -ti zokrates/zokrates:0.4.4 /bin/bash
```

#### truffle-hdwallet-provider

To deploy this contract on the Ethereum Rinkeby test network, use truffle-hdwallet-provider package.

```
$ npm i truffle-hdwallet-provider
```

## Test

```
$ cd ./eth-contracts
$ truffle test
```

## Migration

```
$ truffle compile
$ truffle migrate --network rinkeby
```

## Mint NFT

Use [remix](https://remix-ide.readthedocs.io/en/latest/run.html).

1. Select "Injected Web3" as environment of deploy and run transactions
1. Display ABI in the active tab
1. In "At Address", input the contract address deployed on rinkeby network
1. Call `verifiedMint` function of appropriate parameters

## Project information

### SolnSquareVerifier

- Contract address: `0x652A617AEdCDEbFc729D6EB6c102D1802B1d2859`
- Contract ABI: [JSON File](./eth-contracts/build/contracts/RealEstateMarketplaceToken.json)
- OpenSea marketplace links
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
