import React from 'react'

import { GoCodeOfConduct } from "react-icons/go";

const Marquee = () => {
  return (
    <div className='marquee-base'>

        <marquee>

            Bienvenido a la 
            <strong> Biblioteca</strong> Virtual
            <strong className='text-lg inline mr-8'> San Agustin </strong>|
            <GoCodeOfConduct className='w-[30px] h-[30px] inline ml-8 mr-2'/>
            <strong> CODE</strong> Comite de Defensoria Estudiantil <strong>2022 - 2024</strong>

        </marquee>

    </div>
  )
}

export default Marquee