import Navbar from './components/Navbar/Navbar.js';
import { MainContainer } from './services/StyledComponents.js';
import { Routes, Route } from 'react-router-dom';
import ArtesMarciales from './pages/ArtesMarciales.js';
import Productos from './pages/Productos.js';
import Nosotros from './pages/Nosotros.js';

function App() {
  return (
    <MainContainer>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Productos />}/>
        <Route path='/artes-marciales' element={<ArtesMarciales />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
      </Routes>
    </MainContainer>
  );
}

export default App;
