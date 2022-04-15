import React from 'react';
import "../Styles/Categories.css";

function Categories() {
    return (
        <div className="categ">
            <div className="categ__logo">
                <img src={require("../Images/LOGO.png")} alt="logo" />
            </div>

            <ul className="categ__list">
                <li><a href='#'>FASHION </a>
                    <ul className='dropdown'>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>
                </li>
                <li><a href='#'>BEAUTY</a>
                <ul className='dropdown'>
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
                <li><a href='#'>PRESS</a> 
                </li>
                    
            </ul>
        </div>
    )
}

export default Categories
