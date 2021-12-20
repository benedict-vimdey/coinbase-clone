import React from 'react'
import btc from '../Images/bitcoin-green.jpg'
import eth from '../Images/ethereum.jpg'
import cash from '../Images/bitcoin.jpg'
import lite from '../Images/Lite.jpg'
import chart from '../Images/graph.jpg'


const coinData = [
    {
        icon: btc,
        name:'Bitcoin',
        code:'BTC',
        price: 'GHS 314,259.22',
        change: -4.86,
        chart: chart,
    },
    {
        icon: eth,
        name:'Ethereum',
        code:'ETH',
        price: 'GHS 314,259.22',
        change: 2.75,
        chart: chart,
    },
    {
        icon: lite,
        name:'Litecoin',
        code:'LTC',
        price: 'GHS 314,259.22',
        change: 5.23,
        chart: chart,
    },
    {
        icon: cash,
        name:'Bitcoin Cash',
        code:'BCH',
        price: 'GHS 314,259.22',
        change: -4.15,
        chart: chart,
    },
]


const CoinRow = ({id, icon, name, code, price, chart}) => {
    return(
        <>
          <tr className=' table-row'>
            <td className=' pl-10 py-4 whitespace-nowrap text-lg text-gray-500'>
                {id}
            </td>
            <td className='pr-6 py-4 whitespace-nowrap'>
                <div>
                    <div>
                        <img src={icon}/>
                    </div>
                </div>
            </td>


          </tr>




        </>
    )
}













function Table() {
    return (
        <div>
            
        </div>
    )
}

export default Table
