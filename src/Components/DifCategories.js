import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

function DifCategories( ) {

  const [ storyCateg, setStoryCateg ] = useState([]);

  const { category } = useParams();

  const dval = useParams;

    useEffect(() => {
        
        const colRef = collection(db, "stories");

        const q = query(colRef, where("category", "==", dval.category));
        let cat;
        onSnapshot(q, (snapshot) => {
            cat = [];

            snapshot.docs.forEach((doc) =>{
                cat.push({...doc.data(), id : doc.id})
            })
            console.log(cat);
            setStoryCateg(cat);

        })

    }, [])

  return (
    <div>
      {storyCateg.map((sc) => (
        <div>
          <h3>{sc.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default DifCategories