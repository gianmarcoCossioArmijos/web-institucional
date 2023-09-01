import React from 'react'

import { AiOutlineCaretRight } from "react-icons/ai";

const CicleCard = ({ ciclo, malla }) => {
  return (

    <div className='w-1/2 p-3 md:w-1/3 lg:w-1/4 flex flex-col gap-6 rounded-lg bg-white/30 animate-fade-up animate-ease-out animate-duration-[600ms]'>
        
        <h4 className='flex flex-col text-xl font-bold'>
            <strong className='text-5xl text-[#ef2a2a]'>{ciclo}</strong>
            CICLO
        </h4>
        <hr />
        <div className='text-left text-sm'>
            {malla.map(unidad => {
                return (
                <div id={crypto.randomUUID()} className='w-full flex gap-2'>
                  <span>•</span>
                  {unidad}
                </div>
                )
            })}
        </div>

    </div>
  )
}

export default CicleCard