import './App.css';
import Herosection from './Components/Herosection';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import Earn from './Components/Earn'
import PortfolioSec from './Components/PortfolioSec'
import CryptoPlatform from './Components/CryptoPlatform';
import BlueBar from './Components/BlueBar';

function App() {
  return (
    <div className=" bg-white h-screen">
     <Navbar/>
     <Herosection/>
     <Table/>
     <Earn/>
     <PortfolioSec/>
     <CryptoPlatform/>
     <BlueBar/>
    </div>
  );
}

export default App;
