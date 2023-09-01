import React, { useState } from 'react'

import { FiSave } from "react-icons/fi";
import { toast } from 'sonner';

import { useUsuario } from '../../hooks/useUsuario.js';
import { useNavigate } from 'react-router-dom';

const NewUser = () => {

  const { setNewUsuario } = useUsuario();
  const navigate = useNavigate();
 
    const [usuario, setUsuario] = useState({
        nombre: "",
        dni: "",
        clave: "",
        rol: ""
    });

    const handleChange = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        setUsuario({...usuario, [name]: value})
    }

    const hanldeSubmit = (event) => {

      event.preventDefault();
      setNewUsuario(usuario);
      navigate("/usuarios-list");
    }

  return (
    <>
        <div className='form-base mx-auto my-12 self-center'>

          <h3 className='mt-3 mb-6 font-bold text-lg text-center'>Nuevo Usuario</h3>

          <form onSubmit={hanldeSubmit}>

              <label>
                  Nombre
                  <input
                      type="text"
                      name='nombre'
                      value={usuario?.nombre}
                      className='input-base'
                      placeholder='Ingresar Nombre'
                      onChange={handleChange}
                      required/>
              </label>

              <label>
                  DNI
                  <input
                      type="number"
                      name='dni'
                      value={usuario?.dni}
                      className='input-base'
                      placeholder='Ingresar DNI'
                      onChange={handleChange}
                      required/>
              </label>

              <label>
                  Clave
                  <input
                      type="password"
                      name='clave'
                      value={usuario?.clave}
                      className='input-base'
                      placeholder='Ingresar Clave'
                      onChange={handleChange}
                      />
              </label>

              <label>
                  Rol
                  <input
                      type="text"
                      name='rol'
                      value={usuario?.rol}
                      className='input-base'
                      placeholder='Ingresar Rol: administrador o usuario'
                      onChange={handleChange}
                      />
              </label>
              
              <button
                  type="submit"
                  value="Registrar"
                  className='button-base w-full'
                  onClick={() => toast.success('Usuario guardado exitosamente')}
                  >
                    <FiSave className='icon-base mx-auto'/>
              </button>

          </form>
        </div>
    </>
  )
}

export default NewUser