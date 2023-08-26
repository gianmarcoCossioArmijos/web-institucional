import { db } from '../services/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore/lite';

import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const useLogin = () => {
    
    const { saveAuth, cleanAuth } = useContext(AuthContext);

    const reference = collection(db, "usuariosAdministrativos");

    const getLogin = async( dni, clave) => {

        const q = query(reference, where("dni", "==", dni));
        const data = await getDocs(q);
        const results = [];

        data.forEach(doc => {
            
            results.push({
                ...doc.data()
            })
        });

        const response = results.map(obj => (obj.clave === clave) ? saveAuth(true) : saveAuth(false))
        return response
    }

    const Logout = () => {

        cleanAuth();
    }

    return {
        getLogin,
        Logout
    }
}