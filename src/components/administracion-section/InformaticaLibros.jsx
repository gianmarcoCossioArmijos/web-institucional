import React, { useEffect, useState } from 'react'
import { useInformatica } from '../../hooks/useInformatica'

import Table from './Table';

const InformaticaLibros = () => {
  const [libros, setLibros] = useState([]);

  const { getBooks } = useInformatica();

  useEffect(() => {

    getBooks()
      .then(setLibros)
  }, [])

  return (
    <>

      <Table list={libros} />

    </>
  )
}

export default InformaticaLibros