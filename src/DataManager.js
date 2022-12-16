import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA80KEqeoz_5JGA8DMK5A-4NWuyvJUiY2I",
    authDomain: "fir-starwars-ff398.firebaseapp.com",
    projectId: "fir-starwars-ff398",
    storageBucket: "fir-starwars-ff398.appspot.com",
    messagingSenderId: "192301009781",
    appId: "1:192301009781:web:c0232b179920b6c08f613c"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

export const getPeople = async() => {
    const querySnapshot = await getDocs(collection(db, "people"));
    const people = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      people.push(doc.data())
    });
    return people
}

export const addPerson = async(name, height, mass) => {
    try {
        const docRef = await addDoc(collection(db, "people"), {
          name, height, mass// ha a változó neve megegyeznek, pont ilyen néven akarjuk elnevezni az objektumban őket akkor van ez az egyszerűsítés
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}