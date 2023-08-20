import { db } from '../services/firebase';
import { getDocs, addDoc, collection, query } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'

export const useAsistencia = () => {

    const reference = collection(db, "librosAsistencia");

    const getAsistencia = async() => {

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

    const setAsistencia = async(libro) => {

        await addDoc(reference, libro)
    }

    return {
        getAsistencia,
        setAsistencia
    }
}