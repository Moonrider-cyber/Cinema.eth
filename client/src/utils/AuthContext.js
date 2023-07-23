"use client";

import { useState, createContext, useEffect, useCallback } from "react";
import abi from "../contracts/MovieRatings_V3.json";
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
  // const contractAddress = "0xa374c30b039F0e9B019C1f0C623D57aE94A3B94f";
  const contractAddress = "0xbB7c8D046d4c1fd17723aB71A8a6e32af3b34aE5";
  const contractABI = abi.abi;

  const connectcontract = useCallback(() => {
    const provider = new JsonRpcProvider(
      "https://eth-sepolia.g.alchemy.com/v2/vZ27K8ZtNERkM4E-hnXSBf96Hjt26HIe"
    );
    
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );

    setValue({ provider, signer: null, contract, isLogged: false });
  }, [])
  useEffect(() => {
    connectcontract();
  }, [connectcontract]);

  
  
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
    try {
      let { ethereum } = window;

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
          signer
        );

        setValue({ provider, signer, contract, isLogged: true });

        getaccountdetails(accounts);
        
        console.log("signer ", signer);
        console.log("contract ", contract);
        
      } else {
        toast.warning("Please install MetaMask");
      }
    } catch (err) {
      if(err.code === -32002){
        toast.warning("Please login to metamask");
      }
        
      console.error("something went wrong at connecting metamask",err);
    }
  };
  
  
  const connectCoinBase = async () => {
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
          contractABI,
          signer
        );

        setValue({ provider, signer, contract, isLogged: true });

        getaccountdetails(accounts);
      } else {
        toast.warning("Please install Coinbase Wallet");
      }
    } catch (err) {
      console.error("something went wrong at connecting coinbase",err);
    }
  }
  const connectPhantom = async () => {
    try {
      let { ethereum } = window;

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
          contractABI,
          signer
        );

        setValue({ provider, signer, contract, isLogged: true });

        getaccountdetails(accounts);
        
        
      } else {
        toast.warning("Please install Phantom Wallet");
      }
    } catch (err) {
      if(err.code === -32002){
        toast.warning("Please login to Phantom");
      }
        
      console.error("something went wrong at connecting phantom",err);
    }
  }
  
  

  const AuthValue = {
    connectMetaMask,
    connectCoinBase,
    connectPhantom,
    provider: Value.provider,
    signer: Value.signer,
    contract: Value.contract,
    address: account.address,
    balance: account.balance,
    isLogged: Value.isLogged,
  };

  return (
    <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
