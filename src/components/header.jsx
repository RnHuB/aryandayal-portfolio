import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
    return(
        <>
        <header id="navbar">
        <div class="container">
            <nav>         
                <div class="logo">
                    <a href="www.github.com/rnhub">Aryan Dayal</a>
                </div>
                <div class="menu">
                    <ol class="menu-options">
                        <li><Link class="about-link" to="/">Home</Link></li>
                        <li><Link class="about-link" to="/AboutMe">About</Link></li>
                        <li><Link class="projects-link" to="/Projects">Projects</Link></li>
                        <li><Link class="projects-link" to="/Blogs">Blogs</Link></li>
                    </ol>
                </div>
            </nav>
        </div>
    </header>

            
        </>
    )
}
export default Header;