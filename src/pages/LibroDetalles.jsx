import React from 'react'
import Detalles from '../components/main-section/Detalles'
import { useParams } from 'react-router-dom'

const LibroDetalles = () => {

  const { id, seccion } = useParams();

  return (
    <>

        <Detalles id={id} seccion={seccion} />

    </>
  )
}

export default LibroDetalles