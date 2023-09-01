import React from 'react'
import { useSelector } from 'react-redux';

import { FaRegEye } from "react-icons/fa";

const Sesiones = () => {

  const sesiones = useSelector((state) => state.sesionSlice);

  return (
    <div className='section-base'>

            <div className='w-full p-3 flex flex-col border rounded-lg overflow-scroll'>

                <section className='w-full flex font-bold rounded-lg'>

                  <h5 className='w-2/4 p-1'>Sesion</h5>
                  <h5  className='w-1/4 p-1'>Fecha</h5>
                  <h5  className='w-1/4 p-1 text-center'>Enlace</h5>

                </section>

                <hr />

                <section>

                  {sesiones.map(sesion => {
                    return (

                      <div className='flex flex-col' key={crypto.randomUUID()}>
                        <div className='w-full flex text-xs'>

                          <span  className='w-2/4 p-1'>{sesion.sesion}</span>
                          <span  className='w-1/4 p-1'>{sesion.fecha}</span>
                          <div className='w-1/4 flex'>
                            <a className='w-full flex' href={sesion.url} target="_blank">
                              <button className='py-1 px-2 m-auto third-color rounded-lg text-white'>
                                <FaRegEye />
                              </button>
                            </a>
                          </div>

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

export default Sesiones