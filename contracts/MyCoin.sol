// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

// Use the following to import console.sol
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract MyCoin is ERC20, ERC20Permit {
    constructor() ERC20("MyCoin", "MC") ERC20Permit("MyCoin") {}
}

// https://www.openzeppelin.com/contracts