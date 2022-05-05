import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Card from './Card';


function Fashion() {

  const [ storyCateg, setStoryCateg ] = useState([]);
  const [stories, setStories ] =  useState([]);



  useEffect(() => {
        
    const colRef = collection(db, "stories");

    const q = query(colRef, where("category", "==", "fashion"));
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
        <div className="content">
            {/* {
                stories.map( (story, index) => (
                    <Card
                    key={index}
                    dynamicLink={`/stories/${story.title}`}
                    imageSrc={story.ImageSrc}
                    storyDate={story.date}
                    storyTitle={story.title}
                />
                ))
            } */}
          </div>
    </div>
  )
}

export default Fashion