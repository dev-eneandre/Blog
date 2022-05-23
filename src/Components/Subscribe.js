import React, { useEffect, useState } from 'react';
import "../Styles/Home.css";
import { db } from "../firebase";
import { collection, addDoc, getDocs, query, where, onSnapshot, updateDoc } from "firebase/firestore";



function Subscribe() {

    
    const [inputedEmail, setinputedEmail] = useState("");
    const [user, setUser] = useState([]);
    const [ warningText, setWarningText ] = useState(false);
    const [ successText, setSuccessText ] = useState(false);
    

    const defaultPromptSettings = () => {
        setWarningText(false);
        setSuccessText(false);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();


        const colRef = collection(db, "subscribelist");
            
        getDocs(colRef)
        .then((snapshot) => {
            let subscribedUsers = [];
                snapshot.docs.forEach((doc) => {
                    subscribedUsers.push({...doc.data(), id : doc.id })
                })


              const hasInputedValue = subscribedUsers.some((subscribed) => {
                    return subscribed.emails === inputedEmail
                })
                
         
                if(hasInputedValue === true) {
                    setWarningText(true);

                }else{
                    addDoc(collection(db, "subscribelist"), {
                        emails : inputedEmail
                    })
                    setSuccessText(true);
                }
            }) 

            // set defaults 
            setinputedEmail("");
            setTimeout(defaultPromptSettings, 8000);
            
      
    }

    return (
        <div className='subscribe__wrapper'>
        <form className="subscribeForm" onSubmit={handleSubmit}> 
            <input  type="text" placeholder="Email Address"
                onChange={(e) => setinputedEmail(e.target.value) }
                value={inputedEmail}
            />
            <button>SUBSCRIBE</button>
           
          <div>
                <p className={ warningText ? "warning__true" : " warning__false"}>email already subscribed</p>
                <p className={ successText ? "success__true" : "success__false"}>successfully subscribed </p>
        
            </div>
          </form>
        </div>
    )
}

export default Subscribe
// to be continued later on 