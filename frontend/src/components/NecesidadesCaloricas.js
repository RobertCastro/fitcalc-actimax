import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  genero: Yup.string().required('Selecciona tú género').oneOf(['hombre', 'mujer'], 'Debes seleccionar tú género'),
  peso: Yup.number().positive('Debe ser mayor a 0').required('Escribe tú peso'),
  altura: Yup.number().positive('Debe ser mayor a 0').required('Escribe tú altura en cm'),
  edad: Yup.number().positive('Debe ser mayor a 0').required('Escribe tú edad'),
  nivelActividad: Yup.string().required('Selecciona tú nivel de actividad'),
  objetivo: Yup.string().required('Selecciona tú objetivo'),
});

function NecesidadesCaloricas() {

  const [calorias, setCalorias] = useState('');

  const initialValues = {
    genero: '',
    peso: '',
    altura: '',
    edad: '',
    nivelActividad: 'sedentario',
    objetivo: 'mantener',
  };

  const onSubmit = (values) => {
    let tmb;
    if (values.genero === 'hombre') {
      tmb = 10 * values.peso + 6.25 * values.altura - 5 * values.edad + 5;
    } else {
      tmb = 10 * values.peso + 6.25 * values.altura - 5 * values.edad - 161;
    }

    let factorActividad = 1;
    switch (values.nivelActividad) {
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
    switch (values.objetivo) {
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
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => (
          <Form className='necesidades-caloricas'>

            <div className='form-group'>
              <label htmlFor="genero">Género:
                <Field as="select" id="genero" name="genero">
                  <option value="">Selecciona tú genero</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </Field>
              </label>
              <label htmlFor="peso">Peso (kg):
                <Field id="peso" type="number" name="peso" placeholder="¿Cuál es tú peso?" />
                <p><ErrorMessage name="peso" /></p>
              </label>
            </div>

            <div className='form-group'>
              <label htmlFor="altura">Altura (cm):
                <Field id="altura" type="number" name="altura" placeholder="¿Cuál es tú altura?"/>
                <p><ErrorMessage name="altura" /></p>
              </label>
              <label htmlFor="edad">Edad:
                <Field id="edad" type="number" name="edad" placeholder="¿Cuál es tú edad?" />
                <p><ErrorMessage name="edad" /></p>
              </label>
            </div>

            <div className='form-group'>
              <label htmlFor="nivelActividad">Nivel de actividad física:
                <Field as="select" id="nivelActividad" name="nivelActividad">
                  <option value="sedentario">Sedentario</option>
                  <option value="levemente-activo">Ligeramente activo</option>
                  <option value="moderadamente-activo">Moderadamente activo</option>
                  <option value="altamente-activo">Altamente activo</option>
                  <option value="extremadamente-activo">Extremadamente activo</option>
                </Field>
              </label>
              <label htmlFor="objetivo">Objetivo:
                <Field as="select" id="objetivo" name="objetivo">
                  <option value="perder">Perder peso</option>
                  <option value="mantener">Mantener peso</option>
                  <option value="aumentar">Aumentar masa muscular</option>
                </Field>
              </label>
            </div>

            <div className='form-group'>
              <button type="submit">Calcular calorías</button>
            </div>

            <div className='form-group'>
            { calorias && <h3 className='resultado-calorias'>Con {calorias} calorías por día te acercarás a tu objetivo </h3> }
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NecesidadesCaloricas;
