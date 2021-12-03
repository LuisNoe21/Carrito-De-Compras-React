import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
import AppState from './context/AppState'
import { EstilosGlobales } from "./estilos/EstilosGlobales";




function App() {

  return (
    <AppState>
      <EstilosGlobales/>
      <Navbar />
      <Articulos />
    </AppState>
  );
}

export default App;
