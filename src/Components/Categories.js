import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Categories.css";

function Categories() {
    return (
        <div className="categ">
            <div className="categ__logo">
                <img src={require("../Images/LOGO.png")} alt="logo" />
            </div>

            <ul className="categ__list">
                <li>
                    <Link to="/stories/fashion">FASHION</Link>
                    <ul className='dropdown'>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>
                </li>
                <li><Link to="/stories/beauty">BEAUTY</Link>
                <ul className='dropdown'>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>
                </li>
                <li><Link to="/stories/places">PLACES</Link>
                </li>
                <li><Link to="/stories/lifestyle">LIFESTYLE</Link>
                </li>
                <li><Link to="/stories/decor">DECOR</Link>
                </li>
                <li><Link to="/stories/press">PRESS</Link> 
                </li>
                    
            </ul>
        </div>
    )
}

export default Categories
