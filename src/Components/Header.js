import React from "react";
import logo from "../Pic/Logo.svg";
import { NavLink,Link } from "react-router-dom";
import ButtonA from "../assets/ButtonA";


function InfoBars(props) {
  return(
      <>
        <NavLink className= "HeaderNavLink" to={props.href}  target={props.target}>  <i className={props.className} /> {props.text}  </NavLink>

      </>
  );
}


export default function Header() {
  return (
    <>
    
      <header>
        <div className="container">
          <Link to="/" > <img src={logo} className="critologotype" alt="critologotype" /> </Link>
          {/* <button className="menu-bars"> <i className="fa-solid fa-bars-staggered" /> </button> */}
          <div className="menu">
            <div className="HeaderTopMenu">
              <div className="HeaderContactInformation">
                <div className="HeaderContent-box"> <InfoBars className="fa-solid fa-phone" text="+46 (8) 121 470 50" href="#" /> </div>
                <div className="HeaderContent-box"> <InfoBars className="fa-regular fa-envelope" text="info@crito.com" href="#" /> </div>
                <div className="HeaderContent-box"> <InfoBars className="fa-solid fa-location-dot" text="Sveavägen 31, 111 34 STOCKHOLM" href="https://maps.app.goo.gl/DR74en42sQBLbshF7"  target="_blank" /> </div>
              </div>
              <div className="HeaderSocialMedia">
                 <InfoBars className="fa-brands fa-facebook" href="https://www.facebook.com/" target="_blank" /> 
                 <InfoBars className="fa-brands fa-x-twitter" href="#"/> 
                 <InfoBars className="fa-brands fa-instagram" href="#"/> 
                 <InfoBars className="fa-brands fa-linkedin" href="#" />  
              </div>
            </div>
            <div className="main-menu">
              <nav>
              <InfoBars  className="" text="Home"  href="/"/> 
              <InfoBars className="" text="Service" href="/error"/> 
              <InfoBars className="" text="News" href="/News"/>  
              <InfoBars className="" text="Contact" href="/Contact"/>
              </nav>
              <ButtonA text="Login" className="btn-yellow BtnHeader NoBorder " iconClassName="fa-solid fa-square-arrow-up-right" />      
            </div>
          </div>
        </div>
      </header>
    </>
  );
}










{/* <a href={props.href}  target={props.target}>  <i className={props.className} /> {props.text}  </a>



<nav>
<InfoBars className="active" text="Home"  href="/"/> 
<InfoBars className="" text="Service" href="/error"/> 
<InfoBars className="" text="News" href="/News"/>  
<InfoBars className="" text="Contact" href="/Contact"/> 
</nav> */}