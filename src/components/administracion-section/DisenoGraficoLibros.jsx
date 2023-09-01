import React, { useEffect, useState } from 'react'
import { useDisenoGrafico } from '../../hooks/useDisenoGrafico'

import Table from './Table';

const DisenoGraficoLibros = () => {
  const [libros, setLibros] = useState([]);

  const { getBooks } = useDisenoGrafico();

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

export default DisenoGraficoLibros