import React from 'react'

import Header from '../../components/header/Header'
import HeroForm from '../../components/landing-page/HeroForm'
import Footer from '../../components/footer/Footer'

import { BsCheckCircleFill } from 'react-icons/bs'
import CicleCard from '../../components/landing-page/CicleCard'

const GraficoPage = () => {
  return (
    <>

    <main>
        <div className='index-base'>

            <div className='pb-20 graphic-cover'>

                <Header />

                <section className='lg:flex lg:p-4'>

                    <section className='hero-title-base'>
                        <h1 className='w-full sm:w-3/4 md:w-4/5 p-3 m-auto text-center sm:text-left animate-fade-right animate-ease-linear'>
                            <strong className='second-color leading-tight'>Diseño Grafico</strong>
                        </h1>
                    </section>


                    <HeroForm />

                </section>
            </div>

            <article className='w-full py-24 flex flex-col gap-4 text-white second-color'>

                <h3 className='w-2/3 mx-auto py-2 flex gap-2 font-bold text-3xl'>
                    <BsCheckCircleFill />
                    De que se trata la carrera de Diseño Grafico?
                </h3>
                <hr className='w-2/3 mx-auto '/>
                <p className='w-2/3 mx-auto py-2 text-xl'>
                    El diseño gráfico digital explota al máximo tu creatividad adquiriendo todos los conocimientos necesarios para convertir el arte en negocio estudiando la carrera de Diseño gráfico. Aprende a comunicar conceptos a través de imágenes en esta labor apasionante del diseño publicitario y libera tu mente para crear e innovar.
                </p>

            </article>

            <article className='w-full py-24 flex gap-4 justify-center flex-wrap text-white first-color'>

                <CicleCard id={crypto.randomUUID()} ciclo={"01"} malla={
                [
                    "Desarrollo Personal",
                    "Dibujo Artistico",
                    "Creatividad y Tendecias Artisticas",
                    "Diseño Basico",
                    "Proyecto I"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"02"} malla={
                [
                    "Habilidades Comunicativas I",
                    "Fundamenytos Visuales",
                    "Tipografia y Lettering",
                    "Taller de Grafica Digital I",
                    "Proyectos II"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"03"} malla={
                [
                    "Diseño Editorial",
                    "Fotocomposicion y Retoque",
                    "Ilustracion Digital I",
                    "Investigacion en la Comunicacion Grafica",
                    "Proyectos III"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"04"} malla={
                [
                    "Desarrollo Profesional",
                    "Taller de Grafica Digital II",
                    "Identidad Corporativa",
                    "Packaging",
                    "Proyectos IV"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"05"} malla={
                [
                    "Creacion y Gestion de Negocios",
                    "Branding",
                    "Diseño Audiovisual",
                    "Diseño UX - UI",
                    "Fotografia"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"06"} malla={
                [
                    "Animacion Digital",
                    "Fotografia Publicitaria",
                    "Diseño Estrategico de Marcas",
                    "Metodologias Agiles",
                    "Proyectos V"
                ]} />

            </article>
            
        </div>
    </main>

    <Footer />

    </>
  )
}

export default GraficoPage