import logo from "../Pic/background-lines.svg"



export default function LetsConnect() {
  return (
    <div>
      <section className="Connect-showcase">

        <img className="background-lines" src={logo} alt="background-lines"/>
        <div className="container">
          <div className="content">
            <p>Home</p>
            <p>contact</p>
            <h1>Let’s Connect</h1>
          </div>
        </div>
        
      </section>
    </div>
  );
}
