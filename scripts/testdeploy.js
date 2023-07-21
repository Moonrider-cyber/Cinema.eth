const hre = require("hardhat");

async function getbalance(address) {
  const balance = await hre.ethers.provider.getBalance(address);
  console.log(" my balance is:- "+hre.ethers.utils.formatEther(balance));
}

async function main() {
  const [deployer, deployer2] = await hre.ethers.getSigners();

  const contractFactory = await hre.ethers.getContractFactory("MovieRatings_V3");
  const contract = await contractFactory.deploy();
  
  await contract.deployed();
  // console.log("Contract deployed to:", contract.address);
  
  // await getbalance(deployer.address);

  await contract.connect(deployer).rateMovie(1, "spiderman", "nice movie", 5);
  await contract.connect(deployer2).rateMovie(2, "one piece", "best hahahaha", 10);
  await contract.connect(deployer2).rateMovie(4, "naruto", "good✨", 8);
  
  console.log("Movie rating is: ");
  const Movierating = await contract.getMovieRating(1);
  console.log(Movierating);

  console.log("Movie Reviews is: ");
  const MovieReview = await contract.GetMovieReviews(1);
  console.log(MovieReview);

  const LatestMovieReviews = await contract.getLatestMovieReviews();
  console.log(LatestMovieReviews);
  
  await contract.connect(deployer).rateSeries(1, "dark", "nice movie", 5);
  await contract.connect(deployer).rateSeries(2, "jjk", "best hahahaha", 10);
  
  
  console.log("Series rating is: ");
  const Seriesrating = await contract.getSeriesRating(1);
  console.log(Seriesrating);

  const LatestSeriesReviews = await contract.getLatestSeriesReviews();
  console.log(LatestSeriesReviews);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run --network hardhat scripts\testdeploy.js