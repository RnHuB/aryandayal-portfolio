import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'
import Insta from '../components/images/insta.png'
import LinkedIn from '../components/images/linkedin.png'
import Fb from '../components/images/fb.png'
import Github from '../components/images/github.png'


function Contact(){
    return(
        <>
	<div class="footer">
		<div class="inner-footer">

			<div class="footer-items">
				<h1>Currently i am working on :</h1>
				<p>
					backend web development in node js ecosystem.
				</p>
			</div>

			<div class="footer-items">
				<h2>Quick Links</h2>
				<div class="border"></div>
				<ul>
					<Link to='/'><li>Home</li></Link>
					<Link to='/AboutMe'><li>About Me</li></Link>
					<Link to='Projects'><li>Projects</li></Link>
					<Link to='Blogs'><li>Blogs</li></Link>
				</ul>
			</div>

			<div class="footer-items">
				<h2>Social Media Links</h2>
				<div class="border"></div>
				<ul>
					<li><Link><img class="sMediaLogo" src={Insta} alt="" /></Link></li>
					<li><Link><img class="sMediaLogo" src={LinkedIn} alt="" /></Link></li>
					<li><Link><img class="sMediaLogo" src={Fb} alt="" /></Link></li>
					<li><Link><img class="sMediaLogo" src={Github} alt="" /></Link></li>
				</ul>
			</div>

			<div class="footer-items">
				<h2>Contact</h2>
				<div class="border"></div>
				<ul>
					<li>Address : Patna</li>
					<li>Mob.: 9097134523</li>
					<li>e-mail : dayal.rn@gmail.com</li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			Copyright &copy; rnhub 2021. All rights reserved.
		</div>
	</div>
    </>
    )
}
export default Contact;