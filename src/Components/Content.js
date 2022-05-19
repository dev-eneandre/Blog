import React, { useState, useEffect } from 'react';
import "../Styles/Content.css";
import Card from "./Card";
import { db } from "../firebase";
import { 
    collection,
    getDocs} from "firebase/firestore";


function Content() {
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
                
                setStories(articles);

            })
            .catch(err => {
                console.log(err.message)
            })         
        }, [])
    
    return (
      <div className="content__wrap">
            <h4 className="cw__title">Latest - Stories</h4>
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

export default Content
