import { collection, onSnapshot, query, where }  from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { db } from '../firebase';
import StoryPage from "./StoryPage";
import "../Styles/Content.css";
import Card from './Card';

function SearchedOutValue() {

  const [ searchedValue, setSearchedValue ] = useState([]);

  // using the params to get the search value 
  const { searchkey } = useParams();

  const dVal = { searchkey };

  useEffect(() =>{
    // console.log(dVal);

    const colRef = collection(db, "stories");

    const q = query(colRef, where("keywords", "array-contains", dVal.searchkey ));

    onSnapshot(q, (snapshot) => {
      let story = [];

      snapshot.docs.forEach((doc) => {
        story.push({...doc.data(), id : doc.id})
      })
      // console.log(story);
      setSearchedValue(story);
    })
  }, [])

  return (
    <div style={{ paddingTop : "100px"}}>
     
     <div className="content">
            { 
              searchedValue.map( (story, index) => (
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

export default SearchedOutValue