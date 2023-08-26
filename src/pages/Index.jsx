import React from 'react'
import { ImBook } from "react-icons/im";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
        <main className='index-base'>

            <header className='w-full flex justify-between gap-4 text-white'>

                <div className='flex gap-4'>
                    <ImBook className='logo-base text-[#f03a3a]'/>
                    <h1 className='font-bold text-2xl self-center'>
                        Intitucion Educativa
                    </h1>
                </div>

                <Link to="/login">
                    Aula Virtual
                </Link>

            </header>

            <div className='flex gap-4'>

                <section className='h-[600px] w-1/2 flex justify-center text-4xl uppercase font-bold text-white'>
                    <h1 className='w-[400px] h-[200px] m-auto'>
                        Estudia las carreras tecnicas mas <strong className='text-[#ef2a2a]'>demandadas </strong>
                        con la <strong className='text-[#ef2a2a]'>mejor tecnologia</strong>
                    </h1>
                </section>

                <section className='w-1/2 h-[600px] flex flex-col gap-2 justify-center' >

                    <div className='h-[400px] w-[420px] p-2 m-auto rounded-lg blur-base border shadow-lg'>
                        <h3 className='w-[400px] m-auto text-xl text-white font-bold'>
                            Reserva tu Vacante desde casa!
                        </h3>

                        <h5 className='w-[400px] m-auto text-md text-white'>
                            Estudia con nosotros y multiplica tus oportunidades de exito
                        </h5>

                        <form className='w-[400px] m-auto flex flex-col gap-2'>
                            <input
                                type="text"
                                className='rounded-lg px-3 py-2 shadow-lg'
                                placeholder='Nombre*' />
                            <input
                                type="text"
                                className='rounded-lg px-3 py-2 shadow-lg'
                                placeholder='Apellidos*'/>
                            <input
                                type="email"
                                className='rounded-lg px-3 py-2 shadow-lg'
                                placeholder='E-mail*' />
                            <input 
                                type="text"
                                className='rounded-lg px-3 py-2 shadow-lg'
                                placeholder='DNI/CE*' />
                            <input 
                                type="text"
                                className='rounded-lg px-3 py-2 shadow-lg'
                                placeholder='Telefono*' />

                            <input
                                type="submit"
                                value="Enviar"
                                className='w-full py-2 mx-auto third-color rounded-lg text-white shadow-lg' />
                        </form>
                    </div>
                </section>

            </div>

            <section className='p-4 flex gap-8 justify-evenly text-xl'>

                <div className='career-base'>
                    <h4 className='m-auto font-bold text-[#3a4b9f]'>Informatica</h4>
                </div>

                <div className='career-base'>
                    <h4 className='m-auto font-bold text-[#3a4b9f]'>Enfermeria</h4>
                </div>

                <div className='career-base'>
                    <h4 className='m-auto font-bold text-[#3a4b9f]'>Agropecuaria</h4>
                </div>

            </section>
            
        </main>
    </>
  )
}

export default Index