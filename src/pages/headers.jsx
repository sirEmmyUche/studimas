import { useState } from "react"
import "../styles/mainstyle.css";

function Headers() {
    const [toggleMenu, setToggleMenu] = useState(null);
  
    const handleToggleMenu = ()=>{
      setToggleMenu(!toggleMenu)
    }
    return (
      <header>
        <nav className="home-pg-nav">
            <div className='logo'>
                <div className="on-mobile-logo">Studimas</div> 
            </div>
            <ul id={toggleMenu?"responsiveness":null}>
                    <li>
                        <a to={"/"}>Home</a>
                    </li>
                <li > 
                    <a to={"/about"}>About</a>
                </li>
                    <li >
                        <a to={"/project"}>Project</a>
                    </li>
                <li>
                    <a to={"/contact"}>Contact</a>
                </li>
            </ul>
            <div className="menubar">
                <img src="/images/icon-menu.svg" alt="menubar"onClick={handleToggleMenu} />
            </div>
        </nav>
        <div className="fun-learning">
            <div className="fun-learning-first-child">
                <h1>Have fun Learning Online<br/> with a Live Tutor</h1>
                <p>Studimas is an online learning platform with live tutors,<br className="break"/> 
                    providing personalised curriculum and support communities for mastery focused learning.</p>
                <div className="button-box"><button className="get-start-btn">Get started</button></div>
            </div>
            <div className="fun-learning-img">
                <div className="fun-learning-img-box"><img src="/images/iTutors 1.png" alt="human"/></div>
            </div>
        </div>
        <div className="sub-header">
            <h3>Designed to meet your need</h3>
            <div className="star-list">
                <li>Students</li>
                <li>Parents</li>
                <li>Professionals</li>
            </div>
        </div>
      </header>
    )
  }
  
  export default Headers
  