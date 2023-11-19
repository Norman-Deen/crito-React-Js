import {Routes,Route} from "react-router-dom";
import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Contact";
import Home from "./Home";
import News from "./News"
import NewsDetails from "./NewsDetails"
import NotFound from "./Components/NotFound";
import postsData from  "./data/postsData"
import postsContext from "./data/postsContext"






export default function App() {
  return (
    

    <>

      <postsContext.Provider value={postsData}>
      
            <Header />

              <Routes>
                <Route path= "/" element= {<Home />}  /><Route path= "/Home" element= {<Home />}  />
                <Route path= "/Contact" element= {<Contact />}  />
                <Route path= "/News" element= {<News />}  />
                <Route path= "/NewsDetails/:postId" element= {<NewsDetails />}  />
                <Route path= "/*" element= {<NotFound />}  /> {/* error */}      
              </Routes>

             <Footer  />

           </postsContext.Provider>

    </>

   

  );
}


