// Contract based on https://docs.openzeppelin.com/contracts/5.x/erc721
// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ExampleNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;

    constructor(address initialOwner)
        ERC721("TEST1337", "TEST2137")
        Ownable(initialOwner)
    {}

    function mintNFT(address recipient, string memory _tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds += 1;

        uint256 newItemId = _tokenIds;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, _tokenURI);

        return newItemId;
    }

    function mintNFTs(address recipient, string[] memory _tokenURIs)
        public
        onlyOwner
        returns (uint256[] memory)
    {
        uint256[] memory tokenIds = new uint256[](_tokenURIs.length);
        for (uint256 i = 0; i < _tokenURIs.length; i++) {
            tokenIds[i] = mintNFT(recipient, _tokenURIs[i]);
        }
        return tokenIds;
    }
}
