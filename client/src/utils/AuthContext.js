"use client"

import {useState, createContext} from 'react'
import abi from "../contracts/CreateVote.json";
import { ethers } from "ethers";
var Web3 = require("web3");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
      });
      const [account, setAccount] = useState({
        address: null,
        balance: null,
      });
    
      const connectwallet = async () => {
        const contractAddress = "0x2720999b9f9c3dcf8caa7a5488a8012b2a7469e8";
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
        provider: state.provider,
        signer: state.signer,
        contract: state.contract,
        address: account.address,
        balance: account.balance,
        isLogged: false,
    };
  
    return (
    <AuthContext.Provider value={AuthValue}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContext;