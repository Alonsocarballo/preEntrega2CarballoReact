import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemlistContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer/>}/>
          <Route path='category/:categoyid' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 not found</h1>} />
          <ItemDetailContainer />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
