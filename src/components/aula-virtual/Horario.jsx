import React from 'react'
import { horario } from '../../services/fakeDataBase.js'

const Horario = () => {
  return (
    <>
        <div className='section-base overflow-scroll'>

          <table className='w-full border shadow-lg text-sm'>

            <thead>
              <tr className='third-color text-white'>
                <th className='p-2'>Hora</th>
                <th className='p-2'>Lunes</th>
                <th className='p-2'>Martes</th>
                <th className='p-2'>Miercoles</th>
                <th className='p-2'>Jueves</th>
                <th className='p-2'>Viernes</th>
              </tr>
              </thead>

            <tbody className='text-xs'>

                  {horario.map(hora => {
                    return (
                      <>
                        <tr>
                          <th className='p-2'>{hora.hora}<hr /></th>
                          <th className='p-2'>{hora.lunes ? hora.lunes : "Libre"}<hr /></th>
                          <th className='p-2'>{hora.martes ? hora.martes : "Libre"}<hr /></th>
                          <th className='p-2'>{hora.miercoles ? hora.miercoles : "Libre"}<hr /></th>
                          <th className='p-2'>{hora.jueves ? hora.jueves : "Libre"}<hr /></th>
                          <th className='p-2'>{hora.viernes ? hora.viernes : "Libre"}<hr /></th>
                        </tr>
                        
                      </>
                    )
                  })}

            </tbody>

          </table>

        </div>
    </>
  )
}

export default Horario