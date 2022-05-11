import React from 'react';
import { FacebookRounded, Instagram, Twitter, YouTube } from "@mui/icons-material";


function Footer() {
  return (
    <div className="SocialMediaLinks">
        <a href="#" target="_blank">
            <FacebookRounded style = {{ color : "#66C5EB", fontSize:"20px", cursor:"pointer"}} />   
        </a> 
        <a href="https://www.instagram.com/enexandre/" target="_blank">
            <Instagram style = {{ color : "#66C5EB", fontSize:"20px", cursor:"pointer" }} />
        </a>
        <a href="https://twitter.com/enexandre" target="_blank">
            <Twitter style = {{ color : "#66C5EB", fontSize:"20px", cursor:"pointer" }} />
        </a>
        <a href="#  " target="_blank">
            <YouTube style = {{ color : "#66C5EB", fontSize:"20px", cursor:"pointer" }} />
        </a>
    </div>
  )
}

export default Footer