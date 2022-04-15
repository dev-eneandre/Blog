import React, { useState } from 'react';
import "../Styles/Home.css";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Subscribe() {

    
    const [email, setEmail] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, ( currentUser )=> {
        setUser(currentUser);
    })
    const sub = async () => {
     
      try{
        const user = await createUserWithEmailAndPassword(auth, email );
        console.log(user);
        console.log(user?.email);
      }catch(error){
          console.log(error.message);
      }
    }

    return (
        <form className="subscribeForm"> 
            <input  type="text" placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value) }
            />
            <button>SUBSCRIBE</button>
        </form>
    )
}

export default Subscribe
