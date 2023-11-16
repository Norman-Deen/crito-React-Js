import ButtonA from "../assets/ButtonA";
import Pic1 from "../Pic/EWlement.svg";
import Pic2 from "../Pic/daria-pimkina-tYaccl19A3Q-unsplash.jpg";

export default function AboutCompany(props) {
  return (
    <>
      <section className="About">
        <div className="box-all">
          <div className="about-L">
            <div className="lap">
              <h5>
                {props.founder1} <span>Founder</span>{" "}
              </h5>
              <p>{props.founder2}</p>
            </div>
            <div className="curve">
              <img src={Pic1} alt="" />
            </div>
            <img height="615px" src={Pic2} alt="" />
          </div>
          <div className="about-R">
            <h6>About Company</h6>
            <h2>{props.title} </h2>
            <p>
              {" "}
              {props.content1}
              <br />
              <br />
              {props.content2}
            </p>
            <div className="video">
              <ButtonA text="Learn More" className="btn-black" 
              iconClassName="fa-solid fa-square-arrow-up-right"/>

              <a className="btn-video" href="#">
              
                <i className="fa-regular fa-circle-play" />
                <span>{props.content4}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
