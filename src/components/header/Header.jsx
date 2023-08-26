import React from 'react'
import { ImBook } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header className='header-base'>

            <div className='flex gap-4'>
                <div className='self-center'>
                    <ImBook className='logo-base text-[#f03a3a]'/>
                </div>

                <div className='flex flex-col self-center'>
                    <span className='font-bold text-lg'>Institucion Educativa</span>
                </div>
            </div>

            <Link to="/" className='flex'>
                <GoHomeFill className='logo-base self-center text-[#f03a3a]'/>
            </Link>

        </header>
    </>
  )
}

export default Header