import React, { useState, useEffect } from 'react'
import { useInformatica } from '../../hooks/useInformatica.js'

import Main from '../../components/biblioteca/main-section/Main.jsx'

const Informatica = () => {
  const [libros, setLibros] = useState([]);

  const { getBooks } = useInformatica();

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

export default Informatica