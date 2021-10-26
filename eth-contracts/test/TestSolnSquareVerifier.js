var verifier = artifacts.require('Verifier');
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

const proofJSON = require('../../zokrates/code/square/proof.json');
const proof = proofJSON.proof;

contract('TestSolnSquareVerifier', (accounts) => {
  const account_one = accounts[0];
  const account_two = accounts[1];

  const name = 'REMT';
  const symbol = 'Real Estate Marketplace Token';
  const baseTokenURI =
    'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/';
  const tokenId = 1;

  describe('add a solution and mint a token', function () {
    beforeEach(async function () {
      const verifierContract = await verifier.new();
      this.contract = await SolnSquareVerifier.new(
        verifierContract.address,
        name,
        symbol,
        baseTokenURI,
        {
          from: account_one,
        }
      );
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('should add a new solution', async function () {
      const result = await this.contract.addSolution.call(
        ...Object.values(proof),
        proofJSON.input,
        account_two,
        tokenId
      );
      assert.equal(result, true, 'solution should be added');
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('should mint a token', async function () {
      const result = await this.contract.verifiedMint.call(
        ...Object.values(proof),
        proofJSON.input,
        account_two,
        tokenId
      );
      assert.equal(result, true, 'token should be minted');
    });
  });
});
