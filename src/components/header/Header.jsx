import React from 'react'
import { ImBook } from "react-icons/im";
import { GoCodeOfConduct } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header className='header-base'>

            <div className='flex gap-2'>
                <div className='self-center'>
                    <ImBook className='logo-base text-[#f03a3a]'/>
                </div>

                <div className='flex flex-col self-center'>
                    <span>Biblioteca</span>
                    <span className='font-bold'>San Agustin</span>
                </div>
            </div>

            <Link to="/" className='flex'>
                <GoHomeFill className='logo-base self-center text-[#f03a3a]'/>
            </Link>

            <div className='flex gap-4 rounded-full'>

                <div className='flex flex-col font-bold self-center'>
                    <span>Comite</span>
                    <span>Estudiantil</span>
                </div>

                <GoCodeOfConduct className='header-icon-base text-[#f03a3a] self-center'/>
            </div>

        </header>
    </>
  )
}

export default Header