import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home.jsx'
import Header from './components/header.jsx'
import AboutMe from './components/aboutMe.jsx'
import Projects from './components/projects.jsx'
import Blogs from './components/blogs.jsx'
import Contact from './components/contact.jsx'
import Blog1 from './components/blog1.jsx'
import Blog2 from './components/blog2.jsx'
import AllProjects from './components/allProjects'


function App() {
    return(
        <>
        <Router>
        <Header></Header>
        <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/AboutMe' component={AboutMe}/>
                <Route exact path='/Projects' component={Projects}/>
                <Route exact path='/Allprojects' component={AllProjects}/>
                <Route exact path='/Blogs' component={Blogs}/>
                <Route exact path='/Blog1' component={Blog1}/>
                <Route exact path='/Blog2' component={Blog2}/>
                </Switch>
        <Contact></Contact>
        </Router>
        </>
    )
}

export default App;