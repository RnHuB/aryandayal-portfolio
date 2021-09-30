import React from 'react'
import AboutMe from './aboutMe.jsx'
import Projects from './projects.jsx'
import Blogs from './blogs.jsx'
import Header2 from './header2.jsx'
function Home() {
    return(
        <>
            <Header2/>
            <AboutMe/>
            <Projects/>
            <Blogs/>
        </>
    )
}
export default Home;