import React from 'react'
import './allProjects.css'
import PlayLogo from './images/playLogo.png'


function AllProjects() {
    window.scrollTo(0, 0);
    return(
        <>
        <section class="projects" id="projects">
        <div class="container">
            <div class= "box-sample" data-aos="fade-up" data-aos-duration="2000">
                <h2 class="subtitle">Projects</h2>
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
            <div class="project-box" id="project3-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://rn-banana-translator.netlify.app/">
                    <figure id="project3-bgColor" >
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>Banana Translator</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://rn-banana-translator.netlify.app/"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/banana-translator.git"><button>ViewCode</button></a>
                    </div>
                </div>
                          
            </div>

            <div class="project-box" id="project4-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://rn-old-english-translator.netlify.app/">
                    <figure id="project4-bgColor" >
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>Old English Translator</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://rn-old-english-translator.netlify.app/"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/old-english-translator.git"><button>ViewCode</button></a>
                    </div>
                </div>
                          
            </div>

            <div class="project-box" id="project5-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://rn-emoji-enterpreter.netlify.app/">
                    <figure id="project5-bgColor" >
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>React emoji enterpreter</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://rn-emoji-enterpreter.netlify.app/"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/emoji-enterpreter.git"><button>ViewCode</button></a>
                    </div>
                </div>
                          
            </div>

            <div class="project-box" id="project6-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://aryandayal-software-recommendation-app.netlify.app/">
                    <figure id="project6-bgColor" >
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>Software Recommendation App in react</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://aryandayal-software-recommendation-app.netlify.app/"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/software-recommendation-app.git"><button>ViewCode</button></a>
                    </div>
                </div>
                          
            </div>

            <div class="project-box" id="project7-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://rn-cash-register.netlify.app/">
                    <figure id="project7-bgColor" >
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>Cash Register</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://rn-cash-register.netlify.app/"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/cash-register.git"><button>ViewCode</button></a>
                    </div>
                </div>
                          
            </div>

            <div class="project-box" id="project8-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://rn-is-your-birthday-lucky.netlify.app/">
                    <figure id="project8-bgColor" >
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>Is your birthday lucky</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://rn-is-your-birthday-lucky.netlify.app/"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/is-your-birthday-lucky.git"><button>ViewCode</button></a>
                    </div>
                </div>
            </div>

            <div class="project-box" id="project9-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://aryandayal-fun-with-triangle.netlify.app/">
                    <figure id="project9-bgColor" >
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>Fun wit Triangle</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://aryandayal-fun-with-triangle.netlify.app/"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/fun-with-triangle.git"><button>ViewCode</button></a>
                    </div>
                </div>
                          
            </div>

            <div class="project-box" id="project10-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://aryandayal-stock-app.netlify.app/">
                    <figure id="project10-bgColor" >
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>Stock App</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://aryandayal-stock-app.netlify.app/"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/stock-app.git"><button>ViewCode</button></a>
                    </div>
                </div>
                          
            </div>

            <div class="project-box" id="project11-box" data-aos="fade-up" data-aos-duration="2000">
                <a href="https://aryandayal-birthday-palindrome.netlify.app/">
                    <figure id="project11-bgColor" >
                        <img class="project-logo" src={PlayLogo} alt="" height="150" width="150"/>
                    </figure>
                </a>
                <div class="data-box">
                    <div class="project-name">
                        <h4>Birthday Palindrome</h4>
                    </div>
                    <div class="redirection-links">
                        <a href="https://aryandayal-birthday-palindrome.netlify.app/"><button>Play</button></a>
                        <a href="https://github.com/RnHuB/birthday-palindrome.git"><button>ViewCode</button></a>
                    </div>
                </div>
                          
            </div>

        </div>
    </section>

    
    </>
    )
}
export default AllProjects;