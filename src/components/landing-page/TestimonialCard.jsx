import React from 'react'

const TestimonialCard = ({ nombre, img, datos }) => {
  return (
    <>
        <div className='w-4/5 mx-auto sm:w-[300px] md:w-[250px] p-3 flex flex-col bg-white/70 rounded-b-lg rounded-t-full shadow-lg text-black/80 text-center'>
            <img src={img} alt={nombre} className='rounded-full'/>
            <h5 className='font-bold py-2 text-xl'>{nombre}</h5>
            <p className='py-2'>{datos}</p>
        </div>
    </>
  )
}

export default TestimonialCard