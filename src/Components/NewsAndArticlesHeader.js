import logo from "../Pic/background-lines.svg"



export default function NewsAndArticlesHeader() {



  return (
    <div>
      {/*Lets Connect*/}
      <section className="Connect-showcase">
        <img
          className="background-lines"
          src={logo}
          alt="background-lines"
        />
        <div className="container">
          <div className="content">
          
            <h1>News & Articles</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
