import React, {useState} from 'react'
import './imc.css';
import { Formik, Form, Field, ErrorMessage } from "formik";

const IMC = () => {

    const [IMC, setIMC] = useState(null)
	
	return (
		<>
        <Formik
            initialValues={{
                altura: '',
                peso: ''
            }}
            validate={(valores) => {
                let errores = {}
                if (!valores.altura) {
                    errores.altura = "Ingresa tú altura"
                } else if(!/^[0-9]/.test(valores.altura)) {
                    errores.altura = "Solo se permite números"
                }
                if (!valores.peso) {
                    errores.peso = "Ingresa tú peso"
                } else if(!/^[0-9]/.test(valores.peso)) {
                    errores.peso = "Solo se permiten números"
                }
                return errores
            }}
            onSubmit={(valores, {resetForm}) =>{

                let altura = Math.round(valores.altura) / 100
                let peso = Math.round(valores.peso)
                let resIMC = (peso / Math.pow(altura, 2)).toFixed(2)
                setIMC(resIMC)
            }}
        >

            { ({values, errors, touched, handleChange, submitForm, handleBlur}) => (

                <Form className="formulario" >
                    <div className='calc-form-group'>
                        <label htmlFor="altura">Altura</label>
                        <Field 
                            type="number" 
                            id="altura" 
                            name="altura" 
                            placeholder="¿Cuál es tú altura en CM?"
                            onChange={(e) => {
                                handleChange(e);
                                setTimeout(submitForm, 0);
                            }}
                        />
                        <ErrorMessage name='altura' component={() => (
                            <div className="error">{errors.altura}</div>
                        )} />
                    </div>
                    <div className='calc-form-group'>
                        <label htmlFor="peso">Peso</label>
                        <Field 
                            type="number" 
                            id="peso" 
                            name="peso" 
                            placeholder="¿Cuál es tú peso en KG?"
                            onChange={(e) => {
                                handleChange(e);
                                setTimeout(submitForm, 0);
                            }}
                        />
                        <ErrorMessage name='peso' component={() => (
                            <div className="error">{errors.peso}</div>
                        )} />
                    </div>

                    { IMC && <h3 className='exito'>Su IMC es: {IMC} </h3> }

                </Form>

            )}

        </Formik>
			
		</>
	);
}
 
export default IMC;