import React from 'react'
import { Link } from 'react-router-dom'

import { TbNurse } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import { PiDesktopTower } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";

const BibliotecaAside = () => {
  return (
    <>

        <h5 className='px-2 py-3 font-bold'>Biblioteca</h5>

        <div className='aside-link-base'>
            <Link to="/enfermeria-books" className='w-full flex gap-2'>

                <TbNurse className='self-center'/>
                <h6 className='self-center'>Enfermeria</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/marketing-books" className='w-full flex gap-2'>

                <HiOutlineBriefcase className='self-center'/>
                <h6 className='aelf-center w-2/3'>Marketing</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/informatica-books" className='w-full flex gap-2'>
            
                <PiDesktopTower className='self-center'/>
                <h6 className='self-center w-2/3'>Informatica</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/grafico-books" className='w-full flex gap-2'>
            
                <MdOutlineDesignServices className='self-center'/>
                <h6 className='self-center w-2/3'>Diseño Grafico</h6>
            
            </Link>
        </div>

    </>
  )
}

export default BibliotecaAside