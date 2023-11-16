function CallUsBox(props) {
  return(
      <>
       <div className="box-call">
          <i className={props.icon} />
          <div>
            <h4>{props.tittle}</h4> <br />
            <p>{props.content}</p>
          </div>
        </div> 
      </>
  );
}



export default function CallUs(props) {
  return (
    <div>
      <section className="call-us">
        <CallUsBox tittle="Visit us" content="Sveavägen 31 111 34 STOCKHOLM" icon="fa-solid fa-location-dot"/>
        <CallUsBox tittle="call us" content="+46 (8) 121 470 50  +46 (8) 121 471 31" icon="fa-solid fa-phone-volume" />
        <CallUsBox tittle="Email us" content="info@crito.com support@crito.com" icon="fa-solid fa-envelope"/>
      </section>
    </div>
  );
}
