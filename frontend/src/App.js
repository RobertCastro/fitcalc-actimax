import './App.css';
import IMC from './components/IMC';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<IMC />}  />
      </Routes>
    </div>
  );
}

export default App;
