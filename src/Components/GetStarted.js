import account from '../Images/Account.png'
import bank from '../Images/Bank.png'
import hand from '../Images/Hand.png'


const details = [
    {
        icon: account,
        title:'Create an account',
    },
    {
        icon: bank,
        title: 'Link your bank',
    },
    {
        icon: hand,
        title: 'Start buying and selling'
    }
];



const AcDetails = ({icon, title}) => {
    return (
        <div>
            <div className='items-center mx-auto text-center justify-center'>
                <div className=''>
                    <img src={icon} className='mx-auto' />
                </div>
                <h4 className='mt-5 text-xl font-semibold'>
                    {title}
                </h4>
            </div>
        </div>
    )
}




function GetStarted() {
    return (
        <div className='mt-10'>
            <div>
                <div className=' text-center mx-auto'>
                    <h2 className=' text-3xl font-extrabold' style={{fontSize:'40px'}} >Get Started in a few minutes</h2>
                    <h5 className=' text-gray-500 mt-5'>Coinbase supports a variety of the most popular digital currencies.</h5>
                </div>
            </div>

            <div className=' max-w-full items-center mt-20'>
                <div className='grid grid-cols-3'>
                   {details.map((items)=>(
                       <AcDetails
                       icon={items.icon}
                       title={items.title}
                       />
                   ))}
                </div> 
            </div>
        </div>
    )
}

export default GetStarted
