import { task, types } from "hardhat/config"

import { readNftInfo } from "../scripts/nftInfoUtils"

task("mint:NFT", "Mint the deployed NFT")
    .addOptionalParam("number", "Numbers of NFT you want to mint (default 1)", 1, types.int)
    .setAction(async (taskArgs, hre) => {
        const { CONTRACT_ADDRESS, METADATA_URL } = readNftInfo()

        const SampleNFT = await hre.ethers.getContractFactory("SampleNFT")
        const [owner] = await hre.ethers.getSigners()

        const number: number = taskArgs.number
        for (let i = 0; i < number; i++) {
            await SampleNFT.attach(CONTRACT_ADDRESS).mintNFT(owner.address, METADATA_URL)
            console.log(`Minted ${i + 1} NFT to: ${owner.address}`)
        }
    })
