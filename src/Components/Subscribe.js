import React, { useState } from 'react';
import "../Styles/Home.css";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";



function Subscribe() {

    
    const [inputedEmail, setinputedEmail] = useState("");
    const [user, setUser] = useState([]);
    
    // const [user, setUser] = useState([
    //     { email: "tutu@gmail.com", id: "Stand Up to ur feetr"},
    //     { email: "mart@gmail.com", id: "Only Jah fit do the rest"}
    // ]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let matcher = "";
        const allSubscriptions = collection(db, "subscribelist");
        
        const AddDocuments =  async () => {
        await addDoc(collection(db, "subscribelist"), {
             email : inputedEmail
         })
        }
    
        try{
         matcher = user.find((cb) => cb.email === inputedEmail).email;
         console.log("from try and catch, the value was found");
       }catch(error){
           console.log("value was not found, please add values");

            AddDocuments();
       }

       setinputedEmail("");

        // matcher === inputedEmail ?
        //  console.log("guy, the email already exists") :
        //  console.log("you can add values to the db now")
      
        
    }

    return (
        <form className="subscribeForm" onSubmit={handleSubmit}> 
            <input  type="text" placeholder="Email Address"
                onChange={(e) => setinputedEmail(e.target.value) }
                value={inputedEmail}
            />
            <button>SUBSCRIBE</button>
        </form>
    )
}

export default Subscribe
// to be continued later on 