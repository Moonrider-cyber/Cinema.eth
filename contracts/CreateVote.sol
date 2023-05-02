// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract CreateVote {
    struct Vote{
        address voter;
        string userName;
        // string movieId;
        uint256 amount;
        uint256 timestamp;
    }

    Vote[] votes;
    address payable owner;

     constructor() payable{
        owner = payable(msg.sender);
    }

    function givevote(string memory userName) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        votes.push(Vote(msg.sender, userName,msg.value, block.timestamp));
    }
    
    function getvotes() public view returns (Vote[] memory){
        return votes;
    }
}
