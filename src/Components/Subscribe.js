import React, { useEffect, useState } from 'react';
import "../Styles/Home.css";
import { db } from "../firebase";
import { collection, addDoc, getDocs, query, where, onSnapshot, updateDoc } from "firebase/firestore";



function Subscribe() {

    
    const [inputedEmail, setinputedEmail] = useState("");
    const [user, setUser] = useState([]);
    

    
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const colRef = collection(db, "subscribelist");

        const q = query(colRef, where("email", "==", inputedEmail));
        let users;
        onSnapshot(q, (snapshot) => {
            users = [];

            snapshot.docs.forEach((doc) =>{
                users.push({...doc.data(), id : doc.id})
            })
            console.log(users);
//  TO BE updateDoc, LET THERE BE A WARNING TEXT 
            if(users.length < 1){
                console.log("less than 1...means zero ...means does not exist..means add values")
                addDoc(collection(db, "subscribelist"), {
                    email : inputedEmail
                })
       
            }else{
                console.log("value exissts");
            }

            setinputedEmail("");
        })
      
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