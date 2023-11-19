import logo from "../Pic/Logo.svg";
import { NavLink,Link } from "react-router-dom";
import ButtonA from "../assets/ButtonA";


// This code defines a Header component that includes a logo, contact information,
//  social media links, and a navigation menu with links to different sections of the website. 
//  The InfoBars component is used to create navigation links with icons. 

function InfoBars(props) {
  return(
      <>
      
        <NavLink className= "HeaderNavLink"  to={props.href}  target={props.target}>  <i className={props.className} /> {props.text}  </NavLink>

      </>
  );
}

export default function Header() {
return (
   <>
      <header>
        <div className="container">
          <Link to="/" > <img src={logo} className="critologotype" alt="critologotype" /> </Link>
        
          <div className="menu">
            <div className="HeaderTopMenu">
              <div className="HeaderContactInformation">
                <div className="HeaderContent-box"> <InfoBars className="fa-solid fa-phone "        text="+46 (8) 121 470 50" href="" /> </div>
                <div className="HeaderContent-box"> <InfoBars className="fa-regular fa-envelope"   text="info@crito.com" href="" /> </div>
                <div className="HeaderContent-box"> <InfoBars className="fa-solid fa-location-dot" text="Sveavägen 31, 111 34 STOCKHOLM" href="https://maps.app.goo.gl/DR74en42sQBLbshF7"  target="_blank" /> </div>
              </div>
              <div className="HeaderSocialMedia">
                 <InfoBars className="fa-brands fa-facebook"  href="https://www.facebook.com/" target="_blank" /> 
                 <InfoBars className="fa-brands fa-x-twitter" href="#"/> 
                 <InfoBars className="fa-brands fa-instagram" href="#"/> 
                 <InfoBars className="fa-brands fa-linkedin"  href="#" />  
              </div>
            </div>
            <div className="main-menu">
              <nav activeClassName="active">
              <InfoBars className="" activeClassName="active" text="Home"  href="/"/> 
              <InfoBars className="" activeClassName="active" text="Service" href="/error"/> 
              <InfoBars className="" activeClassName="active" text="News" href="/News"/>  
              <InfoBars className="" activeClassName="active" text="Contact" href="/Contact"/>
              </nav>

              <ButtonA text="Login" className="btn-yellow BtnHeader NoBorder " iconClassName="fa-solid fa-square-arrow-up-right" />      
            </div>
          </div>
        </div>
      </header>
    </>
  );
}