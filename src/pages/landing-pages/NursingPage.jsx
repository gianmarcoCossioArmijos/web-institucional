import React from 'react'

import Header from '../../components/header/Header'
import HeroForm from '../../components/landing-page/HeroForm'
import Footer from '../../components/footer/Footer'

import { BsCheckCircleFill } from 'react-icons/bs'
import CicleCard from '../../components/landing-page/CicleCard'

const NursingPage = () => {
  return (
    <>

    <main>
        <div className='index-base'>

            <div className='pb-20 nursing-cover'>

                <Header />

                <section className='lg:flex lg:p-4'>

                    <section className='hero-title-base'>
                        <h1 className='w-full sm:w-3/4 md:w-4/5 p-3 m-auto text-center sm:text-left animate-fade-right animate-ease-linear'>
                            <strong className='fourth-color leading-tight'>Enfermeria</strong>
                        </h1>
                    </section>


                    <HeroForm />

                </section>
            </div>

            <article className='w-full py-24 flex flex-col gap-4 text-white fourth-color'>

                <h3 className='w-2/3 mx-auto py-2 flex gap-2 font-bold text-3xl'>
                    <BsCheckCircleFill />
                    De que se trata la carrera de Enfermeria?
                </h3>
                <hr className='w-2/3 mx-auto '/>
                <p className='w-2/3 mx-auto py-2 text-xl'>
                En la actualidad, la enfermería se ha convertido en una carrera cada vez más relevante y demandada en el campo de la salud.
                ¿Por qué elegir la carrera de enfermería? ¿Por qué escoger la carrera de enfermería entre tantas opciones disponibles? Son preguntas válidas que merecen una respuesta clara y fundamentada.
                </p>

            </article>

            <article className='w-full py-24 flex gap-4 justify-center flex-wrap text-white first-color'>

                <CicleCard id={crypto.randomUUID()} ciclo={"01"} malla={
                [
                    "Matematica aplicada a la Salud",
                    "Practicas de Enfermeria",
                    "Procesos Biologicos",
                    "Comunicacion I",
                    "Fundamentos de Gestion Empresarial"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"02"} malla={
                [
                    "Matematica Basica I",
                    "Estructura y Funcion Humana I",
                    "Salud Comunitaria I",
                    "Metodologia del cuidado I",
                    "Responsabilidad Social"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"03"} malla={
                [
                    "Determinantes Sociales de la Salud",
                    "Estructura y Funcion Humana II",
                    "Salud Comunitaria II",
                    "Herramientas Informaticas",
                    "Mecanismos de Defensa"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"04"} malla={
                [
                    "Estructura de la Funcion Humana III",
                    "BAses Farmacologicas y Terapeuticas",
                    "Cuidados en la Salud del Adulto y Adulto Mayor",
                    "Bases de la Nutricion",
                    "Interaccion Clinica Patologica"
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
                    "Bioetica, Deontologia y Legislacion en la Salud",
                    "Cuidados en la Salud del Niño y Adolescente",
                    "Cuidado a la Mujer y Neonato",
                    "Educacion Sanitaria y Comunicacion",
                    "Urgencias y emergencias"
                ]} />

            </article>
            
        </div>
    </main>

    <Footer />

    </>
  )
}

export default NursingPage