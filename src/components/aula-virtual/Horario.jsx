import React from 'react'
import { horario } from '../../services/fakeDataBase.js'

const Horario = () => {
  return (
    <>
        <div className='section-base overflow-scroll'>

          <table className='w-full border shadow-lg text-sm'>

            <thead>
              <tr>
                <th>Hora</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
              </tr>
              </thead>

            <tbody className='text-xs'>

                  {horario.map(hora => {
                    return (

                      <tr>
                        <th>{hora.hora}</th>
                        <th>{hora.lunes ? hora.lunes : "Libre"}</th>
                        <th>{hora.martes ? hora.martes : "Libre"}</th>
                        <th>{hora.miercoles ? hora.miercoles : "Libre"}</th>
                        <th>{hora.jueves ? hora.jueves : "Libre"}</th>
                        <th>{hora.viernes ? hora.viernes : "Libre"}</th>
                      </tr>

                    )
                  })}

            </tbody>

          </table>

        </div>
    </>
  )
}

export default Horario