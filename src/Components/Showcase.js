import ButtonA from "../assets/ButtonA";


export default function Showcase(props) {

  return (
    <div className="showcase-box">
      <section className="showcase">
        <div className="container">
          <div className="content">
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <ButtonA   text= "Get Consulting" className="btn-yellow btn-login NoBorder" iconClassName="fa-solid fa-square-arrow-up-right" />
             
            <ButtonA   text= "Learn More" className="btn-transparent " iconClassName="fa-solid fa-square-arrow-up-right" />
             
          </div>
          <img src={require('../Pic/showcase-image.svg').default} className="showcasePic" alt="showcase-man" />
        </div>
        <img className="background-lines" src={require('../Pic/background-lines.svg').default}  />
      </section>
    </div>
  );
}
