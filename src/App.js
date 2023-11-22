import './App.css'
import { BrowserRouter, Link, Routes, Route, } from 'react-router-dom'
import Home from './Components/pages/Home';
import Contato from './Components/pages/Contato';
import QuemSomos from './Components/pages/QuemSomos';

import Calculadora from './Components/Calculadora';

import { FaHome,FaAt,  } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { GiBatMask } from "react-icons/gi";
import { CiCalculator1 } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div>
      <BrowserRouter>
        <h1><GiBatMask />menu</h1>
        <ul>
          <li><Link to="/" ><FaHome />home</Link> </li>
          <li><Link to="/Contato"><FaAt />contato</Link> </li>
          <li><Link to="/QuemSomos"><FaUserTie />quem somos</Link> </li>
          <li><Link to="/calculadora"><CiCalculator1 />calculadora</Link></li>
        </ul>
     
    {/* aqui aparecera o componente da rota */}
  
  <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/Contato" element={<Contato />} />
    <Route path="/QuemSomos" element={<QuemSomos />} />
    <Route path="/calculadora" element={<Calculadora />} />
  </Routes>
  </BrowserRouter>


    {/* fim do componente da rota  */}
    <p>esse e o rodape show</p>
    </div>


  );
}

export default App;
