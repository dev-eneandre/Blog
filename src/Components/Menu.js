import { FacebookRounded, Instagram, MenuOutlined, Search, Twitter, YouTube } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from  "react";
import { Link } from "react-router-dom";
import  "../Styles/Menu.css";
import { db } from "../firebase";
import { 
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore";


const Menu = () => {

    const [isActive, setActive] = useState(false);
    const [searchKey, setSearchKey] = useState("");

    const toggler = () => {
        setActive(!isActive);
    }

    const searchContent = async (e) => {
        
        e.preventDefault();

        // alert(`search key is ${searchKey}`);
        console.log(searchKey);

        const storyRef = collection(db, "stories");
        const q = query(storyRef, where("title", "==", searchKey));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(searchKey);
        console.log(doc.id, " == ", doc.data());
        });

        }
    return( 
        <div className="Nav">
           <div className="logo">
                <img  src={require("../Images/LOGO.png")} alt="logo"/>
           </div>
            <div className={isActive ? "NavMenu nav-active" : "NavMenu"}>
                    
                   <div className="categ__wrapper">
                        <ul className="menu__categ">
                                <li><a href='#'>FASHION {'>'}</a>
                                    <ul className='Ndropdown'>
                                        <li>item 1</li>
                                        <li>item 1</li>
                                        <li>item 1</li>
                                    </ul>
                                </li>
                                <li><a href='#'>BEAUTY{'>'} </a>
                                <ul className='Ndropdown'>
                                        <li>item 1</li>
                                        <li>item 1</li>
                                    </ul>
                                </li>
                                <li><a href='#'>PLACES</a> 
                                </li>
                                <li><a href='#'>LIFESTYLE</a> 
                                </li>
                                <li><a href='#'>DECOR</a> 
                                </li>
                                <li><a href='#'>PRESS</a></li>
                        </ul>
                   </div>
                

                <div className="Closeburger" onClick={toggler}>
                    <CloseIcon />
                </div>

                <div className="Navlinks">
                   <Link to="/" >Home</Link>
                   <Link to="/about" >About</Link>
                   <Link to="/contact" >Contact</Link>
                 </div>

                <div className="SocialMediaLinks">
                    <FacebookRounded style = {{ color : "#66C5EB", fontSize:"20px", cursor:"pointer"}} />
                    <Instagram style = {{ color : "#66C5EB", fontSize:"20px", cursor:"pointer" }} />
                    <Twitter style = {{ color : "#66C5EB", fontSize:"20px", cursor:"pointer" }} />
                    <YouTube style = {{ color : "#66C5EB", fontSize:"20px", cursor:"pointer" }} />
                </div>
            </div>

            <form className="search__form">
                <input className="search" type="text" placeholder="SEARCH" onChange={(e) =>( setSearchKey(e.target.value))}/>
                <Search fontSize="medium" onClick={searchContent} />
            </form>

            <div className="burger" onClick={toggler}>
                <MenuOutlined />
                </div>
        </div>  
    )
}

export default Menu;