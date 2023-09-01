import React from 'react'
import { Link } from 'react-router-dom'

import { cursos } from '../../services/fakeDataBase.js'
import { useDispatch } from "react-redux"
import { addNewTarea } from '../../store/aside/tareas/tareasSlice.js'

const Tareas = () => {

    const dispatch = useDispatch();

  return (
    <>
        <div className='section-base'>
          
            {cursos.map(curso => {
                return (

                    <div
                        key={crypto.randomUUID()}
                        className='w-full w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 h-[200px] p-3 flex flex-col gap-2 justify-between bg-slate-100 rounded-lg shadow-lg'>

                        <div className='w-full h-2/3 flex text-2xl text-center font-bold rounded-lg'>
                            <h5 className='w-full self-center'>{curso.nombre}</h5>
                        </div>

                        <hr />
                    
                        <div className='flex justify-between font-bold'>
                            <span>{curso.docente}</span>
                            <span>{curso.aula}</span>
                        </div>

                        <Link to="/detalle-tareas"  onClick={() => dispatch(addNewTarea(curso.tareas))}>
                            <button className='w-full p-2 second-color hover:second-color-hover rounded-lg text-white'>
                                Ver Tareas
                            </button>
                        </Link>

                    </div>
                )
            })}

        </div>
    </>
  )
}

export default Tareas