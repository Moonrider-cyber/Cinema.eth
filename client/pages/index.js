import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import abi from '../contracts/CreateVote.json'
import { ethers } from 'ethers';
import axios from 'axios';

import GiveVote from '@/components/GiveVote';
import { GetAllVote } from '@/components/GetAllVote';
import Navbar from '@/components/layout/Navbar';
import {MovieCard} from '@/components/MovieCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('None')

  useEffect(() => {
    
    // const connectwallet = async () => {
    //   const contractAddress = "0x2720999b9f9c3dcf8caa7a5488a8012b2a7469e8";
    //   const contractAbi = abi.abi;

    //   try{
    //     const { ethereum } = window;

    //     if(ethereum){
    //       const accounts = await ethereum.request({ method: 'eth_requestAccounts',});
          
    //       window.ethereum.on('chainChanged', () => window.location.reload());

    //       window.ethereum.on('accountsChanged', (accounts) => {
    //         setAccount(accounts[0]);
    //       });

    //       const provider = new ethers.providers.Web3Provider(ethereum);
    //       const signer = provider.getSigner();
    //       const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    //       setState({provider, signer, contract});
    //       setAccount(accounts[0]);
    //     }else{
    //       alert("Please install MetaMask");
    //     }
    //   }
    //   catch(error){
    //     console.log(error);
    //   }
    // }
    // connectwallet();
  }, []);
  
  
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
  const [moviedata, setMoviedata] = useState(null)
 
  
  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIEDB_API_KEY}&language=en-US&page=1`;
    const res = await axios.get(url);
    setMoviedata(res.data);
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <main className={`${inter.className}`}>
      <Navbar connectwallet={connectwallet} state={state} />
      {/* <p>Connected Account:- {account}</p> */}
        {/* <GiveVote state={state} /> */}
      {/* <GetAllVote state={state} /> */}

      {/* <div>
        <MovieCard />
      </div>   */}
{
console.log("ok")}

      <div className='gap-x-2 mx-32 grid grid-cols-4 laptop:grid-cols-2 '>
        { moviedata && moviedata.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
   
    </main>
  )
}
