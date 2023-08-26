import React, { useEffect, useState } from 'react'
import { useProduccion } from '../hooks/useProduccion'

import Main from '../components/main-section/Main'

const Produccion = () => {
  const [produccion, setProduccion] = useState([]);

  const { getProduccion } = useProduccion();

  useEffect(() => {

    getProduccion()
      .then(setProduccion)
  }, [])

  return (
    <>      

        <div className='section-base'>
          <Main seccion={produccion}/>
        </div>

    </>
  )
}

export default Produccion