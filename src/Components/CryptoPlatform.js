import insurance from '../Images/insurance.svg'
import shield from '../Images/shield.svg'
import vault from '../Images/vault.svg'


const platform = [
    {
        icon:vault,
        title:'Secure Storage',
        text:'We store the vast majority of the digital assets in secure offline storage',
        link:'Learn how coinbase keeps your funds safe and secure >',
    },
    {
        icon:insurance,
        title:'Protected by Insurance',
        text:'Coinbase maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,000.',
        link:'Learn how your crypto is covered by our insurance policy >',
    },
    {
        icon:shield,
        title:'Industry Best Practice',
        text:'Coinbase supports a variety of the most popular digital currencies.',
        link:'Learn how we implement industry best practices for account security >',
    }
];



const PlatformItems = ({icon, title, text, link}) =>{
    return(
        <div>
            <div className=''>
                <div className=''>
                    <img src={icon} className='mx-auto' />
                </div>
                <div className=' text-center mx-auto'>
                    <p className=' font-bold text-xl mt-12 mb-6'>
                        {title}
                    </p>
                    <p className='mx-auto flex-wrap text-gray-400'>
                        {text}
                    </p>
                    <div>
                        <p className=' text-blue-700 flex-wrap mt-6'>
                          {link}
                        </p>                    
                    </div>
                </div>
            </div>
        </div>
    )
}






function CryptoPlatform() {
    return (
        <div className='w-full max-w-7xl mx-auto'>
            <div>
                <div className='items-center text-center mx-auto'>
                    <p className='text-3xl font-bold' style={{fontSize:'40px'}}>
                    The most trusted cryptocurrency platform
                    </p>
                    <p className=' text-gray-700 mt-5' style={{fontSize:'20px'}}>
                    Here are a few reasons why you should choose coinbase
                    </p>
                </div>
            </div>

            <div className='w-full max-w-7xl mx-auto mt-16'>
                <div className='grid grid-cols-3 space-x-10'>
                    {platform.map((items)=>(
                        <PlatformItems 
                        icon={items.icon}
                        title={items.title}
                        text={items.text}
                        link={items.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CryptoPlatform
