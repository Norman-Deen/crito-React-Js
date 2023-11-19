import Showcase from "./Components/Showcase"
import OurCustomers from "./Components/OurCustomers"
import Features from "./Components/Features"
import AboutCompany from "./Components/AboutCompany"
import OurServices from "./Components/OurServices"
import WhyChooseUs from "./Components/WhyChooseUs"
import ProjectCaseStudies from "./Components/ProjectCaseStudies"
import OurTeamAndClient from "./Components/OurTeamClient"
import ArticleNews from "./Components/ArticleNews"
import NewsLetter from "./Components/NewsLetter"
import PointBlack from "./assets/PointBlack"
import TitleRedBlack from "./assets/TitleRedBlack"





 




export default function Home(){

return(
  
    <>

    <Showcase title={"We Provide The Best Business Solutions"} content={"Establish your vision and value proposition and turn them into testable prototypes."} />
              
                                                           
    <OurCustomers  />

               
     <Features     />

     <AboutCompany  title ="We Are Business Consulting &amp; Credit Repair Experts"
                    content1 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos."
                    content2 ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet."
                    content3 =""
                    content4 ="Intro Video"  
                    founder1 ="Samantha Brown,"  
                    founder2 ="Lorem ipsum dolor sit amet consectetur adipisicing elit."  />
                  
     <OurServices title="We Provide The Best Service For Consulting"
                  titleBox1="Business Advice"
                  contentBox1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
                  titleBox2="Startup Business"
                  contentBox2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
                  titleBox3="Financial Advice"
                  contentBox3="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
                  titleBox4="Risk Management"
                  contentBox4="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."
                  icon=""
                  button=""   />
     
     <WhyChooseUs titleMain = "Why We Are The Best Business Consulting Agency"  />
                   
                      
                                                                
     <ProjectCaseStudies   titleMain="Lets Looks Our Global Projects"  IconText = "Read More"    />
                       

                   
                       
                              

     <OurTeamAndClient  titleMain="Experience Team Members"
                        titleMainClient="What Our Client Says"
                        titleClient="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe
                        nesciunt nemo eligendi numquam voluptate"  />
                           



  




        <div className="ArticleAndNewsSectionBox">


        <TitleRedBlack className="" titleRed="Article &amp; News"
                       MainTitle="Get Every Single Articles &amp; News" 
                       ButtonAText="Browse Articles" ButtonAclassName="btn-transparent s" href="/News"
                       ButtonAiconClassName="fa-solid fa-square-arrow-up-right" />
      
      
      
      
         <div className="ArticleAndNewsSectionPic">
         
         <ArticleNews  ArticleID="cb24396b-ae21-4c34-a267-d0cd0600aa6d"  herf={`/NewsDetails/cb24396b-ae21-4c34-a267-d0cd0600aa6d`}/>
      
         <ArticleNews  ArticleID="cc6c2b75-8ee7-4e4e-8a99-66fe89a4b789"  herf={`/NewsDetails/cc6c2b75-8ee7-4e4e-8a99-66fe89a4b789`} />    
      
         <ArticleNews  ArticleID="228c829d-4f66-431f-bb20-1b3aed2869b6"   herf={`/NewsDetails/228c829d-4f66-431f-bb20-1b3aed2869b6`}  />
      
         </div>



    </div>



     <PointBlack />   

     <NewsLetter title="Get News Updates By Signup"    />
                                                     
     </>
  
)
}