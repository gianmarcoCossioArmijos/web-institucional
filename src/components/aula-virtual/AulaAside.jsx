import React from 'react'
import { Link } from 'react-router-dom'

import { BiBookBookmark } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";

const AulaAside = () => {
  return (
    <>

        <h5 className='px-2 py-3 font-bold'>Aula Virtual</h5>

        <div className='aside-link-base'>
            <Link to="/cursos" className='w-full flex gap-2'>

            <BiBookBookmark className='self-center'/>
            <h6 className='self-center'>Cursos</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/tareas" className='w-full flex gap-2'>

            <BsPencil className='self-center'/>
            <h6 className='self-center'>Tareas</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/notas" className='w-full flex gap-2'>
            
            <MdOutlineLibraryBooks className='self-center'/>
            <h6 className='self-center'>Notas</h6>

            </Link>
        </div>

        <div className='aside-link-base'>
            <Link to="/horario" className='w-full flex gap-2'>
            
            <AiOutlineSchedule className='self-center'/>
            <h6 className='self-center'>Horario</h6>
            
            </Link>
        </div>
    </>
  )
}

export default AulaAside