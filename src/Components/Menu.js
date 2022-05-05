import { FacebookRounded, Instagram, MenuOutlined, Search, Twitter, YouTube } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from  "react";
import { Link, useNavigate } from "react-router-dom";
import  "../Styles/Menu.css";
import { db } from "../firebase";
import { 
    collection,
    getDocs,
    onSnapshot,
    query,
    where
} from "firebase/firestore";


const Menu = () => {

    const [isActive, setActive] = useState(false);
    const [searchKey, setSearchKey] = useState("");
    const [searchValue, setSearchValue] = useState([]);

    let navigate = useNavigate();

    const toggler = () => {
        setActive(!isActive);
    }

    const searchContent = (e) => {
        
        e.preventDefault();

        const colRefr = collection(db, "stories");
    
        const q = query(colRefr, where("title", "==", searchKey.toLowerCase()));
        let search;

        onSnapshot(q, (snapshot) => {
          search = [];
    
          snapshot.docs.forEach((doc) => {
            search.push({...doc.data(), id : doc.id })
          })
        
        setSearchValue(search);
        navigate(`/stories/${searchKey}`);
     
        setSearchValue("");
         })    
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
                   <Link to="/stories" >Stories</Link>
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

            <form className="search__form" onSubmit={searchContent}>
                <input 
                className="search" 
                type="text" placeholder="SEARCH" 
                onChange={(e) =>( setSearchKey(e.target.value))}/>
                
                <button style={{ border: "none", backgroundColor : "white"}}>
                    <Search fontSize="small" /></button>
            </form>

            <div className="burger" onClick={toggler}>
                <MenuOutlined />
                </div>
        </div>  
    )
}

export default Menu;