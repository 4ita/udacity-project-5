pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract Verifier {
    function verifyTx(
        uint256[2] memory a,
        uint256[2] memory a_p,
        uint256[2][2] memory b,
        uint256[2] memory b_p,
        uint256[2] memory c,
        uint256[2] memory c_p,
        uint256[2] memory h,
        uint256[2] memory k,
        uint256[2] memory input
    ) public returns (bool r) {}
}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is RealEstateMarketplaceToken {
    Verifier verifier;

    constructor(
        address verifierAddress,
        string memory _name,
        string memory _symbol,
        string memory _baseTokenURI
    ) public RealEstateMarketplaceToken(_name, _symbol, _baseTokenURI) {
        verifier = Verifier(verifierAddress);
    }

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256[2] a;
        uint256[2] a_p;
        uint256[2][2] b;
        uint256[2] b_p;
        uint256[2] c;
        uint256[2] c_p;
        uint256[2] h;
        uint256[2] k;
        uint256[2] input;
        address to;
        uint256 indexId;
    }

    // TODO define an array of the above struct
    Solution[] solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => bool) submittedSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 indexId, address to);

    // check whether the solution has not been used before or not
    modifier hasSolution(bytes32 key) {
        require(submittedSolutions[key], "Solution is not unique");
        _;
    }

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(
        uint256[2] memory a,
        uint256[2] memory a_p,
        uint256[2][2] memory b,
        uint256[2] memory b_p,
        uint256[2] memory c,
        uint256[2] memory c_p,
        uint256[2] memory h,
        uint256[2] memory k,
        uint256[2] memory input,
        address to,
        uint256 indexId
    ) public returns (bool) {
        Solution memory solution = Solution(
            a,
            a_p,
            b,
            b_p,
            c,
            c_p,
            h,
            k,
            input,
            to,
            indexId
        );
        bool hasSucceed = verifier.verifyTx(
            a,
            a_p,
            b,
            b_p,
            c,
            c_p,
            h,
            k,
            input
        );
        require(hasSucceed, "verification is failed");

        solutions.push(solution);
        return true;
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function verifiedMint(
        uint256[2] memory a,
        uint256[2] memory a_p,
        uint256[2][2] memory b,
        uint256[2] memory b_p,
        uint256[2] memory c,
        uint256[2] memory c_p,
        uint256[2] memory h,
        uint256[2] memory k,
        uint256[2] memory input,
        address to,
        uint256 indexId
    ) public returns (bool) {
        bytes32 key = keccak256(
            abi.encodePacked(a, a_p, b, b_p, c, c_p, h, k, indexId, to)
        );
        // should be false if the solution is unique
        require(!submittedSolutions[key], "Solution is not unique");
        
        submittedSolutions[key] = true;
        super.mint(to, indexId);
        return true;
    }
}
