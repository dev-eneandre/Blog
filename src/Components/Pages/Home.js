import React, { useState } from 'react';
import "../../Styles/Home.css";
import Content from '../Content';
import Subscribe from '../Subscribe';
import Menu from "../Menu";

function Home() {
   
    // Catalogue 
    const [ C__images, setC__images ] = useState([
        { imgSrc : require("../../Images/6.jpg"), altt:"beauty tile", title : "fashion", description : "lorem lorem lorem" },
        { imgSrc : require("../../Images/1.jpg"), altt:"beauty tile", title : "beauty", description : "lorem lorem lorem" },
        { imgSrc : require("../../Images/7.jpg"), altt:"beauty tile", title : "lifestyle", description : "lorem lorem lorem" },
        { imgSrc : require("../../Images/3.jpg"), altt:"beauty tile", title : "travels", description : "lorem lorem lorem" },
        { imgSrc : require("../../Images/5.jpg"), altt:"beauty tile", title : "news", description : "lorem lorem lorem" }
    ]);

  
    return (
        <div>

            {/* <Categories /> */}
            <div className="HomeHeader">
                <img  className="HomeHeaderImg" src={require("../../Images/bg.jpg")} alt="BACKGROUND IMAGE" />
           
                <div className='Intro'>
                    <h3>Hello There</h3>
                    <h6>Welcome to Devandre's Blog</h6>
                </div>
            </div>

            {/* subscribe  */}
            <div className="subscribe">
                <p>
                    Subscribe to my Newsletter
                </p>
                <Subscribe />
            </div>

              {/* catalogue for images  */}
            <div className="Cat__Catalogue">
                {C__images.map(( ci, index ) => (
                    <div className="catalogue__wrap" key={index}>
                         <img src={ci.imgSrc}  alt={ci.altt}  />
                        <div className='image__overlay image__overlay__blur'>
                            <div className='image__title'>
                               {ci.title}
                            </div>
                            <p className='image__description'>{ci.description} will be here</p>
                        </div>
                    </div>
                ))}
            </div>

            <Content />
        </div>
    )
}

export default Home
