import React, { useEffect, useState } from 'react'

import { db } from '../../services/firebase.js';
import { doc, updateDoc } from 'firebase/firestore/lite';

import { HiPencilAlt } from "react-icons/hi";
import { toast } from 'sonner';

import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"
const EditUSer = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.usuarioFirebaseSlice);
  const [ usuario, setUsuario ] = useState(user);

    const handleChange = (event) => {

        const value = event.target.value;
        const name = event.target.name;
        setUsuario({...usuario, [name]: value})
    }

    const hanldeSubmit = async (event) => {

      event.preventDefault();
      const newUser = {

        nombre: usuario.nombre,
        dni: usuario.dni,
        clave: usuario.clave,
        rol: usuario.rol
    }

      await updateDoc(doc(db, "usuarios", usuario.id), newUser);

      toast.success('Usuario editado');
      navigate("/users-list");
    }

  return (
    <div className='section-base'>
        <div className='form-base mx-auto my-12 self-center'>

          <h3 className='mt-3 mb-6 font-bold text-lg text-center'>Editar Usuario</h3>

          <form onSubmit={hanldeSubmit}>

                <input type="hidden" value={usuario?.id}/>

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
                  >
                    <HiPencilAlt className='icon-base mx-auto'/>
              </button>

          </form>
        </div>
    </div>
  )
}


export default EditUSer