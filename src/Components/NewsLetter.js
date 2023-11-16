import ButtonA from "../assets/ButtonA";

export default function NewsLetter(props) {
  return (
    <>
      <section className="newsletter">


        <img className="NewsLetterWavyLines"  src={require('../Pic/background-wavy-lines.svg').default} alt="" />
          
         
        <div className="container">
          <h2>{props.title}</h2>
          <form action="">
            <input type="email" placeholder="username@domain.com" />

            <ButtonA text="Subscribe" className="btn-yellow  NoBorder"  iconClassName="fa-solid fa-square-arrow-up-right" />
            
          </form>
        </div>
      </section>
    </>
  );
}


