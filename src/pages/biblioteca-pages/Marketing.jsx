import React, { useEffect, useState } from 'react'
import { useMarketing } from '../../hooks/useMarketing'

import Main from '../../components/biblioteca/main-section/Main.jsx'

const Marketing = () => {
  const [libros, setLibros] = useState([]);

  const { getBooks } = useMarketing();

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

export default Marketing