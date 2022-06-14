import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';


function App() {
  return (
    < div className="App" >
      <NavBar />
      <ItemListContainer greeting="Buenas" intro="soy un contenedor llamado desde una prop" />
    </div >
  );
}

export default App;
