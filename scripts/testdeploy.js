const hre = require("hardhat");

async function getbalance(address) {
  const balance = await hre.ethers.provider.getBalance(address);
  console.log(" my balance is:- "+hre.ethers.utils.formatEther(balance));
}

async function main() {
  const [deployer, deployer2] = await hre.ethers.getSigners();
  const deployeraddress = deployer.address;  

  const contractFactory = await hre.ethers.getContractFactory("MovieRatings_V2");
  const contract = await contractFactory.deploy();
  
  await contract.deployed();
  // console.log("Contract deployed to:", contract.address);
  
  // await getbalance(deployeraddress);

  // await contract.connect(deployer).rateMovie(1, "nice movie", 5);
  // await contract.connect(deployer).rateMovie(1, "best hahahaha", 10);
  
  // console.log("Movie rating is: ");
  // const Movierating = await contract.getMovieRating(1);
  // console.log(Movierating);

  // console.log("Movie Reviews is: ");
  // const MovieReview = await contract.GetMovieReviews(1);
  // console.log(MovieReview);

  
  await contract.connect(deployer).rateSeries(1, "nice movie", 5);
  await contract.connect(deployer).rateSeries(1, "best hahahaha", 10);
  
  
  console.log("Series rating is: ");
  const Seriesrating = await contract.getSeriesRating(1);
  console.log(Seriesrating);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts\testdeploy.js