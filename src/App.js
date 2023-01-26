import Navbar from './components/Navbar/Navbar.js';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import './App.css'
import CartContextProvider from './context/CartContext.js';
import Cart from './components/Cart/Cart.js';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>  
      <CartContextProvider>
        <div className='MainContainer'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;
