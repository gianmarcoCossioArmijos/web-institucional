import { db } from '../services/firebase';
import { getDocs, addDoc, collection, query } from 'firebase/firestore/lite';

export const useEnfermeria = () => {

    const reference = collection(db, "librosEnfermeria");

    const getEnfermeria = async() => {

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

    const setEnfermeria = async(libro) => {

        await addDoc(reference, libro)
    }

    return {
        getEnfermeria,
        setEnfermeria
    }
}