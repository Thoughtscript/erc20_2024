'use strict'

/**
 *  Ether.js Facade
 *
 *  @Author - Adam InTae Gerard - https://www.linkedin.com/in/adamintaegerard/
 */

import { ethers } from "ethers"
import { CONTRACT_ADDRESS, HARDHAT_NETWORK } from '../Constants'

// const ABI = require("../../artifacts/contracts/MyCoin.sol/MyCoin.json")

let PROVIDER = undefined

// https://moralis.io/ethers-js-tutorial-how-to-get-started-using-a-simple-ethers-js-example/
module.exports = {
    network: () => {
        return {
            connect: async () => {
                if (!PROVIDER) PROVIDER = await ethers.getDefaultProvider(HARDHAT_NETWORK)
                return PROVIDER
            }
        }
    },

    // contract: new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER),

    // in wei: 1 ETH = 1000000000000000000 wei
    balance: async (address) => await PROVIDER.getBalance(address)
}