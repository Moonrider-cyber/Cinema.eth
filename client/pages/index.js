import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import abi from '../contracts/CreateVote.json'
import { ethers } from 'ethers';

import GiveVote from '@/components/GiveVote';
import { GetAllVote } from '@/components/GetAllVote';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('None')

  useEffect(() => {
    
    const connectwallet = async () => {
      const contractAddress = "0x2720999b9f9c3dcf8caa7a5488a8012b2a7469e8";
      const contractAbi = abi.abi;

      try{
        const { ethereum } = window;

        if(ethereum){
          const accounts = await ethereum.request({ method: 'eth_requestAccounts',});
          
          window.ethereum.on('chainChanged', () => window.location.reload());

          window.ethereum.on('accountsChanged', (accounts) => {
            setAccount(accounts[0]);
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractAbi, signer);
          setState({provider, signer, contract});
          setAccount(accounts[0]);
        }else{
          alert("Please install MetaMask");
        }
      }
      catch(error){
        console.log(error);
      }
    }

    connectwallet();
  }, []);
  
  return (
    <main className={`${inter.className}`}>
      <p>Connected Account:- {account}</p>
        <GiveVote state={state} />
      <GetAllVote state={state} />
    </main>
  )
}
