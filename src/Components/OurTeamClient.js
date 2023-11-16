import ButtonA from "../assets/ButtonA";
import PointBlack from "../assets/PointBlack";
import Pic1 from "../Pic/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg";
import Pic2 from "../Pic/itay-verchik-6ZKGBzrDd3I-unsplash.jpg";
import Pic3 from "../Pic/christina-wocintechchat-com-Zpzf7TLj_gA-unsplash.jpg";
import Pic4 from "../Pic/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg";

import Pic6 from "../Pic/vince-veras-AJIqZDAUD7A-unsplash.jpg";
import Pic7 from "../Pic/christina-wocintechchat-com-PlikkWB79qs-unsplash.jpg";
import Pic8 from "../Pic/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";


function TeamMembers(props) {
  return(
      <>
          <div className="TeamMembersBox">
              <img src={props.MemberPic}  className="TeamMembersPic" alt="TeamMembers Pic" />
              
              <h5 className="TeamMembersName">{props.MemberName}</h5>
              <p className="TeamMembersDes">{props.MemberDes}</p>
            </div>
      </>
  );
}

function OurClient(props) {

            const starsCount = 5;
            const stars = [];
            for (let i = 0; i < starsCount; i++) {
              stars.push(<ButtonA key={i} text="" className="starGold" iconClassName="fa-solid fa-star" />);
            }

  return (
    <div className="client-sec">
      {stars}
      <p className="clientPost">  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
      <div className="client-pic">
        <div>
          <img className="clientPic" src={props.clientPic} alt="" />
        </div>
        <div className="client-name">
          <h5>{props.NameClient}</h5>
          <p className="DescClient">{props.DescClient}</p>
        </div>
      </div>
    </div>
  );
}



export default function OurTeamAndClient(props) {
  return (
    <>
      <section className="Team">

      <div className="OurTeamAndClientBox">
          <div className="OurTeamText">
              <div>
                <h6>Meet Our Team</h6>
                <h2>{props.titleMain}</h2>
              </div>
        
              <ButtonA  text="Browse Team" className="btn-yellow s" iconClassName="fa-solid fa-square-arrow-up-right" />
             
          </div>
        
          <div className="TeamMembersPic">
          
            <TeamMembers  MemberPic = {Pic1}
                          MemberName = "Kristine Palmer"
                          MemberDes = "Chief Operation Officer"/>
        
            <TeamMembers  MemberPic = {Pic2}
                          MemberName = "Mark Aubri"
                          MemberDes = "Senior Consultant"/>
        
            <TeamMembers  MemberPic = {Pic3}
                          MemberName = "Kimberly Hansen"
                          MemberDes = "Senior Consultant"/>
        
            <TeamMembers  MemberPic = {Pic4}
                          MemberName = "Justin Willoman"
                          MemberDes = "Senior Tech Consultant"/>
        
          </div>


        
      </div>
        <PointBlack />

        {/* What Our Client Says */}
        <section className="Client-Says">
          <div className="white-box">
            <div className="head">
              <h6>Testimonial</h6>
              <h2 className="ClientTitle">{props.titleMainClient}</h2>
            </div>
              <div className="Client">

              <OurClient titleClient="" NameClient = "Cassandra Warren" DescClient = "Business Manager, Dorfus" clientPic={Pic6} />
                                  
              <OurClient titleClient="" NameClient = "Amanda Tulling" DescClient = "Senior Developer, Square" clientPic={Pic7}   />
                            
              <OurClient titleClient="" NameClient = "Jack McDogglas" DescClient = "Key Account Manager, Gobona"  clientPic={Pic8}   />
              
              </div>
            <div className="btn">

              <ButtonA text="All Reviews" className="btn-black BtnClient" iconClassName="fa-solid fa-square-arrow-up-right" />
                
            </div>
          </div>
        </section>
      </section>
    </>
  );
}




