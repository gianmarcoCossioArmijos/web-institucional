import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='footer-base'>

          <div className='flex justify-evenly gap-4 text-sm text-[#050505]'>
            <div className='flex flex-col gap-1'>
                <span className='font-bold'>
                  Configuracion
                </span>

                <Link to="/plataforma-books">
                  Administracion
                </Link>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='font-bold'>
                  Nosotros
                </span>

                <Link>
                  Acerca de Nosotros
                </Link>
                
                <Link>
                  Documentacion
                </Link>
            </div>
          </div>

          <div className='flex flex-col text-sm'>
            <span>Derechos reservados - San Agustin 2023</span>

            <Link className='flex flex-col text-sm' to="https://gianmarco-cossio-portafolio.vercel.app/" target='blank'>
              <span>Desarrollado por <strong>Gianmarco Cossio</strong> </span>
            </Link>
          </div>

        </div>
    </>
  )
}

export default Footer