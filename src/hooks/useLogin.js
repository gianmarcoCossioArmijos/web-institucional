import { db } from '../services/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore/lite';

import { useDispatch } from "react-redux"
import { addNewUsuario, cleanCurrentUser } from '../store/aside/usuarios/usuariosSlice';

export const useLogin = () => {

    const reference = collection(db, "usuarios");
    const dispatch = useDispatch();

    const getLogin = async( dni, clave) => {

        const q = query(reference, where("dni", "==", dni));
        const data = await getDocs(q);
        const results = [];

        data.forEach(doc => {
            
            results.push({
                ...doc.data()
            })
        });

        const response = results.map(usuario => {
            
            if (usuario.clave === clave) {
                dispatch(addNewUsuario(usuario))
                localStorage.setItem("rol", usuario.rol)
            }
        })
        console.log(response);
    }

    const Logout = () => {

        dispatch(cleanCurrentUser());
        localStorage.removeItem("rol")
    }

    return {
        getLogin,
        Logout
    }
}