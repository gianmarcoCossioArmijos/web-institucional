import React, { useEffect, useState } from 'react'

import { useUsuario } from '../../hooks/useUsuario.js';

import { BsFillTrash3Fill } from "react-icons/bs";
import { HiPencilAlt } from "react-icons/hi";

const Users = () => {
  const [ usuarios, setUsuarios] = useState([])

  const { getUsuarios } = useUsuario();

  useEffect(() => {

    getUsuarios()
      .then(setUsuarios)
  }, [])

  return (
    <div className='section-base overflow-scroll'>

        <div className='table-row-base text-xs'>

            <span className='w-1/6 font-bold overflow-hidden'>#</span>
            <span className='w-1/6 font-bold overflow-hidden'>Nombre</span>
            <span className='w-1/6 font-bold overflow-hidden'>Dni</span>
            <span className='w-1/6 font-bold overflow-hidden'>Clave</span>
            <span className='w-1/6 font-bold overflow-hidden'>Rol</span>
            <span className='w-1/6 font-bold overflow-hidden'>Acciones</span>

        </div>

        <div className='w-full'>

          {usuarios.map(usuario => {
            return (

              <>
              
                <div className='table-row-base text-xs' key={usuario.id}>

                  <span className='w-1/6 overflow-hidden'>{usuario.id}</span>
                  <span className='w-1/6 overflow-hidden'>{usuario.nombre}</span>
                  <span className='w-1/6 overflow-hidden'>{usuario.dni}</span>
                  <span className='w-1/6 overflow-hidden'>{usuario.clave}</span>
                  <span className='w-1/6 overflow-hidden'>{usuario.rol}</span>
                  <div className='w-1/6 flex'>
                    <button className='delete-button-base'>
                      <BsFillTrash3Fill className='m-auto'/>
                    </button>

                    <button className='edit-button-base'>
                      <HiPencilAlt className='m-auto'/>
                    </button>
                  </div>

                </div>

                <hr />

              </>
            )
          })}

        </div>

    </div>
  )
}

export default Users