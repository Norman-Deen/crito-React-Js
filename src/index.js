import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../src/Css/index.css';
import "../src/Css/Header.css"
import "../src/Css/Footer.css"
import "../src/Css/Components.css"
import "../src/Css/Home.css"
import "../src/Css/Contact.css"
import "../src/Css/News.css"
import "../src/Css/NewsDetails.css"
import "../src/Css/ShowCase.css"
import "../src/Css/OurCustomers.css"
import "../src/Css/Features.css"
import "../src/Css/OurServices.css"
import "../src/Css/ProjectCaseStudies.css"
import "../src/Css/OurTeamClient.css"
import "../src/Css/ArticleAndNewsSection.css"
import "../src/Css/ArticleNews.css"
import "../src/Css/TitleRedBlack.css"
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);




