const hre = require("hardhat");

async function getbalance(address){
  const balance = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balance);
}  

async function consolebalance(addresses){
  for(const address of addresses){
    console.log("balance:", await getbalance(address));
  }
} 
async function consolevotes(votes){
  var count = 0;
  for(const vote of votes){
    const timestamp = vote.timestamp;
    const name = vote.userName;
    const useraddress = vote.voter;
    const amount = vote.amount;

    console.log(`Index No:- ${count} , At ${timestamp},name ${name},user-address ${useraddress},amount ${amount}`);
    count++;
  }
}

async function main() {
  // get addresses
  const [owner,user1,user2] = await hre.ethers.getSigners();
  
  // get contracts and deploy
  const vote = await hre.ethers.getContractFactory("CreateVote");
  const voteContract = await vote.deploy();  

  await voteContract.deployed();

  console.log("Vote deployed to:", voteContract.address);

  const addresses = [owner.address,user1.address];
  
  console.log("before balance");
  await consolebalance(addresses);

  const amount = { value : hre.ethers.utils.parseEther("1") };

  // vote
  await voteContract.connect(user1).givevote("makima",amount);

  console.log("after balance");
  await consolebalance(addresses);

  const votes = await voteContract.getvotes();
  await consolevotes(votes);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
