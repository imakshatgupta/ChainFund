// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Transactions {
    event Transfer(address from, address receiver, uint256 amount);

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address receiver, uint256 amount) public payable {
        transactions.push(TransferStruct(msg.sender, receiver, amount));
        emit Transfer(msg.sender, receiver, amount);
    }

    function getBalance() public view returns (uint256) {
        uint256 balance = 0;
        for (uint256 i = 0; i < transactions.length; i++) {
            if (transactions[i].receiver == address(this)) {
                balance += transactions[i].amount;
            }
        }
        return balance;
    }
}
