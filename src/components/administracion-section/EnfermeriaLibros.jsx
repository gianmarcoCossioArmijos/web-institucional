import React, { useEffect, useState } from 'react'
import { useEnfermeria } from '../../hooks/useEnfermeria'

import Table from './Table';

const EnfermeriaLibros = () => {
  const [libros, setLibros] = useState([]);

  const { getBooks } = useEnfermeria();

  useEffect(() => {

    getBooks()
      .then(setLibros)
  }, [])

  return (
    <>

      <Table list={libros}/>

    </>
  )
}

export default EnfermeriaLibros