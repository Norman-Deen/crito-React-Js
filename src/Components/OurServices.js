import ButtonA from "../assets/ButtonA";
import Pic1 from "../Pic/background-lines-right.svg";


function BoxsServices(props) {
  return (
    <>
      <div className={props.className}>
        <p className="line" />
        <h5>{props.titleBox} </h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
        <a className="btn-arrow" href="#"> <i className={props.icon} /> </a>
        <ButtonA text="" className="btn-arrow" iconClassName="fa-solid fa-circle-arrow-right" />
      </div>

    </>
  );
}



export default function OurServices(props) {
  return (
    <>

      <section className="Services">
        <div className="Box-all">
          <div className="Services-intro">
            <h6>Our Services</h6>
            <h2>{props.title}</h2>
          </div>

          <div className="Services-Box">
            <BoxsServices className="box" titleBox="Business Advice" />
            <BoxsServices className="box two" titleBox="Startup Business" />
            <BoxsServices className="box" titleBox="Financial Advice" />
            <BoxsServices className="box" titleBox="Risk Management" />
          </div>


          <img className="OurServicesPic" src={Pic1} />


          <div className="OurServicesBtn">

            <ButtonA text="Browse Services" className="btn-transparent " iconClassName="fa-solid fa-square-arrow-up-right" />


          </div>
        </div>
      </section>


    </>
  );
}
