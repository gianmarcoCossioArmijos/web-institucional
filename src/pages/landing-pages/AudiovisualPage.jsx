import React from 'react'

import Header from '../../components/header/Header'
import HeroForm from '../../components/landing-page/HeroForm'
import Footer from '../../components/footer/Footer'

import { BsCheckCircleFill } from 'react-icons/bs'
import CicleCard from '../../components/landing-page/CicleCard'

const AudiovisualPage = () => {
  return (
    <>

    <main>
        <div className='index-base'>

            <div className='pb-20 audiovisual-cover'>

                <Header />

                <section className='lg:flex lg:p-4'>

                    <section className='hero-title-base'>
                        <h1 className='w-full sm:w-3/4 md:w-4/5 p-3 m-auto text-center sm:text-left animate-fade-right animate-ease-linear'>
                            <strong className='third-color leading-tight'>Comunicacion Audiovisual</strong>
                        </h1>
                    </section>


                    <HeroForm />

                </section>
            </div>

            <article className='w-full py-24 flex flex-col gap-4 text-white third-color'>

                <h3 className='w-2/3 mx-auto py-2 flex gap-2 font-bold text-3xl'>
                    <BsCheckCircleFill />
                    De que se trata la carrera de Comunicacion Audiovisual?
                </h3>
                <hr className='w-2/3 mx-auto '/>
                <p className='w-2/3 mx-auto py-2 text-xl'>
                    Aunque la tarea principal de un comunicador audiovisual es y será contar historias, el mundo digital y las nuevas tecnologías de información están transformando la manera de contarlas. Por eso, en la carrera comunicación audiovisual del IPP desarrollamos tu capacidad de adaptación y respuesta inmediata haciéndote vivir la comunicación audiovisual desde el primer día.
                </p>

            </article>

            <article className='w-full py-24 flex gap-4 justify-center flex-wrap text-white first-color'>

                <CicleCard id={crypto.randomUUID()} ciclo={"01"} malla={
                [
                    "Fundamentos del Marketing",
                    "Taller Audiovisual Basico I",
                    "Produccion I",
                    "Fundamentos Audiovisuales",
                    "Creacion Fotografica"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"02"} malla={
                [
                    "Fundamentos de la Publicidad",
                    "Taller Audiovisuales Basico II",
                    "Produccion II",
                    "Fundamentos del Guion de Ficcion",
                    "Edicion y Montaje"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"03"} malla={
                [
                    "Creatividad Publicitaria",
                    "Taller Audiovisual Intermedio I",
                    "Guion de Ficcion",
                    "Post Produccion Sonora",
                    "Iluminacion en Video",
                    "Fundamentos de la Direccion de Arte"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"04"} malla={
                [
                    "Taller Audiovisual Intermerdio II",
                    "Fundamentos de la Direccion Actoral",
                    "Dsieño Sonoro",
                    "Fundamentos de VFX",
                    "Direccion de Fotografia"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"05"} malla={
                [
                    "MArketing digital",
                    "Taller Audiovisual Avamzado I",
                    "Produccion Ejecutiva",
                    "Direccion de Actores",
                    "Visual FX"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"06"} malla={
                [
                    "Medios Publicitarios",
                    "Proyectos de Publicidad Integral",
                    "Taller de Creatividad y Diseño",
                    "Desarrollo y Sustentacion de Proyectos Audiovisuales",
                    "Colorizado de Video"
                ]} />

            </article>
            
        </div>
    </main>

    <Footer />

    </>
  )
}

export default AudiovisualPage