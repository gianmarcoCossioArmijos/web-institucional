import React, { useEffect, useState } from 'react'

import { db } from '../../services/firebase.js';
import { doc, deleteDoc } from 'firebase/firestore/lite';

import { useUsuario } from '../../hooks/useUsuario.js';
import { toast } from 'sonner';
import { useDispatch } from "react-redux"
import { editUsuario } from '../../store/aside/usuario-firebase/usuarioFirebaseSlice.js';
import { useNavigate } from 'react-router-dom';

import { BsFillTrash3Fill } from "react-icons/bs";
import { HiPencilAlt } from "react-icons/hi";

const Users = () => {
  const [ usuarios, setUsuarios] = useState([])

  const { getUsuarios } = useUsuario();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    getUsuarios()
      .then(setUsuarios)
  }, [])

  useEffect(() => {

    getUsuarios()
      .then(setUsuarios)
  }, [usuarios])

  const handleclick = async(ref, id) => {

    await deleteDoc(doc(db, ref, id));
    toast.error('Usuario eliminado exitosamente');
    getUsuarios()
      .then(setUsuarios);
  }

  const handleEdit = (user) => {

    dispatch(editUsuario(user));
    navigate("/edit-user");
  }

  return (
    <div className='section-base overflow-scroll'>

        <div className='table-row-base text-xs'>

            <span className='w-1/6 font-bold overflow-hidden'>#</span>
            <span className='w-1/6 font-bold overflow-hidden'>Nombre</span>
            <span className='w-1/6 font-bold overflow-hidden'>Dni</span>
            <span className='w-1/6 font-bold overflow-hidden'>Clave</span>
            <span className='w-1/6 font-bold overflow-hidden'>Rol</span>
            <span className='w-1/6 font-bold overflow-hidden'>Acciones</span>

        </div>

          {usuarios.map(usuario => {
            return (

              <>
              
                <div className='table-row-base text-xs' key={usuario.id}>

                  <span className='w-1/6 overflow-hidden'>{usuario.id}</span>
                  <span className='w-1/6 overflow-hidden'>{usuario.nombre}</span>
                  <span className='w-1/6 overflow-hidden'>{usuario.dni}</span>
                  <span className='w-1/6 overflow-hidden'>{usuario.clave}</span>
                  <span className='w-1/6 overflow-hidden'>{usuario.rol}</span>
                  <div className='w-1/6 flex'>
                    <button
                          onClick={() => handleclick("usuarios", usuario.id)}
                          className='delete-button-base'>
                      <BsFillTrash3Fill className='m-auto'/>
                    </button>

                    <button
                          onClick={() => handleEdit(usuario)}
                          className='edit-button-base'>
                      <HiPencilAlt className='m-auto'/>
                    </button>
                  </div>

                </div>

                <hr />

              </>
            )
          })}

    </div>
  )
}

export default Users