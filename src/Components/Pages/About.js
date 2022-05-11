import React from 'react';
import "../../Styles/About.css";
import Content from '../Content';
import Subscribe from '../Subscribe';

function About() {
    return (
        <div className="hr__About">
                <div className="hr__section2">
                    <div className="section2">
                    <p className="hr__text">
                            Lets be honest, I started this blog as an excuse to keep posting pictures of
                            myself. Yes, there is truth in that, but thats not all. Many people know me 
                            from the hashtag #hayetisonadiet (too late, don't search for it). After a long
                            journey battling with weight-loss and weight-gain and then one more round of
                            weight-loss I realized that life wasn't just about dieting. I woke up one day
                            and realized that a few years ago I was praying to have the job I have now, the
                            life I have now and most importantly I was praying to have the body I have now.
                            So I am taking a pause. A pause to celebrate the woman that I am now, and live 
                            every inch of it.
                    </p>
                    <p className="hr__text">
                        Just remember one thing... everything I share is a personal story or an
                        experience, so technically you cannot really argue with my feelings!
                    </p>
                    <p className="hr__text">
                        xoxo!
                    </p>
                    </div>
                    <div className="Abt__ImgWrap">
                        <img 
                            className="Abt__Img"
                            src={require("../../Images/red.jpg")}
                            alt="profile" />
                    </div>
                </div>
                <div className="whats">
                    <h5 className="hr__title">WHAT I AM GOING TO POST ON THE BLOG...</h5>
                    <p className="hr__text">
                            I don't know if you have ever met me, but I am very unpredictable and I 
                            want the blog to be just about that. But okay I will say that there will
                            be lots of fashion. The best part about a healthier life is that you get
                            to stop spending money on medical bills and more money on clothing :-)
                            When I feel like cooking I might just post that too, as well as a healthy
                            dose of my unapologetic opinion about issues that girls like me face.
                    </p>
                </div>
               
            <div className="subscribe">
                <p className="subscribe_title">
                    Stay up to date
                </p>
                <Subscribe />
            </div>

        </div>
    )
}

export default About
