import React from 'react'
import ample from '../Images/ample.svg'
import celo from '../Images/celo.svg'
import graph from '../Images/graph.svg'
import cypher from '../Images/cypher.svg'


const earnList = [
    {
        img: ample,
        name:(
            <p>
                Ampleforth <br/>
                Governance Token
            </p>
        ),
        code: 'FORTH'
    },
    {
        img: celo,
        name: 'Celo',
        code: "GOLD",
    },
    {
        img: graph,
        name:"The Graph",
        code: 'GRT',
    },
    {
        img: cypher,
        name:'NuCypher',
        code:"NU",
    }
];


const EarnListItem = ({img, name, code}) => {
    return(
        <div className='px-3 py-5 hover:shadow-lg rounded-md border-b'>
            <div className='flex'>
                <img src={img} className='w-10 h-10'/>
                <p className='my-auto ml-4 text-lg font-medium col-span-2'>
                    {name}
                </p>
                <p className='my-auto ml-4 text-lg font-medium'>
                    {code}
                </p>
                <p className='my-auto text-right flex-grow text-green-500 col-span-3 font-medium'>
                    Earn $3 {code}
                </p>
            </div>
        </div>

    );
};




function Earn() {
    return (
        <div className=' px-7 w-full mx-auto py-10 max-w-7xl'>
            <div className='grid grid-cols-2'>
            <div>
                <p className='text-3xl font-bold mt-4'>
                    Earn Up to $50 worth of <br/> Crypto
                </p>
                <p className='mt-3'>
                Discover how specific cryptocurrencies work — and get a <br/>
                bit of each crypto to try out for yourself.
                </p>
                <div>
                    <button className=' bg-blue-700 px-6 py-3 inline-block text-white mt-4 text-sm' style={{borderRadius: '4px'}}>
                        Start earning
                    </button>
                </div>
            </div>
            <div>
                {earnList.map((item)=>(
                    <EarnListItem
                     img={item.img}
                     name={item.name}
                     code={item.code}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}

export default Earn
