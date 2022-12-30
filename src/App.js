import logo from './fistkicks-low-resolution-logo-color-on-transparent-background.png'
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import CardWidget from './components/CartWidget/CardWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCounter from './components/ItemCounter/ItemCounter';


function App() {

  // navbar responsive 
  const toggleNav = () =>{
    document.querySelector('.App-header').classList.toggle('show-nav')
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <i className="fa-solid fa-bars" onClick={toggleNav}></i>
        <Navbar />
        <CardWidget />
      </header>
        <ItemListContainer 
          greeting={'Bienvenidos al mejor sitio de compras marciales!'}
          description={'Equipamos a practicantes de todas las artes marciales, chequea nuestros productos'}>
          <ItemCounter 
            productName={'Primer producto'}
            stock={10}
            onAdd={(counter)=>console.log(`Se agregaron ${counter} items al carrito`)}/>
        </ItemListContainer>
    </div>
  );
}

export default App;
