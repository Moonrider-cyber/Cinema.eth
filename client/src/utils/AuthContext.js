"use client";

import { useState, createContext } from "react";
import abi from "../contracts/MovieRatings.json";
import { ethers } from "ethers";
var Web3 = require("web3");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Value, setValue] = useState({
    provider: null,
    signer: null,
    contract: null,
    isLogged: false,
  });
  const [account, setAccount] = useState({
    address: null,
    balance: null,
  });

  const connectwallet = async () => {
    const contractAddress = "0x9E5F3878E7ffFDEb451e757B01ba391e3bC4CFa1";
    const contractAbi = abi.abi;
    try {
      const { ethereum } = window;

      if (ethereum) {
        window.ethereum.on("chainChanged", () => window.location.reload());

        window.ethereum.on("accountsChanged", (accounts) => {
          setAccount({ address: accounts[0] });
        });

        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        setValue({ provider, signer, contract, isLogged: true });

        // get user balance
        const web3 = new Web3(Web3.givenProvider);
        await web3.eth.getBalance(accounts[0]).then((balance) => {
          balance = web3.utils.fromWei(balance, "ether");
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

  const AuthValue = {
    connectwallet,
    provider: Value.provider,
    signer: Value.signer,
    contract: Value.contract,
    address: account.address,
    balance: account.balance,
    isLogged: Value.isLogged,
  };

  const callFunction = async () => {
    // await Value.contract.getMovieRating(1)
    // .then((res)=>{
    //   console.log("successfully called" + res);
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    await Value.contract.testfunction().then((res) => {
      console.log(res);
    });
  };
  if (Value.contract != null) {
    callFunction();
  }

  return (
    <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
