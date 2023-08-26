import { BsFillTrash3Fill } from "react-icons/bs";
import { Toaster, toast } from 'sonner';

import { db } from '../../services/firebase.js';
import { doc, deleteDoc } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router-dom';

const Table = ({ list }) => {

  const navigate = useNavigate();

  const handleclick = async(ref, id) => {

    await deleteDoc(doc(db, ref, id));
    toast.error('Libro eliminado exitosamente')
  }

  return (

    <div className='table-base'>

      <Toaster 
            position="bottom-right"
            richColors
            closeButton/>

            <div className='table-row-base text-xs'>

            <span className='w-1/12 font-bold overflow-hidden'>#</span>
            <span className='w-2/12 font-bold overflow-hidden'>Titulo</span>
            <span className='w-1/12 font-bold overflow-hidden'>Autor</span>
            <span className='w-3/12 font-bold overflow-hidden'>Imagen</span>
            <span className='w-1/12 font-bold overflow-hidden'>Descripcion</span>
            <span className='w-3/12 font-bold overflow-hidden'>URL</span>
            <span className='w-1/12 font-bold overflow-hidden' >Opciones</span>
            </div>
            <hr/>

            {list.map(libro => {
                return (
                <>
                    <div
                        key={libro?.id}
                        className='table-row-base text-xs'>

                      <span className='w-1/12 overflow-hidden'>{libro?.id}</span>
                      <span className='w-2/12 overflow-hidden'>
                        <strong>{libro?.titulo}</strong>
                      </span>
                      <span className='w-1/12 overflow-hidden truncate'>{libro.autor}</span>
                      <span className='w-3/12 overflow-hidden truncate'>{libro?.imagen}</span>
                      <span className='w-1/12 overflow-hidden truncate'>{libro?.descripcion}</span>
                      <span className='w-3/12 overflow-hidden truncate'>{libro?.url}</span>
                      <button
                            onClick={() => handleclick(libro.seccion, libro.id)}
                            className='w-1/12 delete-button-base truncate'>
                        <BsFillTrash3Fill className='m-auto'/>
                      </button>

                    </div>
                    <hr/>
                </>
                )
            })
            }
    </div>
  )
}

export default Table