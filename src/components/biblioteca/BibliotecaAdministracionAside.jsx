import React from 'react'
import { Link } from 'react-router-dom'

const BibliotecaAdministracionAside = () => {
  return (
    <>

        <h5 className='px-2 py-3 font-bold'>Administracion</h5>

        <div className='aside-link-base'>
            <Link to="/enfermeria-list">

            <h6 className='self-center w-full'>Lista de Enfermeria</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/grafico-list">

            <h6 className='self-center w-full'>Lista de Diseño Grafico</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/marketing-list">

            <h6 className='self-center w-full'>Lista de Marketing</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/informatica-list">

            <h6 className='self-center w-full'>Lista de Informatica</h6>

            </Link>
        </div>

        <hr className='border-slate-400'/>

        <div className='aside-link-base'>
            <Link to="/new-enfermeria">

            <h6 className='aelf-center w-full'>Nuevo Texto de Enfermeria</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/new-marketing">

            <h6 className='aelf-center w-full'>Nuevo Texto de Marketing</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/new-grafico">

            <h6 className='aelf-center w-full'>Nuevo Texto de Diseño Grafico</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/new-informatica">

            <h6 className='self-center w-full'>Nuevo Texto de Informatica</h6>

            </Link>
        </div>

        <hr className='border-slate-400'/>

        <div className='aside-link-base'>
            <Link to="/new-user">

            <h6 className='self-center w-full'>Nuevo Usuario</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/users-list">

            <h6 className='self-center w-full'>Lista de Usuarios</h6>

            </Link>
        </div>

    </>
  )
}

export default BibliotecaAdministracionAside