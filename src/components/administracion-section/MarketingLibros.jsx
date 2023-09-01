import React, { useEffect, useState } from 'react'

import { useMarketing } from '../../hooks/useMarketing.js'
import Table from './Table';

const MarketingLibros = () => {
  const [libros, setLibros] = useState([]);

  const { getBooks } = useMarketing();

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

export default MarketingLibros