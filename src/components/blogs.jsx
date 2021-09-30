import React from 'react'
import './blogs.css'
import Metasploit from './images/metasploit.jpeg'
import Tilda from './images/blog2/tilda.png'
import { Link } from 'react-router-dom'

function Blogs() {
    return(
        <>
            <div class= "box-sample" data-aos="fade-up" data-aos-duration="2000">
                <h2 class="subtitle">Blogs</h2>
                <p>Here my some blogs</p>
                <hr/>
            </div>
        <main class="blog-grid-container">
    <section class="blog-post">
        <img alt=""  src={Metasploit} class="blog-cover-img"/>
        <div class="blog-content">
            <h3>Access Android through Metasploit Framework in Arch Linux</h3>
            <h5>September 29, 2021</h5>
            <p class="blog-content-description">We will use msfvenom for creating a payload and save it as an apk file. After generating the payload, we need to setup a listener to Metasploit framework. Once the target downloads and installs the malicious apk then, an attacker can easily get back a meterpreter session on Metasploit. An attacker needs to do some social engineering to install apk on the victim’s mobile device.<Link to='/Blog1'><button class="custom-button">Read More</button></Link></p>
        </div>
    </section>
    <section class="blog-post">
        <img alt=""  src={Tilda} class="blog-cover-img"/>
        <div class="blog-content">
            <h3>Install & configure dropdown terminal TILDA in Arch Linux</h3>
            <h5>September 30, 2021</h5>
            <p class="blog-content-description">The majority of Linux administrators and some of the regular Linux users prefer to use the command line to perform daily operations. However, you may find it tedious to open the terminal over and over again. In this case, we recommend a tool called Tilda. Tilda is an open-source and highly customizable GTK-based drop-down console for Linux. Tilda runs in the background while you can show and hide it with a single keystroke.<Link to='/Blog2'><button class="custom-button">Read More</button></Link></p>
        </div>
    </section>
</main>

<div class="clear-div"></div>
    </>
    )
}
export default Blogs;