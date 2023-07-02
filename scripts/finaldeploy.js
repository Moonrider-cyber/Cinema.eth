const hre = require("hardhat");

async function main() {

  const contractFactory = await hre.ethers.getContractFactory("MovieRatings");
  const contract = await contractFactory.deploy();
  
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}  

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
// cmd:npx hardhat run --network sepolia scripts/finaldeploy.js
//0x9E5F3878E7ffFDEb451e757B01ba391e3bC4CFa1