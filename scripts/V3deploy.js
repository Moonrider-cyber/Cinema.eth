const { ethers, upgrades } = require("hardhat");

async function main() {
    
    const MRContract = await ethers.getContractFactory("MovieRatings_V3");
    console.log("Deploying MovieRatings_V3...");
    const contract = await upgrades.deployProxy(MRContract);
    
    await contract.deployed();
    console.log("MovieRatings_V3 deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// cmd:npx hardhat run --network sepolia scripts/V3deploy.js
// 0xbB7c8D046d4c1fd17723aB71A8a6e32af3b34aE5