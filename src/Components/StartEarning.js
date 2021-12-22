import bg from '../Images/coinbase_BG.jpg'


function StartEarning() {
    return (
        <div className='w-full mx-auto flex justify-between mt-20' style={{backgroundColor: 'rgb(233, 246, 255)'}}>
            <div className=''>
                <div className=' py-32 px-32 ml-10 max-w-7xl'>
                    <p className=' font-bold text-3xl '>
                      Earn up to $10 worth of <br/> crypto
                    </p>
                    <p className='mt-3 text-sm'>
                      Discover how specific cryptocurrencies work — and <br/> get a bit of each crypto to try out for yourself.
                    </p>
                    <button className='mt-3 bg-blue-700 px-4 py-3 text-white' style={{borderRadius: '4px'}}>
                        Start earning
                    </button>
                </div>
            </div> 
            
            <div className=''>
                <img src={bg} alt='img'/>
            </div>
        </div>
    )
}

export default StartEarning
