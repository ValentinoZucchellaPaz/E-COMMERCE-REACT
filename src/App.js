import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import CartContextProvider from './context/CartContext.js';
import Products from './pages/Products/Products.js';
import Detail from './pages/Detail/Detail.js';
import Cart from './pages/Cart/Cart.js';
import Checkout from './components/Checkout/Checkout.js';
import Contact from './pages/Contact/Contact.js';
import Navbar from './components/Navbar/Navbar.js';
import './App.css'

function App() {

  return (
    <ChakraProvider>  
      <CartContextProvider>
        <div className='MainContainer'>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/category/:categoryId' element={<Products />} />
            <Route path='/item/:productId' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;
