import { ethers } from 'ethers';

const GiveVote = ({state}) => {

    const giveVote = async (e) => {
        e.preventDefault();
        
        const { contract } = state;
        const name = e.target.vote.value;

        const amount = {value:ethers.utils.parseEther(e.target.amount.value)}
        
        const transaction = await contract.givevote(name,amount);
        await transaction.wait();
        alert("Vote Given Successfully");
    }
    
  return (
    <>
        <h1 className="text-5xl text-center p-10 font-bold">Give Vote</h1>

        <form onSubmit={giveVote} className="text-center">

            <div>
            <input type="text" className="h-12 my-5 pl-5 w-80 text-black" name="vote" placeholder="Enter youe name" />
            </div>
            <div>
            {/* <input type="number" className="h-12 pl-5 w-80 text-black" name="amount" placeholder="Enter youe amount" /> */}
             {/* select amount */}
                <select name="amount" className="h-12 pl-5 w-80 text-black">
                    <option value="0.1">0.1</option>
                    <option value="0.2">0.2</option>
                    <option value="0.3">0.3</option>
                    <option value="0.4">0.4</option>
                    <option value="0.5">0.5</option>
                </select>
            </div>
            <button type="submit" className="mt-5 p-3 px-16 bg-sky-500 hover:bg-sky-700">Give Vote</button>
        
        </form>

    </>
  )
}

export default GiveVote