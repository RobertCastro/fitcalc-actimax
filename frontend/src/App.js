// import React, {useState} from 'react'
import './App.css';
import IMC from './components/IMC';
import { Route, Routes  } from 'react-router-dom';


const Home = () => <h1>Home</h1>

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/blog/calculadora-imc-indice-de-masa-corporal/' element={<IMC />}  />

      </Routes>
    </div>
  );
}

export default App;
