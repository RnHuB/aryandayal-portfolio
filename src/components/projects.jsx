import React from 'react'
import './projects.css'
import { Link } from 'react-router-dom'
import PlayLogo from './images/playLogo.png'

function Projects() {
    return(
        <>
        <section class="projects" id="projects">
        <div class="container">
            <div class= "box-sample" data-aos="fade-up" data-aos-duration="2000">
                <h2 class="subtitle">Projects</h2>
                <p>Here are some examples of my work</p>
                <hr/>
            </div>
            <div class="project-box" id="project1-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://replit.com/@aryandayal/levelZeromarkOneCLIapp#index.js">
                    <figure id="project1">
                        
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>How well you know me. CLI GAME APP</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://replit.com/@aryandayal/levelZeromarkOneCLIapp#index.js"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/HowWellYouKnowMe"><button>ViewCode</button></a>
                    </div>
                </div>
            </div>
            
            <div class="project-box" id="project2-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://replit.com/@aryandayal/CLIquizGame">
                    <figure id="project2-bgColor" >
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>CLI Quiz Game</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://replit.com/@aryandayal/CLIquizGame"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/CLI-quiz-game.git"><button>ViewCode</button></a>
                    </div>
                </div>
                          
            </div>
        </div>
            <div id='more'>
            <Link to='/AllProjects'><button class='more-btn'>More</button></Link>
            </div>
    </section>

    
    </>
    )
}
export default Projects;