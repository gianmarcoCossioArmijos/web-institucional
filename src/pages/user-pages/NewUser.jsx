import React, { useState } from 'react'

import { FiSave } from "react-icons/fi";
import { toast } from 'sonner';

const NewUser = () => {

    const [usuario, setUsuario] = useState({
        nombre: "",
        dni: "",
        clave: "",
        rol: ""
    });

    const handleChange = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        setLibro({...libro, [name]: value})
    }

    const hanldeSubmit = () => {

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
                      name='titulo'
                      className='input-base'
                      onChange={handleChange}
                      required/>
              </label>

              <label>
                  DNI
                  <input
                      type="number"
                      name='dni'
                      className='input-base'
                      onChange={handleChange}
                      required/>
              </label>

              <label>
                  Clave
                  <input
                      type="password"
                      name='clave'
                      className='input-base'
                      onChange={handleChange}
                      />
              </label>

              <label>
                  Rol
                  <select className='input-base'>
                    <option value="usuario">Usuario</option>
                    <option value="administrador">Administrador</option>
                  </select>
              </label>
              
              <button
                  type="submit"
                  value="Registrar"
                  className='button-base w-full'
                  onClick={() => toast.success('Libro guardado exitosamente')}
                  >
                    <FiSave className='icon-base mx-auto'/>
              </button>

          </form>
        </div>
    </>
  )
}

export default NewUser