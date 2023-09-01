import { db } from '../services/firebase';
import { getDocs, addDoc, collection, query } from 'firebase/firestore/lite';

export const useUsuario= () => {

    const reference = collection(db, "usuarios");

    const getUsuarios = async() => {

        const q = query(reference);
        const data = await getDocs(q);
        const results = []

        data.forEach(doc => {
            
            results.push({
                id: doc.id,
                ...doc.data()
            })
        });

        return results;
    }

    const setNewUsuario = async(usuario) => {

        await addDoc(reference, usuario)
    }

    return {
        getUsuarios,
        setNewUsuario
    }
}