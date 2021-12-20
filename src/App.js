import './App.css';
import Herosection from './Components/Herosection';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import Earn from './Components/Earn'

function App() {
  return (
    <div className=" bg-white h-screen">
     <Navbar/>
     <Herosection/>
     <Table/>
     <Earn/>
    </div>
  );
}

export default App;
