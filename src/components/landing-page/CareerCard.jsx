import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const CareerCard = ({ nombre, descripcion, img, bg, icon, link }) => {
  return (
    <>
        <div className='career-base'>
            <div className={`w-full h-full absolute flex flex-col justify-center gap-4 sm:opacity-100 lg:opacity-0 lg:hover:opacity-100 ${bg} ease-in duration-300`}>
                <img src={icon} className="w-[100px] h-[100px] mx-auto" alt="icon" />
                <h4 className='mx-auto text-2xl font-bold'>{nombre}</h4>
                <hr className='w-2/3 mx-auto'/>
                <p className='w-2/3 mx-auto text-md text-center'>
                {descripcion}
                </p>
                <Link to={link}>
                  <button className='w-2/3 mx-auto my-3 py-2 flex gap-2 justify-center border-2 text-white rounded-full font-bold text-sm hover:bg-[#3a4b9f]'>
                      Ver Carrera
                      <FiArrowRight className='w-[20px] h-[20px]'/>
                  </button>
                </Link>
            </div>
            <img src={img} className='w-full h-full'/>
         </div>
    </>
  )
}

export default CareerCard