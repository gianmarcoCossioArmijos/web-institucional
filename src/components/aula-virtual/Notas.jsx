import React from 'react'

import { cursos } from '../../services/fakeDataBase.js'


const Notas = () => {
  return (
    <>
        <div className='section-base'>
          
            {cursos.map(curso => {
                return (

                    <div className='w-full w-4/5 sm:w-3/5 md:w-2/5 h-[200px] p-3 flex flex-col gap-2 justify-between bg-slate-100 rounded-lg shadow-lg'>

                        <div className='w-full h-1/3 flex text-2xl text-center font-bold rounded-lg'>
                            <h5 className='w-full self-center'>{curso.nombre}</h5>
                        </div>

                        <hr />

                        <div className='w-full flex flex-col'>
                            {curso.notas.map(nota => {
                                return (
                                    <>
                                        <div className='flex justify-between'  key={crypto.randomUUID()}>
                                            <h6 className='font-bold'>Nota</h6>
                                            <h6>{nota.nota}</h6>
                                        </div>

                                        <hr />
                                    </>
                                )
                            })}
                        </div>

                    </div>
                )
            })}

        </div>
    </>
  )
}

export default Notas