import './App.scss';
import { Route, Routes  } from 'react-router-dom';
import IMC from './components/IMC';
import NecesidadesCaloricas from './components/NecesidadesCaloricas';
import BikeSizeCalculator from './components/BikeSizeCalculator';


const Home = () => <h1>Home</h1>

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/blog/calcular-imc-indice-de-masa-corporal/' element={<IMC />}  />
        <Route path='/blog/calculadora-de-calorias/' element={<NecesidadesCaloricas />} />
        <Route path='/blog/talla-de-bicicleta-adecuada/' element={<BikeSizeCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
