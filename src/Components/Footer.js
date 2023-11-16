import { NavLink,Link } from "react-router-dom";


function FooterColumn(props) {
  return(
      <>
         <div className="Link">
              <h5>{props.title}</h5> <br />
              <a href="#">{props.link1}</a> 
              <a href="#">{props.link2}</a> 
              <a href="#">{props.link3}</a>
              <a href="#">{props.link4}</a>
            </div>
      </>
  );
}



function InfoBars(props) {
  return(
      <>
        <NavLink className= "HeaderNavLink" to={props.href}  target={props.target}>  <i className={props.className} /> {props.text}  </NavLink>

      </>
  );
}






export default function Footer(props) {
  return (
    
      <>
        <footer>
          <section className="footer-sec">
            <div className="logo">
              <a href="#"> <img src={require('../Pic/Logo-white.svg').default} alt="crito logotype" /> </a>
              <p>{props.content}</p>
            </div>

            <FooterColumn  title="Company" link1="About" link2="Features" link3="works" link4="Career" />
            <FooterColumn  title="Help" link1="Customer Support" link2="Delivery Details" link3="Terms & Conditions" link4="Privacy Policy" />
            <FooterColumn  title="Resources" link1="Free eBooks" link2="Development Tutorial" link3="How to - Blog" link4="Youtube Playlist" />
            <FooterColumn  title="Link" link1="Free eBooks" link2="Development Tutorial" link3="How to - Blog" link4="Youtube Playlist" />

          </section>
          
          <img className="line-wave" src={require('../Pic/background-lines-white-right.svg').default} />
          <p className="line-a" />
           <br />
          <div className="social-media">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <div className="social-media-bar">
                <InfoBars className="fa-brands fa-facebook" href="https://www.facebook.com/" target="_blank" /> 
                 <InfoBars className="fa-brands fa-x-twitter" href="#"/> 
                 <InfoBars className="fa-brands fa-instagram" href="#"/> 
                 <InfoBars className="fa-brands fa-linkedin" href="#" /> 
            </div>
          </div>
        </footer>
      </>
    
  );
}




