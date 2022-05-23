import React, { useEffect, useState } from 'react';
import "../../Styles/Content.css"
import Content from '../Content';

import Card from "../Card";
import { db } from "../../firebase";
import { 
    collection,
    getDocs} from "firebase/firestore";


function MyStories() {

      // a temporary  storage for details gotten on the db 
      const [stories, setStories ] =  useState([]);

      useEffect(() => {
          const colRef = collection(db, "stories");
              
          getDocs(colRef)
          .then((snapshot) => {
              let articles = [];
                  snapshot.docs.forEach((doc) => {
                      articles.push({...doc.data(), id : doc.id })
                  })
                  
                  let newList = articles
                  .sort(() => Math.random() - 0.5)
          

                  setStories(newList);
  
              })
              .catch(err => {
                  console.log(err.message)
              })         
          }, [])


  return (
    <div className="content__wrap">
      <h4 className="cw__title">All - Stories</h4>
      <div className="content">
      {
          
          stories.map( (story, index) => (
              <Card  
              key={index}
              dynamicLink={`/stories/${story.title}`}
              imageSrc={story.ImageSrc}
              storyDate={story.date}
              storyTitle={story.title}
          />
          ))
      }
  </div>
</div>
  )
}

export default MyStories