import React, { useEffect, useState } from 'react'
import { useAsistencia } from '../hooks/useAsistencia'

import Main from '../components/main-section/Main'

const Asistencia = () => {
  const [asistencia, setAsistencia] = useState([]);

  const { getAsistencia } = useAsistencia();

  useEffect(() => {

    getAsistencia()
      .then(setAsistencia)
  }, [])

  return (
    <>

      <div className='section-base'>
        <Main seccion={asistencia}/>
      </div>
        
    </>
  )
}

export default Asistencia