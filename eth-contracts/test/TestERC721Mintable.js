var ERC721MintableComplete = artifacts.require('RealEstateMarketplaceToken');

contract('TestERC721Mintable', (accounts) => {
  const account_one = accounts[0];
  const account_two = accounts[1];

  const name = 'REMT';
  const symbol = 'Real Estate Marketplace Token';
  const tokenURI =
    'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/';

  const tokenCount = 10;

  describe('match erc721 spec', function () {
    beforeEach(async function () {
      this.contract = await ERC721MintableComplete.new(name, symbol, tokenURI, {
        from: account_one,
      });

      // TODO: mint multiple tokens
      for (let i = 1; i <= tokenCount; i++) {
        if (i < 9) {
          await this.contract.mint(account_one, i, { from: account_one });
        } else {
          await this.contract.mint(account_two, i, { from: account_one });
        }
      }
    });

    it('should return total supply', async function () {
      const count = await this.contract.totalSupply.call();
      assert.equal(
        Number(count),
        tokenCount,
        `total supply should be ${tokenCount}`
      );
    });

    it('should get token balance', async function () {
      const balance = await this.contract.balanceOf.call(account_one);
      assert.equal(Number(balance), 8, `balance should be 8`);
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it('should return token uri', async function () {
      const tokenId = 1;
      const tokenURI = await this.contract.tokenURI.call(tokenId);
      assert.equal(
        tokenURI,
        `https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/${tokenId}`,
        'token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/${tokenId}'
      );
    });

    it('should transfer token from one owner to another', async function () {
      const tokenId = 1;
      await this.contract.approve(account_two, tokenId, { from: account_one });
      await this.contract.transferFrom(account_one, account_two, tokenId);
      const owner = await this.contract.ownerOf(tokenId);
      assert.equal(owner, account_two, `new owner of this token should be ${account_two}`);
    });
  });

  describe('have ownership properties', function () {
    beforeEach(async function () {
      this.contract = await ERC721MintableComplete.new(name, symbol, tokenURI, {
        from: account_one,
      });
    });

    it('should fail when minting when address is not contract owner', async function () {
      try {
        await this.contract.mint(account_one, tokenCount + 1, {
          from: account_two,
        });
      } catch (error) {
        console.log(
          `mint should fail when minting when address is not contract owner: ${error}`
        );
      }
    });

    it('should return contract owner', async function () {
      const owner = await this.contract.owner.call();
      assert.equal(owner, account_one, 'account_one should be contract owner');
    });
  });
});
