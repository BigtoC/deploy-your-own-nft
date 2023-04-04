import { task } from "hardhat/config"

import { updateNftInfo } from "../scripts/nftInfoUtils"

import type { Contract, ContractFactory } from 'ethers'

task("deploy:NFT", "Use a standard ERC20 contract to deploy an ERC20 token with customizations")
    .setAction(async (taskArgs, hre) => {
        console.log("Start deploying...")
        const SampleNFT: ContractFactory = await hre.ethers.getContractFactory("SampleNFT")
        const factory: Contract = await SampleNFT.deploy()
        await factory.deployed()

        const txHash: string = factory.deployTransaction.hash
        const txReceipt = await hre.ethers.provider.waitForTransaction(txHash)
        const contractAddress: string = txReceipt.contractAddress
        console.log(`Contract deployed to address: ${contractAddress}`)
        updateNftInfo("CONTRACT_ADDRESS", contractAddress)
    })