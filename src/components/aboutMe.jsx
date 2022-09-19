import React from 'react'
import './aboutMe.css'
import ProfilePic from './images/profile.jpg'

function AboutMe(){
    window.scrollTo(0, 0);
    return(
        <>
        <section class="about" id="about">
        <div class="container">
                <div class= "box-sample" data-aos="fade-up" data-aos-duration="2000">
                        <h2 class="subtitle">About Me</h2>
                <hr/>
                    </div>
            <figure id="photo-container">
                <img src={ProfilePic} data-aos="fade-up" data-aos-duration="2000" alt=""/>
            </figure>
            <div id="text-container" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                <p>I'm Aryan Dayal. Versetile person for preview purposes :) I'm working with latest front-end frameworks React. 
                    I hope you like my portfolio. Thank you </p>
            </div>
        </div>
    </section>
    </>
    )
}
export default AboutMe;