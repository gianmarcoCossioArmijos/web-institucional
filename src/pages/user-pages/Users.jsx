import React from 'react'

import { useSelector } from 'react-redux';

const Users = () => {

    const usuarios = useSelector((state) => state.usuariosSlice);

  return (
    <div className='section-base overflow-scroll'>

        <div className='table-row-base text-xs'>

            <span className='w-1/6 font-bold overflow-hidden'>#</span>
            <span className='w-1/6 font-bold overflow-hidden'>Clave</span>
            <span className='w-1/6 font-bold overflow-hidden'>Nombre</span>
            <span className='w-1/6 font-bold overflow-hidden'>Dni</span>
            <span className='w-1/6 font-bold overflow-hidden'>Rol</span>
            <span className='w-1/6 font-bold overflow-hidden'>Acciones</span>

        </div>

        <hr/>

        <div>



        </div>

    </div>
  )
}

export default Users