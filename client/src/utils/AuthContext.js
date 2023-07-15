"use client";

import { useState, createContext, useEffect } from "react";
import abi from "../contracts/MovieRatings_V2.json";
import { ethers, JsonRpcProvider } from "ethers";
var Web3 = require("web3");
import { toast } from "react-toastify";

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

  async function connectcontract() {
    const provider = new JsonRpcProvider(
      "https://eth-sepolia.g.alchemy.com/v2/vZ27K8ZtNERkM4E-hnXSBf96Hjt26HIe"
    );

    const contractAddress = "0xa374c30b039F0e9B019C1f0C623D57aE94A3B94f";
    // const contractAddress = "0x6105146776f153f92215bce59a104d7158594d13";
    const contractABI = abi.abi;

    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );

    setValue({ provider, signer: null, contract, isLogged: false });
  }

  useEffect(() => {
    connectcontract();
  }, []);

  // get user balance
  const getaccountdetails = async (accounts) => {
    const web3 = new Web3(Web3.givenProvider);
    await web3.eth.getBalance(accounts[0]).then((balance) => {
      balance = web3.utils.fromWei(balance, "ether");
      setAccount({
        address: accounts[0],
        balance: balance,
      });
    });
  };

  const connectMetaMask = async () => {
    const contractAddress = "0xa374c30b039F0e9B019C1f0C623D57aE94A3B94f";
    const contractAbi = abi.abi;
    try {
      const { ethereum } = window;

      if (ethereum) {
        window.ethereum.on("chainChanged", () => window.location.reload());

        window.ethereum.on("accountsChanged", (accounts) => {
          getaccountdetails(accounts);
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

        getaccountdetails(accounts);
      } else {
        toast.warning("Please install MetaMask");
      }
    } catch (error) {
      if(error.code === -32002){
        toast.warning("Please login to metamask");
      }
        
      console.log("something went wrong at connecting metamask",error);
    }
  };

  const AuthValue = {
    connectMetaMask,
    provider: Value.provider,
    signer: Value.signer,
    contract: Value.contract,
    address: account.address,
    balance: account.balance,
    isLogged: Value.isLogged,
  };
  // const callFunction = async () => {
  //   await Value.contract.getMovieRating(1)
  //   .then((res)=>{
  //     console.log("successfully called" + res);
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // };
  // if (Value.contract != null) {

  //   callFunction();
  // }

  return (
    <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
