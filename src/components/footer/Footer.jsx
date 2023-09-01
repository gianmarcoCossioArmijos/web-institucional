import React from 'react'

import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className='footer-base'>

          <div className='flex flex-col gap-1'>
              <span className='font-bold'>
                Contacto
              </span>
              <div className='flex gap-2'>
                <FaFacebookSquare />
                <AiFillInstagram />
                <FaTwitterSquare />
              </div>
          </div>

          <div className='flex flex-col text-sm'>
            <span>Derechos reservados - 2023</span>
            <span>Desarrollado por <strong>Gianmarco Cossio</strong> </span>
          </div>

      </div>
    </>
  )
}

export default Footer