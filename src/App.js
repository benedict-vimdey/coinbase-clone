import './App.css';
import Herosection from './Components/Herosection';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import Earn from './Components/Earn'
import PortfolioSec from './Components/PortfolioSec'
import CryptoPlatform from './Components/CryptoPlatform';

function App() {
  return (
    <div className=" bg-white h-screen">
     <Navbar/>
     <Herosection/>
     <Table/>
     <Earn/>
     <PortfolioSec/>
     <CryptoPlatform/>
    </div>
  );
}

export default App;
