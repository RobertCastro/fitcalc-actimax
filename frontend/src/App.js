import './App.css';
import IMC from './components/IMC';
import { Route, Routes  } from 'react-router-dom';
import NecesidadesCaloricas from './components/NecesidadesCaloricas';


const Home = () => <h1>Home</h1>

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/blog/calcular-imc-indice-de-masa-corporal/' element={<IMC />}  />
        <Route path='/blog/calculadora-de-calorias/' element={<NecesidadesCaloricas />} />

      </Routes>
    </div>
  );
}

export default App;
