import fs from "fs"
import dotenv from "dotenv"
import { task } from "hardhat/config"
import {File, NFTStorage} from "nft.storage"

import { readNftInfo, updateNftInfo } from "../scripts/nftInfoUtils"

dotenv.config()

const API_KEY = process.env.NFT_STORAGE_API_KEY!

task("store:Metadata", "Store a image and it's metadata to IPFS")
    .setAction(async (taskArgs, hre) => {
        const { COLLECTION_NAME, DESCRIPTION, IMAGE_NAME } = readNftInfo()

        const client = new NFTStorage({ token: API_KEY })
        const metadata = await client.store({
            name: COLLECTION_NAME,
            description: DESCRIPTION,
            image: new File(
                [await fs.promises.readFile(`assets/${IMAGE_NAME}`)],
                `${IMAGE_NAME}`,
                { type: `image/${IMAGE_NAME.split(",")[1]}` }
            ),
        })
        console.log(`Metadata stored on Filecoin and IPFS with URL: ${metadata.url}`)
        updateNftInfo("METADATA_URL", metadata.url)
    })
