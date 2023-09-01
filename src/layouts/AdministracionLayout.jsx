import React, { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import AdministracionAside from '../components/administracion-section/AdministracionAside';
import Header from '../components/header/Header';

import { useSelector } from 'react-redux';

const Administracion = () => {

  const usuario = useSelector((state) => state.usuariosSlice);
  const navigate = useNavigate();

    useEffect(() => {

        if (!usuario) {
            navigate("/login");
        }
    }, [])

  return (
    <div className='login-base'>

        <Header bg="first-color"/>

        <div className='w-full flex'>
          
          <AdministracionAside />
          
          <Outlet className=''/>

        </div>
    </div>
  )
}

export default Administracion