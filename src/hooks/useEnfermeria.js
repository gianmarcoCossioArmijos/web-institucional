import { db } from '../services/firebase';
import { getDocs, addDoc, collection, query } from 'firebase/firestore/lite';

export const useEnfermeria = () => {

    const reference = collection(db, "librosEnfermeria");

    const getBooks = async() => {

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

    const setBook = async(libro) => {

        await addDoc(reference, libro)
    }

    return {
        getBooks,
        setBook
    }
}