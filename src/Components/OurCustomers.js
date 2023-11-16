import { data } from "../data/homeOurCustomersData";

export default function OurCustomers(props) {

  const dataImport = data.map((el, index) => (

    <div key={index}>
      {/* <h1>{el.text}</h1> */}
      <img src={el.OurCusPic.default} alt="OurCusPic" />
    </div>

  ));

  return (
    <>
      <section className="customers">
        <div className="customers-pic">{dataImport}</div>
      </section>
    </>
  );
}








// oldWay----------

// import Pic1 from "../Pic/paperz.svg";

// export default function OurCustomers(props) {
//   return (
//     <>

//       <section className="customers">
//         <div className="customers-pic">

//         <img src={require('../Pic/paperz.svg').default} alt="paperz" />
//         {/* <img src={require(`../Pic/${props.Pic2}`).default} alt="dorfus-pic" /> */}
//           <img src={require('../Pic/dorfus.svg').default} alt="dorfus" />
//           <img src={require('../Pic/martino.svg').default} alt="martino" />
//           <img src={require('../Pic/square.svg').default} alt="square" />
//           <img src={require('../Pic/gobona.svg').default} alt="gobona" />

//         </div>
//       </section>

//     </>

//   );

// }
