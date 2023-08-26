import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Enfermeria from '../pages/Enfermeria'
import Produccion from '../pages/Produccion'
import Plataformas from '../pages/Plataformas'
import Asistencia from '../pages/Asistencia'
import Login from '../pages/Login'

import BaseLayout from '../layouts/BaseLayout'

import Administracion from '../layouts/AdministracionLayout'

import ProduccionLibros from '../components/administracion-section/ProduccionLibros'
import AsistenciaLibros from '../components/administracion-section/AsistenciaLibros'
import EnfermeriaLibros from '../components/administracion-section/EnfermeriaLibros'
import PlataformaLibros from '../components/administracion-section/PlataformaLibros'

import { AuthProvider } from '../context/AuthContext'

import NewBookAsistencia from '../components/administracion-section/new-books/NewBookAsistencia'
import NewBookProduccion from '../components/administracion-section/new-books/NewBookProduccion'
import NewBookEnfermeria from '../components/administracion-section/new-books/NewBookEnfermeria'
import NewBookPlataforma from '../components/administracion-section/new-books/NewBookPlataforma'
import LibroDetalles from '../pages/LibroDetalles'
import Index from '../pages/Index'

const Router = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <BaseLayout>
            <Routes>

              <Route element={<Administracion />}>
                  
                <Route path='/new-produccion' element={<NewBookProduccion />} />
                <Route path='/new-enfermeria' element={<NewBookEnfermeria/>} />
                <Route path='/new-asistencia' element={<NewBookAsistencia />} />
                <Route path='/new-plataforma' element={<NewBookPlataforma />} />

                <Route path='/produccion-books' element={<ProduccionLibros />} />
                <Route path='/enfermeria-books' element={<EnfermeriaLibros />} />
                <Route path='/asistencia-books' element={<AsistenciaLibros />} />
                <Route path='/plataforma-books' element={<PlataformaLibros />} />

                <Route path='/detalles/:id/:seccion' element={<LibroDetalles />} />
                <Route path='/produccion' element={<Produccion />} />
                <Route path='/plataformas' element={<Plataformas />} />
                <Route path='/asistencia' element={<Asistencia />} />
                <Route path='/enfermeria' element={<Enfermeria />} />

              </Route>

              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Index />} />
            
            </Routes>
          </BaseLayout>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default Router