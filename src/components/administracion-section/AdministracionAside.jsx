import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { FiList } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

import { ImLibrary } from "react-icons/im";
import { ImDisplay } from "react-icons/im";
import { ImAidKit } from "react-icons/im";
import { ImLeaf } from "react-icons/im";

import { useLogin } from '../../hooks/useLogin'

const AdministracionAside = () => {
    const { Logout } = useLogin();
    const navigate = useNavigate();

    const handleOnClick = () => {

        Logout();
        navigate("/");
    }

  return (
    <>
      <aside className='aside-base'>

        <h5 className='px-2 py-3 font-bold'>Libros por Carrera</h5>

        <div className='aside-link-base'>
            <Link to="/enfermeria" className='flex gap-2'>

            <ImAidKit className='icon-base w-1/3 self-center'/>
            <h6 className='self-center w-2/3'>Enfermeria Tecnica</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/produccion" className='flex gap-2'>

            <ImLeaf className='icon-base w-1/3 self-center'/>
            <h6 className='aelf-center w-2/3'>Produccion Agropecuaria</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/plataformas" className='flex gap-2'>
            
            <ImDisplay className='icon-base w-1/3 self-center'/>
            <h6 className='self-center w-2/3'>Arquitectura de Plataformas</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/asistencia" className='flex gap-2'>
            
            <ImLibrary className='icon-base w-1/3 self-center'/>
            <h6 className='self-center w-2/3'>Asistencia Administrativa</h6>
            
            </Link>
        </div>

          <h5 className='px-2 py-3 font-bold'>Administracion de Libros</h5>

          <div className='aside-link-base'>
              <Link to="/enfermeria-books" className='flex gap-2'>

              <FiList className='icon-base w-1/3 self-center'/>
              <h6 className='self-center w-2/3'>Libros de Enfermeria</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/asistencia-books" className='flex gap-2'>

              <FiList className='icon-base w-1/3 self-center'/>
              <h6 className='self-center w-2/3'>Libros de Asistencia</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/produccion-books" className='flex gap-2'>

              <FiList className='icon-base w-1/3 self-center'/>
              <h6 className='self-center w-2/3'>Libros de Produccion</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/plataforma-books" className='flex gap-2'>

              <FiList className='icon-base w-1/3 self-center'/>
              <h6 className='self-center w-2/3'>Libros de Plataformas</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/new-enfermeria" className='flex gap-2'>

              <FiPlus className='icon-base w-1/3 self-center'/>
              <h6 className='aelf-center w-2/3'>Nuevo Libro de Enfermeria</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/new-asistencia" className='flex gap-2'>

              <FiPlus className='icon-base w-1/3 self-center'/>
              <h6 className='aelf-center w-2/3'>Nuevo Libro de Asistencia</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/new-produccion" className='flex gap-2'>

              <FiPlus className='icon-base w-1/3 self-center'/>
              <h6 className='aelf-center w-2/3'>Nuevo Libro de Produccion</h6>

              </Link>
          </div>

          <div className='aside-link-base'>
              <Link to="/new-plataforma" className='flex gap-2'>

              <FiPlus className='icon-base w-1/3 self-center'/>
              <h6 className='aelf-center w-2/3'>Nuevo Libro de Plataforma</h6>

              </Link>
          </div>

          <button
                onClick={handleOnClick}
                className='button-base'>
              <Link to="/" className='flex gap-2'>
              
              <FiLogOut className='icon-base w-1/3 self-center'/>
              <h6 className='self-center w-2/3'>Cerrar Sesion</h6>

              </Link>
          </button>

      </aside>
    </>
  )
}

export default AdministracionAside