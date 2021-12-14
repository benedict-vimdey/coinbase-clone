
import React from 'react'
import logo from '../Images/logo.svg'

function Navbar() {

    const tabs =[
        "Prices",
        "Learn",
        "Individuals",
        "Businesses",
        "Developers",
        "Company",
    ];
    return (
        <nav className='w-full bg-white border-b border-gray-200 '>
            <div>
                <div className=' max-w-7xl mx-auto px-4'>
                    <div className='flex justify-between items-center py-5'>
                        <div className='flex justify-start'>
                           <img src={logo} alt='logo' className=' w-28'/>
                        </div>

                        <div className=' space-x-10 hover:border-r-blue-600'>
                            {tabs.map((items, id)=>{
                               return <a href='#' key={id} className='text-sm text-black font-bold' >{items}</a>
                          })}
                        </div>

                        <div>
                            <a href='#' className='text-sm hover:text-blue-700 cursor-pointer font-bold'> Sign in </a>
                            <a href='#' className=' ml-3 text-sm bg-blue-700 px-4 py-3 text-white hover:bg-blue-500'
                            style={{borderRadius:'4px'}}
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
         
        </nav>
    )
}

export default Navbar
