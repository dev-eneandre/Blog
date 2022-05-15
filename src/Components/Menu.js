import {  MenuOutlined, Search } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from  "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import  "../Styles/Menu.css";
import { db } from "../firebase";
import { 
    collection,
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
        // e.preventDefault();


    //  console.log("heyy");
             
        }

    const changePages = () => {
          setActive(!isActive);
    }


    return( 
        <div className="Nav">
            {/* logo  */}
           <div className="logo">
                <Link to="/"><img  src={require("../Images/LOGO.png")} alt="logo"/></Link>
           </div>
           
           {/* NavLinks  */}
            <div className={isActive ? "NavMenu nav-active" : "NavMenu"}>
                    <div className="Closeburger" onClick={toggler}>
                    <CloseIcon />
                </div>

                <div className="Navlinks">
                   <NavLink to="/"  onClick={changePages}>Home</NavLink>
                   <NavLink to="/stories"  onClick={changePages} >Stories</NavLink>
                   <NavLink to="/categories"  onClick={changePages}>Categories</NavLink>
                   <NavLink to="/about"  onClick={changePages} >About</NavLink>
                   <NavLink to="/contact"  onClick={changePages} >Contact</NavLink>
                 </div>

            </div>

            <form className="search__form" onSubmit={searchContent}>
                <input 
                className="search" 
                type="text" placeholder="SEARCH" 
                value={searchKey}
                onChange={(e) =>( setSearchKey(e.target.value))}/>
                
                <Link to={`search/${searchKey.toLowerCase()}`}>
                <button style={{ border: "none", backgroundColor : "white"}}>
                    <Search fontSize="small" /></button>
                </Link>
            </form>

            <div className="burger" onClick={toggler}>
                <MenuOutlined />
                </div>
        </div>  
    )
}

export default Menu;