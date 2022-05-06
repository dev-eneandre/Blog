import { Button, makeStyles, TextField } from '@mui/material';
import React, { useState } from 'react';
import "../../Styles/Contact.css";
import { db } from "../../firebase";
import { 
    collection }
    from "firebase/firestore"

function Contact() {
    
    const [ subject , setSubject ] = useState("");
    const [ firstName , setFirstName ] = useState("");
    const [ lastName , setLastName ] = useState("");
    const [ email , setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        alert("hey i'm human");
        // const colRef = collection(db, "userMessages");

        db.collection( "userMessages").add({
            subject : subject,
            firstName : firstName,
            lastName : lastName,
            email : email,
            message : message
        })
        .then(() => {
            alert("message has been submitted");
        })
        .catch(( error) => {
            alert(error.message);
        })

        setSubject("");
        setFirstName("");
        setLastName(""); setEmail("");
        setMessage("");
    }
    return (
        <div className="hr__contact">
            <div className="contact__ImgWrap">
                <img
                    className="contact__Img" 
                    src={require("../../Images/Collaborate.jpg")} alt="profile Image" />
            </div>

            <div className="contact__dets">
                {/* some text and a form  */}
                <p>
                    thank you for thinking of me as a potential fit for
                    your brand. Please fill out the form below to be in
                    touch. If you have any questions about working together
                    kindly review my blog policy. page (here). This will give
                    you all you need to know about my collaboration approach,
                    gifting and feature policies.
                </p>
                <p>
                    THank you, and I look forward to connecting soon!
                </p>

            {/* contact form  */}
                <form className="contact__form">
                    <TextField
                        required
                        className="InputField"
                        id="standard-required"
                        label="Subject"
                        defaultValue=" "
                        variant="standard"
                        onChange={(e) => setSubject(e.target.value)}
                        />
                    <div className="form__row">
                        <TextField
                                required
                                id="standard-helperText"
                                label="First Name"
                                defaultValue=" "
                                variant="standard"
                                size="small"
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                        <TextField
                                required
                                id="standard-helperText"
                                label="Last Name"
                                
                                defaultValue=" "
                                variant="standard"
                                size ="small"
                                onChange={(e) => setLastName(e.target.value)}
                                />
                    </div>
                        <TextField
                            required
                            id="standard-required"
                            label="Email Address"
                            defaultValue=" "
                            variant="standard"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    <div className="form__row">
                        
                    <TextField
                            required
                            id="standard-required"
                            label="Message"
                            defaultValue=" "
                            variant="standard"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        
                        <Button
                            style={
                                {
                                    fontSize : "12px",
                                    border : "1px solid #888",
                                    color : "#888",
                                    width : "200px"
                                }
                            }
                        variant="outlined" size="large"
                        onClick={sendMessage}
                        >
                            Send Message
                        </Button>
                        <button onClick={sendMessage}>
                            send it/
                        </button>
                    
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
