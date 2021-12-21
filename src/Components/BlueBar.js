const blue = [
    {
        title:'$327B',
        text:'Quarterly volume traded',
    },
    {
        title:'100+',
        text:'Countries supported'
    },
    {
        title:'73+M',
        text:'Verified users'
    }
];



const BlueItems = ({title, text}) => {
    return(
        <div className=" w-full max-w-7xl mx-auto">
            <div className=" text-center text-white py-8 mx-auto">
                <p className=" font-extrabold text-center mx-auto" style={{fontSize:'50px'}}>
                    {title}
                </p>
                <p className=" text-gray-400" style={{fontSize:'15px'}}>
                    {text}
                </p>
            </div>
        </div>
    )
}




function BlueBar() {
    return (
        <div className=" bg-blue-600 w-full h-40 mt-8 mx-auto">
            <div className="grid grid-cols-3 ">
                {blue.map((items)=>(
                    <BlueItems 
                    title={items.title}
                    text={items.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default BlueBar
