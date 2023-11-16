import Pagination from "./assets/Pagination"
import NewsAndArticlesHeader from "./Components/NewsAndArticlesHeader"
import NewsLetter from "./Components/NewsLetter"

import TitleRedBlack from "./assets/TitleRedBlack"

import ArticleNews from "./Components/ArticleNews"

import { NavLink } from 'react-router-dom';




export default function News(){
  
let ArticleID ;
  return(

  <>

    

      <NewsAndArticlesHeader />


    
      <div className="NewsBox">



      <TitleRedBlack      titleRed=""  MainTitle="Our News & Articles" />
                          
      </div>                



      <div className="Box-pic">
       
       <ArticleNews  ArticleID="cb24396b-ae21-4c34-a267-d0cd0600aa6d"   herf={`/NewsDetails/cb24396b-ae21-4c34-a267-d0cd0600aa6d`} 
                     dateNumber=""  dateMonth="" titleMainBox="" titleBox="" />

                                                               {/* herf="/NewsDetails"    */}

       <ArticleNews  ArticleID="cc6c2b75-8ee7-4e4e-8a99-66fe89a4b789"   herf={`/NewsDetails/cc6c2b75-8ee7-4e4e-8a99-66fe89a4b789`}    titleRed=""     titleBlack=""           ButtonAText="" ButtonAclassName=""  ButtonAiconClassName=""
                     dateNumber=""  dateMonth="" titleMainBox="" titleBox="" />    

       <ArticleNews  ArticleID="228c829d-4f66-431f-bb20-1b3aed2869b6"     titleRed=""     titleBlack=""   ButtonAText="" ButtonAclassName=""  ButtonAiconClassName=""
                     dateNumber=""  dateMonth="" titleMainBox="" titleBox="" />

       </div>
       <div className="Box-pic">
       
       <ArticleNews  ArticleID="ef44d5ef-7c50-4fbe-90a2-d1e0a498d9b5"      
                     dateNumber=""  dateMonth="" titleMainBox="" titleBox="" />

       <ArticleNews  ArticleID="f2bc8043-5ba0-4a8a-8a68-ec259ec9d3c3"  titleRed=""     titleBlack=""           ButtonAText="" ButtonAclassName=""  ButtonAiconClassName=""
                     dateNumber=""  dateMonth="" titleMainBox="Business" titleBox="" />    

       <ArticleNews  ArticleID="64c35699-a737-4712-a85e-f76c7dc43172"     titleRed=""     titleBlack=""   ButtonAText="" ButtonAclassName=""  ButtonAiconClassName=""
                     dateNumber=""  dateMonth="" titleMainBox="" titleBox="" />

       </div>
       <div className="Box-pic">
       
       <ArticleNews  ArticleID="9a686f0a-8397-41c2-8adb-bd731eea59ac"      
                     dateNumber="11"  dateMonth="" titleMainBox="" titleBox="" />

       <ArticleNews  ArticleID="98267e89-b18a-4356-b95a-d2c4b0ddc224"  titleRed=""     titleBlack=""           ButtonAText="" ButtonAclassName=""  ButtonAiconClassName=""
                     dateNumber="17"  dateMonth="Mar" titleMainBox="Business" titleBox="" />    

       <ArticleNews  ArticleID="d0f52440-87b3-4fe4-b9ad-649bab1822b4"     titleRed=""     titleBlack=""   ButtonAText="" ButtonAclassName=""  ButtonAiconClassName=""
                     dateNumber="13"  dateMonth="Mar" titleMainBox="Business" titleBox="" />

       </div>


       
     



      <Pagination />

          
      <NewsLetter title="Get News Updates By Signup"    />
     

  
    
  </>
  
)


}