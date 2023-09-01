import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import DefaultThumbnail from '../DefaultThumbnail'
import { SlBookOpen } from "react-icons/sl";

const Main = ({ seccion }) => {

  const handleChange = (event) => {

      const input = event.target.value;
      setInput(input);
  }

  const handleSubmit = (event) => {

    event.preventDefault;
    
  }

  return (
    <>

        {seccion.map(libro => {
            return (
              <Link
                    to={libro?.url}
                    key={libro.id}
                    target='blank'>

                <div className='libro-base'>
                  
                  <div className=' overflow-hidden'>
                    {libro.imagen ? <img src={libro?.imagen} className='libro-image'/> : <DefaultThumbnail />}
                  </div>

                  <span className='py-1 font-bold text-center capitalize text-[11px] overflow-hidden'>
                    {libro?.titulo}
                  </span>

                  <Link to={`/detalles/${libro.id}/${libro.seccion}`}>
                    <button className='libro-button-base'>
                      <span>Ver mas</span>
                      <SlBookOpen className='my-auto'/>
                    </button>
                  </Link>

                </div>
                
              </Link>
            )
          })
        }
    </>
  )
}

export default Main