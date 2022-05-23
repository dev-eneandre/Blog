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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac est condimentum, molestie erat quis, consectetur enim.
                     Etiam mattis tellus augue, eu fringilla nisl sollicitudin condimentum. Nulla libero velit, lacinia sit amet ipsum at,
                      aliquet iaculis ipsum. Quisque elementum massa ligula, a iaculis nisi imperdiet in. Fusce suscipit sed mi ut ornare.
                       Phasellus pulvinar nunc eget urna vehicula, ac ultricies nibh placerat. Nam fringilla urna vel metus placerat,
                        vehicula facilisis nunc auctor. Donec bibendum lectus luctus, fringilla lectus tristique, aliquet eros. Nam
                         pretium scelerisque risus, eget maximus mauris. Praesent ipsum nibh, varius eget ex eget, volutpat eleifend
                         arcu. Nulla id aliquet nunc. Sed iaculis ornare urna at luctus. Aliquam et vulputate magna. Mauris a eros eget
                         elit tincidunt convallis. Ut sed elit feugiat, rhoncus odio id, finibus arcu. Proin in lectus vulputate, rutrum
                         erat et, pharetra massa. Nunc faucibus lacus at consequat laoreet. Nunc consequat sem et lorem varius ullamcorper. 
                    </p>
                    <p className="hr__text">
                       
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac est condimentum, molestie erat quis, consectetur enim.
                     Etiam mattis tellus augue, eu fringilla nisl sollicitudin condimentum. Nulla libero velit, lacinia sit amet ipsum at,
                      aliquet iaculis ipsum. Quisque elementum massa ligula, a iaculis nisi imperdiet in. Fusce suscipit sed mi ut ornare.
                       Phasellus pulvinar nunc eget urna vehicula, ac ultricies nibh placerat. Nam fringilla urna vel metus placerat,
                        vehicula facilisis nunc auctor. Donec bibendum lectus luctus, fringilla lectus tristique, aliquet eros.
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
                          
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac est condimentum, molestie erat quis, consectetur enim.
                     Etiam mattis tellus augue, eu fringilla nisl sollicitudin condimentum. Nulla libero velit, lacinia sit amet ipsum at,
                      aliquet iaculis ipsum. Quisque elementum massa ligula, a iaculis nisi imperdiet in. Fusce suscipit sed mi ut ornare.
                       Phasellus pulvinar nunc eget urna vehicula, ac ultricies nibh placerat. Nam fringilla urna vel metus placerat,
                        vehicula facilisis nunc auctor. Donec bibendum lectus luctus, fringilla lectus tristique, aliquet eros.
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
