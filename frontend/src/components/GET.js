import React, { useState } from 'react';
import './imc.css';

function GETForm() {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityFactor, setActivityFactor] = useState('');
  const [GET, setGET] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setGET(calculateGET(gender, age, weight, height, activityFactor));
  }

  function calculateGET(gender, age, weight, height, activityFactor) {
    let GET = 10 * weight + 6.25 * height - 5 * age;
    if (gender === 'male') {
      GET += 5;
    } else if (gender === 'female') {
      GET -= 161;
    }
    GET *= activityFactor;
    return GET;
  }

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className='calc-form-group'>
        <label>
            Género:
            <select value={gender} onChange={event => setGender(event.target.value)}>
            <option value="">Seleccionar</option>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
            </select>
        </label>
        <br />
        <label>
            Edad:
            <input type="number" value={age} onChange={event => setAge(event.target.value)} placeholder="¿Cuál es tú edad?" />
        </label>
        <br />
        <label>
            Peso:
            <input type="number" value={weight} onChange={event => setWeight(event.target.value)} placeholder="¿Cuál es tú peso?" />
        </label>
        <br />
        <label>
            Estatura:
            <input type="number" value={height} onChange={event => setHeight(event.target.value)} placeholder="¿Cuál es tú altura?" />
        </label>
        <br />
        <label>
            Factor de actividad física:
            <select value={activityFactor} onChange={event => setActivityFactor(event.target.value)}>
            <option value="">Seleccionar</option>
            <option value="1.2">Sedentario</option>
            <option value="1.375">Ligeramente activo</option>
            <option value="1.55">Moderadamente activo</option>
            <option value="1.725">Altamente activo</option>
            <option value="1.9">Extremadamente activo</option>
            </select>
        </label>
        <br />
        <button type="submit" className='elementor-button elementor-size-sm'>Calcular GET</button>
        {GET && <p>Su GET es: {GET}</p>}
      </div>
    </form>
  );
}

export default GETForm;
