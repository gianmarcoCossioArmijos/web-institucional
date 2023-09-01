import React from 'react'

import Footer from '../../components/footer/Footer'
import HeroForm from '../../components/landing-page/HeroForm'
import Header from '../../components/header/Header'

import { BsCheckCircleFill } from 'react-icons/bs'
import CicleCard from '../../components/landing-page/CicleCard'

const InformaticaPage = () => {
  return (
    <>
    
    <main>
        <div className='index-base'>

            <div className='pb-20 informatica-cover'>

                <Header />

                <section className='lg:flex lg:p-4'>

                    <section className='hero-title-base'>
                        <h1 className='w-full sm:w-3/4 md:w-4/5 p-3 m-auto text-center sm:text-left animate-fade-right animate-ease-linear'>
                            <strong className='second-color leading-tight'>Computacion e Informatica</strong>
                        </h1>
                    </section>


                    <HeroForm />

                </section>
            </div>

            <article className='w-full py-24 flex flex-col gap-4 text-white second-color'>

                <h3 className='w-2/3 mx-auto py-2 flex gap-2 font-bold text-3xl'>
                    <BsCheckCircleFill />
                    De que se trata la carrera de Informatica?
                </h3>
                <hr className='w-2/3 mx-auto '/>
                <p className='w-2/3 mx-auto py-2 text-xl'>
                    a Computación e Informática es una carrera que te permite desarrollar sistemas de información multiplataforma para lograr soluciones integrales que contribuyan con el incremento de la productividad de las organizaciones, sobre la base del manejo de las tecnologías de la información y el desarrollo de competencias personales y laborales.
                </p>

            </article>

            <article className='w-full py-24 flex gap-4 justify-center flex-wrap text-white first-color'>

                <CicleCard id={crypto.randomUUID()} ciclo={"01"} malla={
                [
                    "Fundamentos de la Programacion",
                    "Arquitectura de Entornos Web I",
                    "Introduccion a TI",
                    "Matematica I",
                    "Fundamentos de Gestion Empresarial"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"02"} malla={
                [
                    "Algoritmos y Estructura de Datos",
                    "Arquitectura de Entornos Web II",
                    "Base de Datos",
                    "Matematica II",
                    "Habilidades Empresariales I"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"03"} malla={
                [
                    "Programacion I",
                    "Programacion Orientada a Objetos I",
                    "Base de Datos II",
                    "Analisis y Diseño de Sistemas I",
                    "Habilidades Empresariales I"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"04"} malla={
                [
                    "Programacion II",
                    "Programacion Orientada a Objetos II",
                    "Base de Datos Avanzado",
                    "Analisis y Diseño de Sistemas II",
                    "Habilidades Empresariales II"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"05"} malla={
                [
                    "Aplicaciones Web I",
                    "Aplicaciones Mobiles I",
                    "Sistemas Web I",
                    "Seguridad de Aplicaciones",
                    "Innovacion y Emprendimient"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"06"} malla={
                [
                    "Aplicaciones Web II",
                    "Aplicaciones Mobiles II",
                    "Sistemas Web II",
                    "Pruebas de Software",
                    "Plan de Negocione"
                ]} />

            </article>
            
        </div>
    </main>

    <Footer />

    </>
  )
}

export default InformaticaPage