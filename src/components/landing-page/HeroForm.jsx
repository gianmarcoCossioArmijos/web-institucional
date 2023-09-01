import React from 'react'

const HeroForm = () => {
  return (
    <div className='hero-form-base'>
        <h3 className='w-full text-xl sm:text-2xl text-white font-bold'>
            Reserva tu Vacante desde casa!
        </h3>

        <h5 className='w-full py-2 text-lg sm:text-xl text-white'>
            Estudia con nosotros y multiplica tus oportunidades de exito
        </h5>

            <form className='w-full flex flex-col gap-2 sm:gap-4'>
            <input
                type="text"
                className='w-full rounded-lg p-3 shadow-lg'
                placeholder='Nombre*' />
            <input
                type="text"
                className='w-full rounded-lg p-3 shadow-lg'
                placeholder='Apellidos*'/>
            <input
                type="email"
                className='w-full rounded-lg p-3 shadow-lg'
                placeholder='E-mail*' />
            <input 
                type="text"
                className='w-full rounded-lg p-3 shadow-lg'
                placeholder='DNI/CE*' />
            <input 
                type="text"
                className='w-full rounded-lg p-3 shadow-lg'
                placeholder='Telefono*' />

            <input
                    ype="submit"
                value="Enviar"
                className='w-full p-3 third-color hover:third-color-hover rounded-lg text-center text-white shadow-lg' />
        </form>
    </div>
  )
}

export default HeroForm