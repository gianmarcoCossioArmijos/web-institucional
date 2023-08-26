import React, { useState, useEffect } from 'react'
import { useEnfermeria } from '../hooks/useEnfermeria.js'

import Main from '../components/main-section/Main'

const Enfermeria = () => {
  const [enfermeria, setEnfermeria] = useState([]);

  const { getEnfermeria } = useEnfermeria();

  useEffect(() => {

    getEnfermeria()
      .then(setEnfermeria)
  }, [])

  return (
    <>

      <div className='section-base'>
        <Main seccion={enfermeria}/>
      </div>

    </>
  )
}

export default Enfermeria