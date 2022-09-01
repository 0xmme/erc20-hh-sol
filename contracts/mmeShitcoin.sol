//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract mmeShitcoin is ERC20 {
    constructor(uint256 initialSupply) ERC20("mmeShitcoin", "mSHIT") {
        _mint(msg.sender, initialSupply);
    }
}
