import React from 'react'
import {ReactComponent as BTC} from '../Images/bitcoin-blue.svg'
import {ReactComponent as Arrow} from '../Images/right-arrow.svg'
import {ReactComponent as Phone} from '../Images/phone.svg'

function Herosection() {
    return (
        <div className='grid grid-cols-2 mx-auto w-full mt-15 px-6 lg:max-w-6xl pb-10 pt-20'>
            <div className='flex'>
                <div className='mx-auto my-10'>
                    <div className='flex cursor-pointer'>
                      <BTC/>
                        <p className='mx-2 font-semibold hover:underline text-blue-800'>
                          Jump Start your portfolio
                        </p>
                      <Arrow className='my-auto'/>
                    </div>
                    
                    <p className='font-semibold text-3xl max-w-md mb-2 mt-5 md:mt-2 leading-tight' style={{fontSize:'62px'}}>Jump start your crypto portfolio</p>
                    <p className='font-semibold leading-tight'>
                    Coinbase is the easiest place to buy and sell <br/> cryptocurrency. Sign up and get started today.
                    </p>

                    <div>
                        <input type='text' placeholder='Email address' className=' transition duration-250 bg-white w-min border border-gray-400 px-4 py-5 mt-10 hover:border-black' style={{borderRadius:'4px'}} />
                        <button className=' bg-blue-700 ml-3 text-white w-fit inline-block font-semibold px-8 py-5' style={{borderRadius:'4px'}}>Get Started</button>
                    </div>

                    
                </div>

            </div>
            <div className='w-full '>
                <Phone className='w-4/5 ml-10' />
            </div>
        </div>
    )
}

export default Herosection
