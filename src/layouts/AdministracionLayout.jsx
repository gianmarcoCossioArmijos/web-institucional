import React, { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import AdministracionAside from '../components/administracion-section/AdministracionAside';

const Administracion = () => {

  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('auth')) || false);
    const navigate = useNavigate();

    useEffect(() => {

        if (isAuth === false) {
            navigate("/login");
        }
    }, [])

  return (
    <>
        <AdministracionAside />
        
        <div className='w-[80%] px-2 py-3'>
          <Outlet className=''/>
        </div>
    </>
  )
}

export default Administracion