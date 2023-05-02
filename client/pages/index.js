import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import abi from '../contracts/CreateVote.json'
import { ethers } from 'ethers';

import GiveVote from '@/components/GiveVote';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  useEffect(() => {
    
    const connectwallet = async () => {
      const contractAddress = "0x82d3e35bcb9534b95c23896aa8e7c286f6c2ec81";
      const contractAbi = abi.abi;

      try{
        const { ethereum } = window;

        if(ethereum){
          const accounts = await ethereum.request({ method: 'eth_requestAccounts',});
          
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractAbi, signer);
          setState({provider, signer, contract});
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
      <GiveVote state={state} />
    </main>
  )
}
