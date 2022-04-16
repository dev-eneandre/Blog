import React, { useState } from 'react';
import "../Styles/Home.css";
import Categories from './Categories';
import Content from './Content';
import Subscribe from './Subscribe';

function Home() {
    const [ImgZoom, setImgZoom ] = useState(false);

    // Catalogue 
    const [ C__images, setC__images ] = useState([
        { imgSrc : require("../Images/beauty+tile.png"), altt:"beauty tile" },
        { imgSrc : require("../Images/decor+tile.png"), altt:"beauty tile" },
        { imgSrc : require("../Images/fashion+tile.png"), altt:"beauty tile" },
        { imgSrc : require("../Images/lifestyle+tile.png"), altt:"beauty tile" },
        { imgSrc : require("../Images/places+tile.png"), altt:"beauty tile" }
    ]);

    const ChangeZoomState = (index) => {
        // console.log(index)
        setImgZoom(!ImgZoom);
    }

    return (
        <div>
            {/* <Categories /> */}
            
            <div className="HomeHeader">
            </div>

            {/* subscribe  */}
            <div className="subscribe">
                <p>
                    Subscribe to my Newsletter
                </p>
                <Subscribe />
            </div>

        {/* This is where the error is   */}
            {/* catalogue for images  */}
            <div className="Cat__Catalogue">
                {C__images.map(( ci, index ) => (
                    // <div className="catalogue__wrap" onClick={() => ChangeZoomState(index)}>
                    <div className="catalogue__wrap">
                    <img src={ci.imgSrc} className={ImgZoom ? "zoomOut" : " "} alt="beauty tile" key={ImgZoom.imgSrc} />
                    </div>
                ))}
            </div>

            <Content />
        </div>
    )
}

export default Home
