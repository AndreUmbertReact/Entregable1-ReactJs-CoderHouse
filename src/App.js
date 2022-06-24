import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/itemDetailConteiner/ItemDetailConteiner";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes >
          <Route path="/" element={<ItemListContainer greeting="Carteras" />}></Route>
          <Route path="/user/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
