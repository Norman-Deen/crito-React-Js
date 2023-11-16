import TitleRedBlack from "./assets/TitleRedBlack"
import Image1 from "./Pic/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg";
import Image2 from "./Pic/Group 1000005004.png";
import Image3 from "./Pic/Search Bar.svg";
import ButtonA from "./assets/ButtonA";
import NewsAndArticlesHeader from "./Components/NewsAndArticlesHeader"
import ArticleNews from "./Components/ArticleNews"
import PointBlack from "./assets/PointBlack"

import ApiData from  "./data/ApiData"
import { useParams } from "react-router-dom";
import { useContext } from "react";
import postsContext from "./data/postsContext"





export default function NewsDetails(){

  const posts = useContext(postsContext);

  const {postId} = useParams()
  const post = posts.find((p) => p.id === postId);


  

  return(
        <>

    

      <NewsAndArticlesHeader />




       <ApiData />







                 {/* Article & News */} 

<div  className="ArticleAndNewsSectionBoxBackGround">
  <div className="ArticleAndNewsSectionBox ">
              

  <TitleRedBlack className="" titleRed="Article &amp; News"
                      MainTitle="Get Every Single Articles &amp; News" 
                      ButtonAText="Browse Articles" ButtonAclassName="btn-transparent-W" href="/News"
                      ButtonAiconClassName="fa-solid fa-square-arrow-up-right" />
  
  
  
  
   <div className="ArticleAndNewsSectionPic">
   
   <ArticleNews  ArticleID="9a686f0a-8397-41c2-8adb-bd731eea59ac"      
                 dateNumber="11"  dateMonth="" titleMainBox="" titleBox="" />
  
   <ArticleNews  ArticleID="98267e89-b18a-4356-b95a-d2c4b0ddc224"  titleRed=""     titleBlack=""           ButtonAText="" ButtonAclassName=""  ButtonAiconClassName=""
                 dateNumber="17"  dateMonth="Mar" titleMainBox="Business" titleBox="" />    
  
   <ArticleNews  ArticleID="d0f52440-87b3-4fe4-b9ad-649bab1822b4"     titleRed=""     titleBlack=""   ButtonAText="" ButtonAclassName=""  ButtonAiconClassName=""
                 dateNumber="13"  dateMonth="Mar" titleMainBox="Business" titleBox="" />
  
   </div>
  
  
  
  </div>



     <PointBlack />   


</div>



    
  </>
  
)


}















