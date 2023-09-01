import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { FiLogOut } from "react-icons/fi";

import { useLogin } from '../../hooks/useLogin'

import BibliotecaAside from '../biblioteca/BibliotecaAside';
import AulaAside from '../aula-virtual/AulaAside';
import BibliotecaAdministracionAside from '../biblioteca/BibliotecaAdministracionAside'

import { useSelector } from "react-redux"

const AdministracionAside = () => {

  const aside = useSelector((state) => state.asideMenu);
  const usuario = useSelector((state) => state.usuariosSlice);

    const { Logout } = useLogin();
    const navigate = useNavigate();

    const handleOnClick = () => {

        Logout();
        navigate("/");
    }

  return (
    <>
      <aside className={`aside-base ${aside}`}>

        <AulaAside />

        <BibliotecaAside />

        {usuario.rol === "administrador" ? <BibliotecaAdministracionAside /> : "" }

        <button
            onClick={handleOnClick}
            className='button-base'>
            <Link to="/" className='flex justify-center gap-1'>
              
            <FiLogOut className='icon-base self-center'/>
            <h6 className='self-center'>Cerrar Sesion</h6>

            </Link>
        </button>

      </aside>
    </>
  )
}

export default AdministracionAside