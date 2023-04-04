# deploy-your-own-nft
A tool to deploy and mint your own NFT

## Tech Stack
- NodeJS v18 (recommended)
- Typescript v5 (recommended)
- Hardhat

## How to use
### Setup
- Install dependencies: `npm ci`
- Update the `.env` file (sample is provided)
- In the `assets` folder:
  1. Put your image into `assets` folder
  2. Update the `nft-info.json` file

### Use the tool
Run the below command to check available tasks:
```shell
hardhat help
```
1. Store metadata to IPFS:
```shell
npm run store:Metadata
```
2. Deploy the ERC721 smart contract
```shell
npm run deploy:mumbai
```
3. Mint NFTs
```shell
npm run mint:mumbai
```
If you want to mint multiple NFTs:
```shell
hardhat --network PolygonMumbai -- mint:NFT --number 3
```
