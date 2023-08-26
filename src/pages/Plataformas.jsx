import React, { useState, useEffect } from 'react'
import { usePlataformas } from '../hooks/usePlataformas.js'

import Main from '../components/main-section/Main'

const Plataformas = () => {
  const [plataformas, setPlataformas] = useState([]);

  const { getPlataformas } = usePlataformas();

  useEffect(() => {

    getPlataformas()
      .then(setPlataformas)
  }, [])

  return (
    <>

      <div className='section-base'>
        <Main seccion={plataformas}/>
      </div>

    </>
  )
}

export default Plataformas