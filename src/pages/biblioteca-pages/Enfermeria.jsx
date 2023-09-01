import React, { useState, useEffect } from 'react'
import { useEnfermeria } from '../../hooks/useEnfermeria.js'

import Main from '../../components/biblioteca/main-section/Main.jsx'

const Enfermeria = () => {
  const [libros, setLibros] = useState([]);

  const { getBooks } = useEnfermeria();

  useEffect(() => {

    getBooks()
      .then(setLibros)
  }, [])

  return (
    <>

      <div className='section-base'>
        <Main seccion={libros}/>
      </div>

    </>
  )
}

export default Enfermeria