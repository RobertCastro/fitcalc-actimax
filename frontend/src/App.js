import './App.css';
import IMC from './components/IMC';
import { Route, Routes  } from 'react-router-dom';
import GETForm from './components/GET';


const Home = () => <h1>Home</h1>

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/blog/calcular-imc-indice-de-masa-corporal/' element={<IMC />}  />
        <Route path='/blog/getform' element={<GETForm />} />

      </Routes>
    </div>
  );
}

export default App;
