import { NavLink } from "react-router-dom";

// This component is designed to be reusable and can be used within the Footer component
// to create separate columns for different sections such as "Company," "Help," "Resources," etc. 
// Each column contains a title and multiple links.
function FooterColumn(props) {
  return (
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

// This component is designed to create consistent navigation links with icons throughout the application. 
// The use of NavLink suggests that it is intended for navigation within a React Router context.
function InfoBars(props) {
  return (
    <>
      <NavLink className="HeaderNavLink" to={props.href} target={props.target}>  <i className={props.className} /> {props.text}  </NavLink>

    </>
  );
}

// This code defines a Footer component that includes sections for company information, 
// help, resources, and additional links. It also incorporates decorative elements and social media links.
// The footer columns are created using the FooterColumn component, and navigation links with icons are rendered using the InfoBars component.
export default function Footer(props) {
  return (

    <>
      <footer>

        <section className="footer-sec">
          <div className="logo">
            <a href="#"> <img src={require('../Pic/Logo-white.svg').default} alt="crito logotype" /> </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
          </div>

          <FooterColumn title="Company" link1="About" link2="Features" link3="works" link4="Career" />
          <FooterColumn title="Help" link1="Customer Support" link2="Delivery Details" link3="Terms & Conditions" link4="Privacy Policy" />
          <FooterColumn title="Resources" link1="Free eBooks" link2="Development Tutorial" link3="How to - Blog" link4="Youtube Playlist" />
          <FooterColumn title="Link" link1="Free eBooks" link2="Development Tutorial" link3="How to - Blog" link4="Youtube Playlist" />

        </section>

        <img className="line-wave" src={require('../Pic/background-lines-white-right.svg').default} />

        <p className="line-a" />
        <br />

        <div className="social-media">
          <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
          <div className="social-media-bar">
            <InfoBars className="fa-brands fa-facebook" href="https://www.facebook.com/" target="_blank" />
            <InfoBars className="fa-brands fa-x-twitter" href="#" />
            <InfoBars className="fa-brands fa-instagram" href="#" />
            <InfoBars className="fa-brands fa-linkedin" href="#" />
          </div>
        </div>
      </footer>

    </>

  );
}