import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Enfermeria from '../pages/biblioteca-pages/Enfermeria'
import DisenoGrafico from '../pages/biblioteca-pages/DisenoGrafico'
import Informatica from '../pages/biblioteca-pages/Informatica'
import Marketing from '../pages/biblioteca-pages/Marketing'

import BaseLayout from '../layouts/BaseLayout'
import Administracion from '../layouts/AdministracionLayout'

import MarketingLibros from '../components/administracion-section/MarketingLibros'
import DisenoGraficoLibros from '../components/administracion-section/DisenoGraficoLibros'
import EnfermeriaLibros from '../components/administracion-section/EnfermeriaLibros'
import InformaticaLibros from '../components/administracion-section/InformaticaLibros'

import { Provider } from 'react-redux'

import NewBookDisenoGrafico from '../components/administracion-section/new-books/NewBookDisenoGrafico'
import NewBookMarketing from '../components/administracion-section/new-books/NewBookMarketing'
import NewBookEnfermeria from '../components/administracion-section/new-books/NewBookEnfermeria'
import NewBookInformatica from '../components/administracion-section/new-books/NewBookInformatica'
import LibroDetalles from '../pages/biblioteca-pages/LibroDetalles'

import Index from '../pages/landing-pages/Index'
import Login from '../pages/Login'

import InformaticaPage from '../pages/landing-pages/InformaticaPage'
import NursingPage from '../pages/landing-pages/NursingPage'
import MarketingPage from '../pages/landing-pages/MarketingPage'
import GraficoPage from '../pages/landing-pages/GraficoPage'
import AudiovisualPage from '../pages/landing-pages/AudiovisualPage'
import AdministracionPage from '../pages/landing-pages/AdministracionPage'

import Cursos from '../components/aula-virtual/Cursos'
import Tareas from '../components/aula-virtual/Tareas'
import Notas from '../components/aula-virtual/Notas'
import Horario from '../components/aula-virtual/Horario'

import { store } from '../store/aside/configureStore'
import Sesiones from '../components/aula-virtual/Sesiones'
import DetalleTareas from '../components/aula-virtual/DetalleTareas'
import NewUser from '../pages/user-pages/NewUser'
import Users from '../pages/user-pages/Users'

const Router = () => {
  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
            <BaseLayout>
              <Routes>

                  <Route element={<Administracion />}>
                      
                    <Route path='/new-marketing' element={<NewBookMarketing />} />
                    <Route path='/new-enfermeria' element={<NewBookEnfermeria/>} />
                    <Route path='/new-grafico' element={<NewBookDisenoGrafico />} />
                    <Route path='/new-informatica' element={<NewBookInformatica />} />

                    <Route path='/marketing-list' element={<MarketingLibros />} />
                    <Route path='/enfermeria-list' element={<EnfermeriaLibros />} />
                    <Route path='/grafico-list' element={<DisenoGraficoLibros />} />
                    <Route path='/informatica-list' element={<InformaticaLibros />} />

                    <Route path='/detalles/:id/:seccion' element={<LibroDetalles />} />
                    <Route path='/grafico-books' element={<DisenoGrafico />} />
                    <Route path='/informatica-books' element={<Informatica />} />
                    <Route path='/marketing-books' element={<Marketing />} />
                    <Route path='/enfermeria-books' element={<Enfermeria />} />

                    <Route path='/cursos' element={<Cursos />}/>
                    <Route path='/notas' element={<Notas />}/>
                    <Route path='/tareas' element={<Tareas />}/>
                    <Route path='/horario' element={<Horario />}/>

                    <Route path='/sesiones' element={<Sesiones />}/>
                    <Route path='/detalle-tareas' element={<DetalleTareas />}/>

                    <Route path='/new-user' element={<NewUser />} />
                    <Route path='/users-list' element={<Users />} />

                  </Route>

                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Index />} />
                <Route path='/carrera/informatica' element={<InformaticaPage />} />
                <Route path='/carrera/enfermeria' element={<NursingPage />} />
                <Route path='/carrera/marketing' element={<MarketingPage />} />
                <Route path='/carrera/grafico' element={<GraficoPage />} />
                <Route path='/carrera/audiovisual' element={<AudiovisualPage />} />
                <Route path='/carrera/administracion' element={<AdministracionPage />} />
              
              </Routes>
            </BaseLayout>
          </BrowserRouter>
      </Provider>
    </>
  )
}

export default Router