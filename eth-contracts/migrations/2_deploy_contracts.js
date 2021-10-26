// migrating the appropriate contracts
var Verifier = artifacts.require('./verifier.sol');
var SolnSquareVerifier = artifacts.require('./SolnSquareVerifier.sol');

const name = 'Real Estate Marketplace Token';
const symbol = 'REMT';
const baseTokenURI =
  'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/';

module.exports = function (deployer) {
  deployer.deploy(Verifier).then(() => {
    deployer.deploy(
      SolnSquareVerifier,
      Verifier.address,
      name,
      symbol,
      baseTokenURI
    );
  });
};
