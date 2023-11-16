import ButtonA from "../assets/ButtonA";
import Pic1 from "../Pic/Icon-2.svg";
import Pic2 from "../Pic/Icon-1.svg";
import Pic3 from "../Pic/Icon-3.svg";
import Pic4 from "../Pic/Icon-4.svg";


function FeaturesContent(props) {
  return(
      <>
       <div>
                <img src={props.Pic} alt="Features Content Pic" />
                <h6>{props.Title}</h6>
                <p>{props.content}</p>
       </div>
          
      </>
  );
}

export default function Features(props) {
  return (
    <>
      <section className="Features">
        <div className="Box-all">
          
          <div className="text-del">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
             <ButtonA   text= "Learn More" className="btn-yellow w NoBorder"  iconClassName="fa-solid fa-square-arrow-up-right"/>                                  
          </div>
          <div className="Features-icon">
            <section className="section-icon">

            <FeaturesContent   Pic = {Pic1} Title = "Business Advice" content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."  />
            <FeaturesContent   Pic = {Pic2} Title = "Startup Business" content = "simply dummy text of the printing and typesetting industry."  />
            <FeaturesContent   Pic = {Pic3} Title = "Financial Advice" content = "desktop publishing software like Aldus PageMaker including." />
            <FeaturesContent   Pic = {Pic4} Title = "Risk Management" content =  "Content here, content here, making it look like readable."   />
            
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
