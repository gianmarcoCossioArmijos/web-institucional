import React, { useEffect, useState } from 'react';

import { useInformatica } from '../../../hooks/useInformatica.js';
import DefaultThumbnail from '../DefaultThumbnail.jsx';

import { Link } from 'react-router-dom';
import { SlBookOpen } from "react-icons/sl";

const Detalles = ({ id, seccion }) => {
  const [detalles, setDetalles] = useState({
    titulo: "",
    autor: "",
    editorial: "",
    publicacion: "",
    isbn: "",
    descripcion: "",
    imagen: "",
    url:"",
    seccion: ""
  });

  const { getBookDetails } = useInformatica();

  useEffect( () => {

    getDetails(id, seccion);
  }, [])

  const getDetails = async(id,seccion) => {

    const details = await getBookDetails(id, seccion);
    setDetalles({
      titulo: details.titulo,
      autor: details.autor,
      editorial: details.editorial,
      publicacion: details.publicacion,
      isbn: details.isbn,
      descripcion: details.descripcion,
      imagen: details.imagen,
      url:details.url,
      seccion: details.seccion
    });
  }

  return (
    <div className='section-base'>
        <div className='w-[400px] p-[5px] mx-auto my-5 rounded-lg shadow-lg'>

          <div className='my-2 overflow-hidden'>
              {detalles.imagen ? <img src={detalles?.imagen} className='w-[300px] h-[300px] mx-auto rounded-lg'/> : <DefaultThumbnail />}
          </div>

          <h4 className='py-2 text-center uppercase text-lg font-bold'>
            {detalles?.titulo}
          </h4>

          <div className='flex flex-col'>

            <div className='w-full px-2 flex gap-4 text-sm'>
              <span><strong>Autor: </strong></span>
              <span>{detalles?.titulo}</span>
            </div>

            <div className='w-full px-2 flex gap-4 text-sm'>
              <span><strong>Editorial: </strong></span>
              <span>{detalles?.editorial}</span>
            </div>

            <div className='w-full px-2 flex gap-4 text-sm'>
              <span><strong>Publicacion: </strong></span>
              <span>{detalles?.publicacion}</span>
            </div>

            <div className='w-full px-2 flex gap-4 text-sm'>
              <span><strong>ISBN: </strong></span>
              <span>{detalles?.isbn}</span>
            </div>

          </div>

          <div className='w-full px-2 flex flex-col gap-4 text-sm'>
            <span><strong>Descripcion: </strong></span>
              <p className='text-xs'>{detalles?.descripcion}</p>
          </div>

          <Link to={detalles?.url} target='_blank'>
            <button className='detalles-button-base'>
              Leer
              <SlBookOpen className='my-auto'/>
            </button>
          </Link>

        </div>

    </div>
  )
}

export default Detalles