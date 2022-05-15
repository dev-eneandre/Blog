import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from "../firebase";
import StoryPage from './StoryPage';

// seleced story for cards 
function SelectedStory() {

  const [ curRead, setCurRead ] = useState([]);

  // the destructured value has to be the same as the given one in app.js
  const { title } = useParams();

  const dval = { title };

  useEffect(() =>{

    const colRef = collection(db, "stories");

    const q = query(colRef, where("title", "==", dval.title));

    onSnapshot(q, (snapshot) => {
      let story = [];

      snapshot.docs.forEach((doc) => {
        story.push({...doc.data(), id : doc.id })
      })
    // console.log(story);
    setCurRead(story);
    })
   
}, [])

  return (
    <div>
      {curRead.map( (cr, index) =>( 
        <StoryPage
          Image = {cr.ImageSrc}
          Title = {cr.title}
          Date={cr.date}
          StoryBody={cr.StoryBody}
          key={index}
        
        />
      ))}


      {/* will  be divided into two parts .... current read story and next stories on the side */}
    </div>

  )
}

export default SelectedStory;