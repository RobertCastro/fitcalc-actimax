import React, {useState} from 'react'
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
    
            { ({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
    
                <Form className="imc" onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="altura">Altura</label>
                        <Field 
                            type="number" 
                            id="altura" 
                            name="altura" 
                            placeholder="¿Cuál es tú altura en CM?"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <ErrorMessage name='altura' component={() => (
                            <p className="error">{errors.altura}</p>
                        )} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="peso">Peso</label>
                        <Field 
                            type="number" 
                            id="peso" 
                            name="peso" 
                            placeholder="¿Cuál es tú peso en KG?"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <ErrorMessage name='peso' component={() => (
                            <p className="error">{errors.peso}</p>
                        )} />
                    </div>
                    <div className='form-group'>
                        <button type="submit">Calcular IMC</button>
                    </div>
                    <div className='form-group'>
                    { IMC && <h3 className='resultado-imc'>Su IMC es: {IMC} </h3> }
                    </div>
                    
                </Form>
    
            )}
    
        </Formik>
            
        </>
    );
    
}

export default IMC;