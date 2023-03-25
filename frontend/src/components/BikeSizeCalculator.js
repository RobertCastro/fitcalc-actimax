import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BikeSizeCalculator = () => {

  const [sizeBike, setSizeBike] = useState(null)

  const initialValues = {
    inseam: '',
    bikeType: '',
  };

  const validationSchema = Yup.object().shape({
    inseam: Yup.number()
      .required('La longitud de la entrepierna es requerida')
      .min(0, 'La longitud de la entrepierna debe ser un número positivo'),
    bikeType: Yup.string().required('El tipo de bicicleta es requerido')
    .oneOf(['mountain', 'road'], 'Debes seleccionar un tipo de bicicleta válido'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { inseam, bikeType } = values;
    const inseamValue = parseFloat(inseam);
    let size;
    let sizeScreen;

    if (bikeType === 'mountain') {
      size = inseamValue * 0.226;
    } else if (bikeType === 'road') {
      size = inseamValue * 0.665;
    }

    sizeScreen = `Tamaño de bicicleta recomendado: ${size.toFixed(2)} ${bikeType === 'mountain' ? 'Pulgadas' : 'CM'}`
    setSizeBike(sizeScreen)
    setSubmitting(false);
  };

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="bike-size">
            <div className='form-group'>
              <label>
                Longitud de la entrepierna (cm):
                <Field placeholder="Longitud entrepierna (cm)" type="number" name="inseam" />
              </label>
              <p><ErrorMessage name="inseam" /></p>
            </div>

            <div className='form-group'>
              <label>
                Tipo de bicicleta:
                <Field required as="select" name="bikeType">
                  <option value=" ">Selecciona una opción</option>
                  <option value="mountain">Bicicleta de montaña</option>
                  <option value="road">Bicicleta de carretera</option>
                </Field>
              </label>
              <p><ErrorMessage name="bikeType" /></p>
            </div>
            
            <div className='form-group'>
              <button type="submit" disabled={isSubmitting}>
                Calcular tamaño de bicicleta
              </button>
            </div>
          
            <div className='form-group'>
            { sizeBike && <h3 className='bike-size-success'>{sizeBike}</h3> }
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BikeSizeCalculator;
