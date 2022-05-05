import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import "../Styles/Categories.css";

function Categories() {

    const [stories, setStories ] =  useState([]);

    useEffect(() => {
        const colRef = collection(db, "stories");
            
        getDocs(colRef)
        .then((snapshot) => {
            let articles = [];
                snapshot.docs.forEach((doc) => {
                    articles.push({...doc.data(), id : doc.id })
                })
                console.log(articles);
                setStories(articles);
            })
            .catch(err => {
                console.log(err.message)
            })         
        }, [])

    return (
        <div className="categ">
            <div className="categ__logo">
                <img src={require("../Images/LOGO.png")} alt="logo" />
            </div>
            <ul className="categ__list">
                <li>
                    <Link to="/categories/fashion">FASHION</Link>
                    <ul className='dropdown'>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>
                </li>
                <li><Link to="/categories/beauty">BEAUTY</Link>
                <ul className='dropdown'>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>
                </li>
                <li><Link to="/categories/places">PLACES</Link>
                </li>
                <li><Link to="/categories/lifestyle">LIFESTYLE</Link>
                </li>
                <li><Link to="/categories/decor">DECOR</Link>
                </li>
                <li><Link to="/categories/press">PRESS</Link> 
                </li>
                    
            </ul>
        </div>
    )
}

export default Categories
