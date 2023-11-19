import Pic1 from "../Pic/adeolu-eletu-E7RLgUjjazc-unsplash.jpg";
import ButtonA from "../assets/ButtonA";
import Pic2 from "../Pic/marek-levak-zANXcXyByos-unsplash.jpg";
import Pic3 from "../Pic/oli-dale-xjSkI_seiZY-unsplash.jpg";
import Pic4 from "../Pic/carlos-muza-hpjSkU2UYSU-unsplash.jpg";



function Projects(props) {
  return(
      <>
        <a className="project" href="#">
              <img src={props.Pic} className="ProjectCaseStudiesPic" alt="Pink Apple products on a desk" />
              <h3>{props.title}</h3>
              <div className="readmore">
                <ButtonA text="Read More"className="btn-transparent btnRead" iconClassName="fa-solid fa-square-arrow-up-right"  />
              </div>
            </a>
      </>
  );
}


export default function ProjectCaseStudies(props) {
  return (
    <>
      <section className="project-and-case">
        <div className="container">
          <div className="section-title">
            <h6 className="ProjectCaseStudiesh6">Project &amp; case studies</h6>
            <h2 className="ProjectCaseStudiesh2">{props.titleMain}</h2>
          </div>
          <div className="project-and-cases">

            <Projects   Pic={Pic1} title = "Grow Your Business" />
            <Projects   Pic={Pic2} title = "Why Your Clint needs a responsive website" />
            <Projects   Pic={Pic3} title = "Educate your employees to get better results" />
            <Projects   Pic={Pic4} title = "Business insights is an important piece of your business" />

          </div>
          <div className="center-content">
            <ButtonA text="All Recent Projects" className="btn-black ProjectCaseStudiesBtnBlack"  iconClassName="fa-solid fa-square-arrow-up-right"/>
          </div>
        </div>
      </section>
    </>
  );
}
