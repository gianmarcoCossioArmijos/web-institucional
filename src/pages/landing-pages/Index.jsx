import React from 'react'

import imgInformatica from '../../assets/informatic.jpg';
import imgMarketing from '../../assets/marketing.jpg';
import imgNursing from '../../assets/nursing.jpg';
import imgAudiovisual from '../../assets/audiovisual.jpg';
import imgBanking from '../../assets/banking.jpg';
import imgGraphic from '../../assets/graphic.jpg';

import iconInformatica from '../../assets/informatic-icon.png'
import iconNursing from '../../assets/nursing-icon.png'
import iconMarketing from '../../assets/marketing-icon.png'
import iconAudiovisual from '../../assets/audiovisual-icon.png'
import iconBanking from '../../assets/banking-icon.png'
import iconGraphic from '../../assets/graphic-icon.png'

import { PiGraduationCapBold } from "react-icons/pi";
import { VscBriefcase } from "react-icons/vsc";
import { BsCheckCircleFill } from "react-icons/bs";

import Jose from "../../assets/jose.jpg"
import Vilma from "../../assets/vilma.jpg"

import CareerCard from '../../components/landing-page/CareerCard';
import TestimonialCard from '../../components/landing-page/TestimonialCard';
import Header from '../../components/header/Header';
import HeroForm from '../../components/landing-page/HeroForm';

import Footer from '../../components/footer/Footer'

const Index = () => {
  return (
    <>
        <main>
            <div className='index-base'>

                <div className='pb-20 index-background'>

                    <Header />

                    <section className='lg:flex lg:p-4'>

                        <section className='hero-title-base'>
                            <h1 className='w-full sm:w-3/4 md:w-4/5 p-3 m-auto text-center sm:text-left animate-fade-right animate-ease-linear'>
                                Estudia las carreras tecnicas mas <strong className='third-color leading-tight'>demandadas </strong>
                                con la <strong className='third-color leading-tight'>mejor tecnologia</strong>
                            </h1>
                        </section>


                        <HeroForm />

                    </section>
                </div>

                <article className='w-full py-24 flex flex-col gap-4 text-white first-color'>

                    <h3 className='w-2/3 mx-auto py-2 flex gap-2 font-bold text-3xl'>
                        <BsCheckCircleFill />
                        Nuestras Carreras
                    </h3>
                    <hr className='w-2/3 mx-auto '/>
                    <p className='w-2/3 mx-auto py-2 text-xl'>
                        Nuestras carreras técnicas están optimizadas para brindar un servicio de calidad utilizando la mejor tecnología que permita maximizar toda la capacidad de nuestros estudiantes.
                    </p>

                </article>

                <article className='w-full pb-24 flex flex-col gap-4 text-white first-color'>

                    <h3 className='w-2/3 mx-auto py-2 flex gap-2 font-bold text-3xl'>
                        <BsCheckCircleFill />
                        Los datos nos respaldan
                        </h3>
                    <hr className='w-2/3 mx-auto '/>

                    <div className='w-2/3 mx-auto p-3 flex flex-col sm:flex-row gap-6 justify-center rounded-lg bg-white/30 text-center sm:text-left text-2xl animate-fade-up animate-ease-out animate-duration-[600ms]'>
                        <PiGraduationCapBold className='w-[100px] h-[100px] mx-auto sm:w-[50px] sm:h-[50px] sm:m-0'/>
                        <span className='my-auto'>Mas de 300+ Egresados son nuestros.</span>
                    </div>

                    <div className='w-2/3 mx-auto p-3 flex flex-col sm:flex-row gap-6 justify-center rounded-lg bg-white/30 text-center sm:text-left text-2xl animate-fade-up animate-ease-out animate-duration-[500ms]'>
                        <VscBriefcase className='w-[100px] h-[100px] mx-auto sm:w-[50px] sm:h-[50px] sm:m-0'/>
                        <span className='my-auto'>El 90% de Nuestros egresados trabajan.</span>
                    </div>

                </article>

                <section className='md:pb-40 lg:pb-0 flex flex-wrap first-color text-xl'>

                    <CareerCard
                            id={crypto.randomUUID()}
                            nombre={"Informatica"}
                            descripcion={"descripcion Si quieres desarrollar soluciones multiplataforma con tecnología de última generación, la carrera de Informática es para ti."}
                            img={imgInformatica}
                            bg={"bg-[#4355af]/40 hover:bg-[#4355af]/40"}
                            icon={iconInformatica}
                            link={"/carrera/informatica"}>
                    </CareerCard>

                    <CareerCard
                            id={crypto.randomUUID()}
                            nombre={"Enfermeria"}
                            descripcion={"Si te importa mejorar el bienestar de las personas, ayudar a los enfermos o darle una segunda oportunidad de vida a una persona, Esta carrera es para ti."}
                            img={imgNursing}
                            bg={"bg-[#f7ea5a]/40 hover:bg-[#f7ea5a]/40"}
                            icon={iconNursing}
                            link={"/carrera/enfermeria"}>
                    </CareerCard>

                    <CareerCard
                            id={crypto.randomUUID()}
                            nombre={"Marketing"}
                            descripcion={"Si te apasiona la creatividad, el análisis de datos y la interacción con las personas, la carrera de marketing es la opción perfecta para ti."}
                            img={imgMarketing}
                            bg={"bg-[#ef2a2a]/40 hover:bg-[#ef2a2a]/40"}
                            icon={iconMarketing}
                            link={"/carrera/marketing"}>
                    </CareerCard>

                    <CareerCard
                            id={crypto.randomUUID()}
                            nombre={"Diseño Grafico"}
                            descripcion={"Si te gusta el arte de transmitir mensajes mediante creaciones visuales, la carrera de Diseño Grafico es para ti."}
                            img={imgGraphic}
                            bg={"bg-[#7aa3d5]/40 hover:bg-[#7aa3d5]/40"}
                            icon={iconGraphic}
                            link={"/carrera/grafico"}>
                    </CareerCard>

                    <CareerCard
                            id={crypto.randomUUID()}
                            nombre={"Comunicacion Audiovisual"}
                            descripcion={"Si te apasiona dominar diversos campos profesionales: radio, televisión, medios digitales y más, esta carrera es para ti."}
                            img={imgAudiovisual}
                            bg={"bg-[#ef2a2a]/40 hover:bg-[#ef2a2a]/40"}
                            icon={iconAudiovisual}
                            link={"/carrera/audiovisual"}>
                    </CareerCard>

                    <CareerCard
                            id={crypto.randomUUID()}
                            nombre={"Administracion Bancaria"}
                            descripcion={"Si te gusta la economia, y deseas desarrollar tus capacidades de análisis, organización y servicio, esta carrera es para ti."}
                            img={imgBanking}
                            bg={"bg-[#7aa3d5]/40 hover:bg-[#7aa3d5]/40"}
                            icon={iconBanking}
                            link={"/carrera/administracion"}>
                    </CareerCard>

                </section>
                
            </div>

            <article className='w-full py-20 flex flex-col gap-4 text-white second-color'>

                <h3 className='w-2/3 mx-auto py-2 flex gap-2 font-bold text-3xl'>
                    <BsCheckCircleFill />
                    Casos de Exito
                    </h3>
                <hr className='w-2/3 mx-auto'/>
                <p className='w-2/3 mx-auto py-2 text-xl'>
                    Nuestras carreras técnicas están optimizadas para brindar un servicio de calidad utilizando la mejor tecnología que permita maximizar toda la capacidad de nuestros estudiantes.
                </p>

                <div className='w-2/3 mx-auto py-2 flex flex-wrap gap-4'>
                    <TestimonialCard nombre={"Jose Perez"} img={Jose} datos={"Estudiante de Informatica - QA Tester Senior en Web Help Peru"} />
                    <TestimonialCard nombre={"Vilma Camacho"} img={Vilma} datos={"Estudiante de Administracion Bancaria - Analista Senior en Mibanco"} />
                </div>

            </article>
        </main>

        <Footer />

    </>
  )
}

export default Index