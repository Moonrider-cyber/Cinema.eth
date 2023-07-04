const { ethers, upgrades } = require("hardhat");

async function main() {
    
    const MRContract = await ethers.getContractFactory("MovieRatings_V1");
    console.log("Deploying MovieRatings_V1...");
    const contract = await upgrades.deployProxy(MRContract);
    
    await contract.deployed();
    console.log("MovieRatings_V1 deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// cmd:npx hardhat run --network sepolia scripts/V1deploy.js
// 0xa374c30b039F0e9B019C1f0C623D57aE94A3B94f
