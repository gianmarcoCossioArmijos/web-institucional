import React from 'react'

import Header from '../../components/header/Header'
import HeroForm from '../../components/landing-page/HeroForm'
import Footer from '../../components/footer/Footer'

import { BsCheckCircleFill } from 'react-icons/bs'
import CicleCard from '../../components/landing-page/CicleCard'

const AdministracionPage = () => {
  return (
    <>

    <main>
        <div className='index-base'>

            <div className='pb-20 banking-cover'>

                <Header />

                <section className='lg:flex lg:p-4'>

                    <section className='hero-title-base'>
                        <h1 className='w-full sm:w-3/4 md:w-4/5 p-3 m-auto text-center sm:text-left animate-fade-right animate-ease-linear'>
                            <strong className='second-color leading-tight'>Administracion Bancaria</strong>
                        </h1>
                    </section>


                    <HeroForm />

                </section>
            </div>

            <article className='w-full py-24 flex flex-col gap-4 text-white second-color'>

                <h3 className='w-2/3 mx-auto py-2 flex gap-2 font-bold text-3xl'>
                    <BsCheckCircleFill />
                    De que se trata la carrera de Administracion Bancaria?
                </h3>
                <hr className='w-2/3 mx-auto '/>
                <p className='w-2/3 mx-auto py-2 text-xl'>
                    En la carrera de Administración Bancaria podrás identificar, analizar y gestionar los procesos administrativos y las operaciones financieras principales en el sector bancario, para la mejora de la comercialización de productos y servicios. Permite elaborar soluciones financieras  en base al perfil de los clientes y analizar y evaluar créditos con precisión y ética, utilizando las finanzas y la tecnología.
                </p>

            </article>

            <article className='w-full py-24 flex gap-4 justify-center flex-wrap text-white first-color'>

                <CicleCard id={crypto.randomUUID()} ciclo={"01"} malla={
                [
                    "Administracion de Negocios",
                    "Nuevas Tendencias en Negocios Bancarios",
                    "Procesos del sistema Finanaciero",
                    "Gestion de la Informacion",
                    "Pensamiento Logico en los Negocios"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"02"} malla={
                [
                    "Banca Comercial",
                    "Contabilidad",
                    "Estrategias de Ventas",
                    "Herramientas Digitales para los Negocios",
                    "Experiencia del Cliente"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"03"} malla={
                [
                    "Analisis de la Informacion Financiera",
                    "Negociacion Comercial",
                    "Ingles para la Comunicacion en los Negocios",
                    "Big Data Aplicada a los Negocios",
                    "Emprendiemiento: Creatividad e Innovacion"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"04"} malla={
                [
                    "Portafolio de Productos Financieros",
                    "Evaluacion de Creditos",
                    "Gestion de Creditos y Cobranzas",
                    "Ingles Aplicado a Proyectos Empresariales",
                    "Emprendimiento: Modelo de Negocio"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"05"} malla={
                [
                    "Estrategias de Fidelizacion y Retencion",
                    "Planeamiento Estrategico",
                    "Control Interno y Auditoria de Operaciones",
                    "Etica en los Negocios",
                    "Emprendimiento: Plan de Desarrollo del Negocio"
                ]} />

                <CicleCard id={crypto.randomUUID()} ciclo={"06"} malla={
                [
                    "Toma de Decisiones Estrategicas",
                    "Soluciones Financieras con Soporte Tecnologico",
                    "Productividad y Gestion de Personas",
                    "Gestion de Marca Personal",
                    "Emprendieminto: Proyecto Integrador"
                ]} />

            </article>
            
        </div>
    </main>

    <Footer />

    </>
  )
}

export default AdministracionPage