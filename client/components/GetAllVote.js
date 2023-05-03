import { useState,useEffect } from 'react'
const Web3 = require('web3');
const web3 = new Web3();

export const GetAllVote = ({state}) => {

    const [memos, setMemos] = useState([])
    const { contract } = state;

    useEffect(() => {
        const memodata = async () => {
            const res = await contract.getvotes();
            setMemos(res);
        }
        contract && memodata();    
    }, [contract])

    function convertorealtime(bigtime){
        const timestamp = web3.utils.toBN(bigtime);
        const date = new Date(timestamp.toNumber()*1000);
        return date.toLocaleString();
    }

    return (
        <>
            <h1 className="text-5xl text-center p-10 font-bold">All Votes</h1>

            <table className='w-full'>
                <thead>
                    <tr>
                        <th>Name</th>
                        {/* <th>Amount</th> */}
                        <th>voter address</th>
                        <th>timestamp</th>
                    </tr>
                </thead>
                <tbody className='border-t-white'>
                    {memos.map((memo, index) => (
                        <tr key={index}>
                            <td className='text-center'>{memo.userName}</td>
                            {/* <td>{memo.amount}</td> */}
                            <td className='text-center'>{memo.voter}</td>
                            
                            <td>{convertorealtime(memo.timestamp)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

