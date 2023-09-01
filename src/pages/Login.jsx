import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../hooks/useLogin.js'
import Header from '../components/header/Header.jsx';

import { useSelector } from 'react-redux';

const Login = () => {
    const [usuario, setUsuario] = useState();

    const user = useSelector((state) => state.usuariosSlice);

    const { getLogin } = useLogin();
    const navigate = useNavigate();

    useEffect(() => {

        if (user) {
            navigate("/cursos");
        }
    }, [])

    const handleChange = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        setUsuario({...usuario, [name]: value})
    }

    const hanldeSubmit = async (event) => {

        event.preventDefault();
        await getLogin(usuario.dni, usuario.clave);
        navigate("/cursos");
    }

  return (

    <div className='login-base index-background'>

            <Header bg="first-color"/>
            
            <div className='login-card-base'>

                <h3 className='mt-3 mb-6 font-bold text-2xl text-center'>Iniciar Sesion</h3>

                <form onSubmit={hanldeSubmit}>

                    <label>
                        <strong>Usuario</strong>
                        <input
                            type="string"
                            name='dni'
                            value={usuario?.dni}
                            className='input-base'
                            onChange={handleChange}
                            required/>
                    </label>

                    <label>
                        <strong>Clave</strong>
                        <input
                            type="password"
                            name='clave'
                            value={usuario?.clave}
                            className='input-base'
                            onChange={handleChange}
                            required/>
                    </label>
                    
                    <input
                        type="submit"
                        value="Ingresar"
                        className='button-base w-full mb-12'
                        />

                </form>
            </div>

    </div>
  )
}

export default Login