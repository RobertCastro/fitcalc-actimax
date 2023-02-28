import React, { useState } from 'react';

function NecesidadesCaloricas() {
  const [genero, setGenero] = useState('hombre');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [edad, setEdad] = useState(0);
  const [nivelActividad, setNivelActividad] = useState('sedentario');
  const [objetivo, setObjetivo] = useState('mantener');
  const [calorias, setCalorias] = useState(0);

  const handleGeneroChange = (e) => {
    setGenero(e.target.value);
  };

  const handlePesoChange = (e) => {
    setPeso(e.target.value);
  };

  const handleAlturaChange = (e) => {
    setAltura(e.target.value);
  };

  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };

  const handleNivelActividadChange = (e) => {
    setNivelActividad(e.target.value);
  };

  const handleObjetivoChange = (e) => {
    setObjetivo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tmb;
    if (genero === 'hombre') {
      tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
      tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }

    let factorActividad = 1;
    switch (nivelActividad) {
      case 'sedentario':
        factorActividad = 1.2;
        break;
      case 'levemente-activo':
        factorActividad = 1.375;
        break;
      case 'moderadamente-activo':
        factorActividad = 1.55;
        break;
      case 'altamente-activo':
        factorActividad = 1.725;
        break;
      case 'extremadamente-activo':
        factorActividad = 1.9;
        break;
      default:
        break;
    }

    let resultado;
    switch (objetivo) {
      case 'perder':
        resultado = (tmb * factorActividad) - 250;
        break;
      case 'mantener':
        resultado = tmb * factorActividad;
        break;
      case 'aumentar':
        resultado = (tmb * factorActividad) + 250;
        break;
      default:
        break;
    }
    setCalorias(resultado.toFixed(2));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="genero">Género:</label>
          <select id="genero" value={genero} onChange={handleGeneroChange}>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </div>
        <div>
          <label htmlFor="peso">Peso (kg):</label>
          <input id="peso" type="number" value={peso} onChange={handlePesoChange} />
        </div>
        <div>
        <label htmlFor="altura">Altura (cm):</label>
      <input id="altura" type="number" value={altura} onChange={handleAlturaChange} />
    </div>
    <div>
      <label htmlFor="edad">Edad:</label>
      <input id="edad" type="number" value={edad} onChange={handleEdadChange} />
    </div>
    <div>
      <label htmlFor="nivelActividad">Nivel de actividad física:</label>
      <select
        id="nivelActividad"
        value={nivelActividad}
        onChange={handleNivelActividadChange}
      >
        <option value="sedentario">Sedentario</option>
        <option value="levemente-activo">Ligeramente activo</option>
        <option value="moderadamente-activo">Moderadamente activo</option>
        <option value="altamente-activo">Altamente activo</option>
        <option value="extremadamente-activo">Extremadamente activo</option>
      </select>
    </div>
    <div>
      <label htmlFor="objetivo">Objetivo:</label>
      <select id="objetivo" value={objetivo} onChange={handleObjetivoChange}>
        <option value="perder">Perder peso</option>
        <option value="mantener">Mantener peso</option>
        <option value="aumentar">Aumentar masa muscular</option>
      </select>
    </div>
    <button type="submit">Calcular</button>
  </form>
  <div>
    <p>Tu requerimiento calórico diario es de: {calorias} kcal</p>
  </div>
</div>
);
}

export default NecesidadesCaloricas;