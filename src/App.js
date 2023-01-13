import Navbar from './components/Navbar/Navbar.js';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import './App.css'

function App() {
  return (
    <div className='MainContainer'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:productId' element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
