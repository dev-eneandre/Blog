import React, { useState, useEffect } from 'react';
import "../Styles/Content.css";
import Card from "./Card";

// firebase db 
import { db } from "../firebase";
import { 
    collection,
    getDocs} from "firebase/firestore";


function Content() {

    // offline checks 

    // const [stories, setStories ] =  useState(
    //     [
    //         { imageSrc : require("../Images/Hayet1.jfif"), storyDate : "October 6 2020", storyTitle : "CONFIDENT & CASUAL"},
    //         { imageSrc : require("../Images/Hayet2.jfif"), storyDate : "October 6 2020", storyTitle : "CONFIDENT & CASUAL"},
    //         { imageSrc : require("../Images/Hayet3.jfif"), storyDate : "October 6 2020", storyTitle : "CONFIDENT & CASUAL"},
    //         { imageSrc : require("../Images/Hayet4.jfif"), storyDate : "October 6 2020", storyTitle : "CONFIDENT & CASUAL"},
    //         { imageSrc : require("../Images/Hayet5.jfif"), storyDate : "October 6 2020", storyTitle : "CONFIDENT & CASUAL"},
    //         { imageSrc : require("../Images/Hayet6.jpg"), storyDate : "October 6 2020", storyTitle : "CONFIDENT & CASUAL"},
    //         { imageSrc : require("../Images/Hayet7.jpg"), storyDate : "October 6 2020", storyTitle : "CONFIDENT & CASUAL"},
    //         { imageSrc : require("../Images/Hayet8.jpg"), storyDate : "October 6 2020", storyTitle : "CONFIDENT & CASUAL"},
    //         { imageSrc : require("../Images/Hayet9.jpg"), storyDate : "October 6 2020", storyTitle : "CONFIDENT & CASUAL"}
    //     ]
    // )

    // a temporary  storage for details gotten on the db 
    const [stories, setStories ] =  useState([]);

    useEffect(() => {
        const colRef = collection(db, "stories");
            
        getDocs(colRef)
            .then((snapshot) => {
                // console.log(snapshot.docs);

                let articles = [];
                snapshot.docs.forEach((doc) => {
                    articles.push({...doc.data(), id : doc.id })
                })
                // console.log(articles);
                setStories(articles);
            })
            .catch(err => {
                console.log(err.message)
            })
            
    }, [])
    
    return (
      <div className="content__wrap">
            <h4 className="cw__title">Casual - Looks</h4>
        <div className="content">
            {
                stories.map( (story) => (
                    <Card  
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
