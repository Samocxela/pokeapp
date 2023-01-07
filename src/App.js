import { BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./views/Home"
import Pokemones from "./views/Pokemones"
import Detalle from "./views/Detalle";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/pokemones" element={<Pokemones />} />
          <Route exact path="/pokemones/:nombre" element={<Detalle />} />
          <Route path="/NotFound" element={<NotFound/>} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>     
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
