import { db } from '../services/firebase';
import { getDocs, getDoc, doc, addDoc, collection, query } from 'firebase/firestore/lite';

export const useInformatica = () => {

    const reference = collection(db, "librosPlataforma");

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

    const getBookDetails = async(id, seccion) => {

        const document = doc(db, seccion, id);
        const data = await getDoc(document);

        const result = {
            titulo: data.data().titulo,
            autor: data.data().autor,
            editorial: data.data().editorial,
            publicacion: data.data().publicacion,
            isbn: data.data().isbn,
            descripcion: data.data().descripcion,
            imagen: data.data().imagen,
            url: data.data().url,
            seccion: data.data().seccion
          }

          return result;
    }

    const setBooks = async(libro) => {

        await addDoc(reference, libro)
    }

    return {
        getBooks,
        getBookDetails,
        setBooks
    }
}