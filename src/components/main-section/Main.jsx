import React from 'react'
import { Link } from 'react-router-dom'

import DefaultThumbnail from '../DefaultThumbnail'

const Main = ({ seccion }) => {
  return (
    <>
        {seccion.map(libro => {
            return (
              <Link
                    to={libro?.url}
                    key={libro.id}
                    target='blank'>

                <div className='libro-base'>
                  
                  <div className='w-[250px] h-[250px] rounded-t-lg overflow-hidden'>
                    {libro.imagen ? <img src={libro.imagen} className='libro-image'/> : <DefaultThumbnail />}
                  </div>

                  <span className='px-2 font-bold capitalize text-sm max-h-[40px] overflow-hidden truncate'>
                    {libro?.titulo}
                  </span>

                  <hr />

                  <p className='px-2 max-h-[40px] text-xs overflow-hidden'>
                    {libro?.descripcion}
                  </p>

                </div>
              </Link>
            )
          })
        }
    </>
  )
}

export default Main