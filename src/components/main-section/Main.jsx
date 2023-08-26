import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import DefaultThumbnail from '../DefaultThumbnail'
import { SlBookOpen } from "react-icons/sl";
import Header from '../header/Header';

const Main = ({ seccion }) => {
  const [ input, setInput ] = useState();
  const [ lista, setLista ] = useState({});

  const handleChange = (event) => {

      const input = event.target.value;
      setInput(input);
  }

  const handleSubmit = (event) => {

    event.preventDefault;
    
  }

  return (
    <>

        <div className='buscardor-base'>

          {JSON.stringify(input)}
          
          <form onSubmit={handleSubmit}>
                <input
                      type="text"
                      className='buscador-search-base'
                      onChange={handleChange}
                      value={input}
                      placeholder='Buscar por titulo...'/>

                <input
                      type="submit"
                      className='buscardor-button-base'
                      value="Buscar"/>
          </form>

        </div>

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