import logo from './fistkicks-low-resolution-logo-color-on-transparent-background.png'
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import CardWidget from './components/CartWidget/CardWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        <CardWidget />
      </header>
        <ItemListContainer 
          greeting={'Bienvenidos al mejor sitio de compras marciales!'}
          description={'Equipamos a practicantes de todas las artes marciales, chequea nuestros productos'}/>
    </div>
  );
}

export default App;
