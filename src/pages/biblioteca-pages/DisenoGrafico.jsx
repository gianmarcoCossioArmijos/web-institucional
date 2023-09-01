import React, { useEffect, useState } from 'react'
import { useDisenoGrafico } from '../../hooks/useDisenoGrafico.js'

import Main from '../../components/biblioteca/main-section/Main.jsx'

const DisenoGrafico = () => {
  const [libros, setLibros] = useState([]);

  const { getBooks } = useDisenoGrafico();

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

export default DisenoGrafico