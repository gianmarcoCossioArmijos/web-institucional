import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux"
import { showAsideMenu, hideAsideMenu } from '../../store/aside/asideSlice';

import { AiOutlineMenuUnfold } from "react-icons/ai";

const Header = ({ bg, auth }) => {

  const dispatch = useDispatch();
  const aside = useSelector((state) => state.asideMenu);
  const usuario = useSelector((state) => state.usuariosSlice);
  const [ rol, setRol ] = useState(localStorage.getItem("rol") || null);

  useEffect(() => {

    const rol = localStorage.getItem("rol");
    setRol(rol);
  }, [usuario])

  const handleClick = () => {

    if (aside === "") {

      dispatch(showAsideMenu());
    } else {

      dispatch(hideAsideMenu());
    }
  }

  return (
    <header className={`w-full p-3 flex justify-between ${bg? bg : ""} gap-4 text-white`}>

        <Link to="/" className="my-auto font-bold text-xl sm:text-2xl self-center">
            <h1>
                EduApp
            </h1>
        </Link>

        { rol ? (
          <div className='flex gap-4'>

            <Link to="/" className='my-auto hover:underline'>
              Inicio
            </Link>

            <Link to="/login" className='my-auto hover:underline'>
              Aula Virtual
            </Link>

            <button
                  onClick={() => handleClick()}
                  className='p-2 my-auto third-color hover:third-color-hover rounded-lg'>
              <AiOutlineMenuUnfold />
            </button>

          </div>
        ) : (

          <Link to="/login" className='my-auto hover:underline'>
            Aula Virtual
          </Link>
        )}

    </header>
  )
}

export default Header