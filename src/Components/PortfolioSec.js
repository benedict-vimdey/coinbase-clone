import React from 'react'
import calendar from '../Images/calendar.svg'
import vault from '../Images/vault.svg'
import mobile from '../Images/mobile.svg'
import graph from '../Images/graph_icon.svg'
import app from '../Images/app.webp'


const portfolio = [
    {
        icon: graph,
        title: 'Manage your portfolio',
        text:'Buy and sell popular digital currencies, keep track of them in the one place.',
    },
    {
        icon:calendar,
        title: 'Recurring buys',
        text: 'Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.',
    },
    {
        icon: mobile,
        title: 'Mobile apps',
        text:'Stay on top of the markets with the Coinbase app for Android or iOS.'
    }
];



const PortfololioItems = ({icon, title, text}) => {
    return(
        <a className=' mx-auto py-3 mt-5 grid grid-cols-1 items-start space-x-4 rounded-lg group'>
            <div className='rounded-full shadow-xl bg-white px-5 col-span-2 mx-auto' style={{width:'72px', height:'72px'}}>
                <img src={icon} className='transform w-full m-auto'/>
            </div>

            <div className='w-full text-center mt-5 col-span-5 mx-auto'>
                <p className='text-xl font-medium text-black '>
                    {title}
                </p>
                <p className='text-md tracking-wide font-normal mt-3 text-gray-400 '>
                    {text} 
                </p> 
            </div>
        </a>
    )

}










function PortfolioSec() {
    return (
        <div className='w-full max-w-7xl px-20 py-10'>
            <div className='flex'>
            <div className='text-center items-center mx-auto'>
                <p className=' text-4xl font-bold items-center text-center'>
                Create your cryptocurrency portfolio today
                </p>
                <p className=' text-gray-400 text-center mt-5'>
                Coinbase has a variety of features that make it the best place to start trading
                </p>
            </div>
            </div>

            <div className='mx-auto mt-10 gap-10'>
                <div className='w-full grid grid-cols-3 gap-x-10 mx-auto'>
                    {/* <div className='col-span-2 block'>
                        <img src={app}  />
                    </div> */}
                 <div className='col-span-1'>
                    {portfolio.map((items)=>(
                      <PortfololioItems 
                      icon = {items.icon}
                      title = {items.title}
                      text={items.text}
                    />
                    ))}
                 </div>  

                    <div className='col-span-2 ml-10'>
                        <img src={app} className='w-full' />
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default PortfolioSec
