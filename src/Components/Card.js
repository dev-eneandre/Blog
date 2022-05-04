import React from 'react';
import "../Styles/Content.css";
import { Link } from "react-router-dom";

function Card( { imageSrc, storyDate, storyTitle, dynamicLink }) {
    return (
        <Link to={dynamicLink}>
            <div className="story__card">
                <div className="sc__img">
                    <img 
                        src={imageSrc} 
                        alt="image" />
                </div>
            <div className="story__text">
                    <p className="st__date">{storyDate}</p>
                    <h4 className="st__title">{storyTitle}</h4>
                </div>
            </div>
        </Link>
    )
}

export default Card
