import React from 'react'
import { FaRegEye } from 'react-icons/fa';

import { useSelector } from 'react-redux';

const DetalleTareas = () => {

    const tareas = useSelector((state) => state.tareasSlice);

  return (
    <div className='section-base'>

            <div className='w-full p-3 flex flex-col border rounded-lg overflow-scroll'>

                <section className='w-full flex font-bold rounded-lg'>

                  <h5 className='w-1/4 p-1'>Nombre</h5>
                  <h5  className='w-1/4 p-1'>Entrega</h5>
                  <h5  className='w-2/4 p-1 text-center'>Descripcion</h5>

                </section>

                <hr />

                <section>

                  {tareas.map(tarea => {
                    return (

                      <div className='flex flex-col' key={crypto.randomUUID()}>
                        <div className='w-full flex text-xs'>

                          <span  className='w-1/4 p-1'>{tarea.nombre}</span>
                          <span  className='w-1/4 p-1'>{tarea.entrega}</span>
                          <p className='w-1/4 flex'>
                            {tarea.descripcion}
                          </p>

                        </div>

                        <hr />
                      </div>

                    )
                  })}

                </section>

            </div>
    </div>
  )
}

export default DetalleTareas