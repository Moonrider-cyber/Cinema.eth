const { ethers, upgrades } = require("hardhat");

async function main() {
    
    const MRContractV2 = await ethers.getContractFactory("MovieRatings_V2");
    console.log("Upgrading MovieRatings_V1...");
    await upgrades.upgradeProxy("0xa374c30b039F0e9B019C1f0C623D57aE94A3B94f", MRContractV2);
    console.log("MovieRatings_V1 upgraded to MovieRatings_V2");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// cmd:npx hardhat run --network sepolia scripts/V2deploy.js
// 0xa374c30b039F0e9B019C1f0C623D57aE94A3B94f