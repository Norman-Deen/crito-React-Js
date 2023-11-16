import Pic1 from "../Pic/Group 1000004862.svg";
import Pic2 from "../Pic/Group 1000004871.svg";
import Pic3 from "../Pic/Group 1000004870.svg";
import Pic4 from "../Pic/Group 1000004869.svg";
import Pic6 from "../Pic/amy-hirschi-K0c8ko3e6AA-unsplash.png";


function ContentText(props) {
  return(
      <>
           <div className="Process">
                <img src={props.Pic} alt="Choose Us Icon" />
                <div>
                  <h4>{props.title}</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
      </>
  );
}

export default function WhyChooseUs(props) {
  return (
    <>
      <section className="Choose-us">
        <div className="big-box">
          <div className="left">
            <h6>Why Choose Us</h6>
            <h2>{props.titleMain}</h2>
            <div className="left-text">

              <ContentText Pic={Pic1} title = "Process Excellence"      content = ""/>

              <ContentText Pic={Pic2} title = "Strategic Planning"      content = ""/>

              <ContentText Pic={Pic3} title = "Experience Design"       content = ""/>

              <ContentText Pic={Pic4} title = "Artificial Intelligence" content = ""/>
                    
            </div>
          </div>
          <div className="right">
            <img src={Pic6} alt="Pic-6" /> 
            <p></p>
          </div>
        </div>
      </section>
    </>
  );
}
