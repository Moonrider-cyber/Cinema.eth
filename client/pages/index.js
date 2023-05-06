import { useState } from "react";
import { Inter } from "next/font/google";
import abi from "../contracts/CreateVote.json";
import { ethers } from "ethers";

import GiveVote from "@/components/GiveVote";
import { GetAllVote } from "@/components/GetAllVote";
import Navbar from "@/components/layout/Navbar";
import HomeMovieList from "@/components/HomeMovieList";
import Search from "@/components/layout/Search";
import Footer from "@/components/layout/Footer";

var Web3 = require("web3");
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState({
    address: null,
    balance: null,
  });
  const [moviedata, setMoviedata] = useState(null);

  const connectwallet = async () => {
    const contractAddress = "0x2720999b9f9c3dcf8caa7a5488a8012b2a7469e8";
    const contractAbi = abi.abi;

    try {
      const { ethereum } = window;

      if (ethereum) {
        window.ethereum.on("chainChanged", () => window.location.reload());
        
        window.ethereum.on("accountsChanged", (accounts) => {setAccount({address: accounts[0]});});

        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        setState({ provider, signer, contract });

        // get user balance
          const web3 = new Web3(Web3.givenProvider);
          await web3.eth.getBalance(accounts[0])
          .then((balance) => {
            balance = web3.utils.fromWei(balance, 'ether')
            setAccount({
              address: accounts[0],
              balance: balance,
            });
          });
      } else {
        alert("Please install MetaMask");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={`${inter.className}`}>
      <Navbar connectwallet={connectwallet} state={state} account={account} />

      <Search setMoviedata={setMoviedata} />

      <HomeMovieList moviedata={moviedata} setMoviedata={setMoviedata} />
      {/* <GiveVote state={state} /> */}
      {/* <GetAllVote state={state} /> */}

      <Footer />
    </main>
  );
}
