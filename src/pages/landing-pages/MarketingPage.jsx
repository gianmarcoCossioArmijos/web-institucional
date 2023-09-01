import React from 'react'

import Header from '../../components/header/Header'
import HeroForm from '../../components/landing-page/HeroForm'
import Footer from '../../components/footer/Footer'

import { BsCheckCircleFill } from 'react-icons/bs'
import CicleCard from '../../components/landing-page/CicleCard'

const MarketingPage = () => {
  return (
    <>

    <main>
        <div className='index-base'>

            <div className='pb-20 marketing-cover'>

                <Header />

                <section className='lg:flex lg:p-4'>

                    <section className='hero-title-base'>
                        <h1 className='w-full sm:w-3/4 md:w-4/5 p-3 m-auto text-center sm:text-left animate-fade-right animate-ease-linear'>
                            <strong className='third-color leading-tight'>Marketing</strong>
                        </h1>
                    </section>


                    <HeroForm />

                </section>
            </div>

            <article className='w-full py-24 flex flex-col gap-4 text-white third-color'>

                <h3 className='w-2/3 mx-auto py-2 flex gap-2 font-bold text-3xl'>
                    <BsCheckCircleFill />
                    De que se trata la carrera de Marketing?
                </h3>
                <hr className='w-2/3 mx-auto '/>
                <p className='w-2/3 mx-auto py-2 text-xl'>
                    Hoy en día el mundo de los negocios viene creciendo cada vez más, por ello las empresas necesitan profesionales concentrados en las necesidades del consumidor y todo aquello que tienen que hacer para captar su atención, satisfacer una necesidad o incluso generar una nueva.
                </p>

            </article>

            <article className='w-full py-24 flex gap-4 justify-center flex-wrap text-white first-color'>

                <CicleCard id={crypto.randomUUID()} ciclo={"01"} malla={
                [
                    "Introduccion al Marketing Digital",
                    "Comportamiento del Consumidor Digital",
                    "Oportunidad del Mundo Online",
                    "Ecosistema del Marketing Digital",
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"02"} malla={
                [
                    "Canales de Comunicacion Digital",
                    "Redes Sociales: Facebook",
                    "Herramientas de Marketing",
                    "El Canal como WhatsApp",
                    "Manejo de Conflictos"
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
                    "Principios de la Publicidad",
                    "Segmentacion",
                    "Publicidad en Videos",
                    "Publicidad en Buscadores",
                    "Mailing"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"05"} malla={
                [
                    "Planificacion de una Campaña Digital",
                    "Estrategia de Contenidos",
                    "Content Marketing",
                    "Plan digital de Marketing",
                    "Proposito"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"06"} malla={
                [
                    "Introduccion a la Analitica Digital",
                    "Analitica Web",
                    "Google Analytics",
                    "Analitica Social",
                    "Dashboards para la Gestion Analitica",
                    "Constumer Experience Analytics"
                ]} />

            </article>
            
        </div>
    </main>

    <Footer />

    </>
  )
}

export default MarketingPage