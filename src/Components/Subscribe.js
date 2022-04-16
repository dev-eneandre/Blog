import React, { useState } from 'react';
import "../Styles/Home.css";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function Subscribe() {

    
    const [email, setEmail] = useState("");
    const [user, setUser] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const allSubscriptions = collection(db, "subscribelist");
 
        if(email != " "){
            await addDoc(collection(db, "subscribelist"), {
                email 
            })
            setEmail("");
        }
    }

    return (
        <form className="subscribeForm" onSubmit={handleSubmit}> 
            <input  type="text" placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value) }
                value={email}
            />
            <button>SUBSCRIBE</button>
        </form>
    )
}

export default Subscribe
