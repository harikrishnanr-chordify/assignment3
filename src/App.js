import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import BasicTable from './Components/TableList/BasicTable';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/basic-table' element={<BasicTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
