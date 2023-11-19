import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function ArticleNews(props) {
  
  const [article, setArticle] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        const data = await response.json();

        
        const targetArticle = data.find((article) => article.id === props.ArticleID);
        setArticle(targetArticle);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.ArticleID]); 

  return (
    <>
      {article && (
        <div className="ArticleNewsBox" key={article.id}>
           
          <p className="ArticleNewsDate">
            {new Date(article.published).getDate()}{" "}
            <span className="dateMonth">
              {new Date(article.published).toLocaleString('default', { month: 'long' })}
            </span>
          </p>

          
          <NavLink to={props.herf}><img className="ArticleNewsPic" src={article.imageUrl} alt="Articles Pic" /></NavLink>

          <br />
          <br />

          
          <p className="ArticleNewsAuthor"> {article.author} <span className="descriptionP"> {article.category}</span> </p>
            
          
          <h5 className="titleBox">{article.title}</h5>
          <p className="description">{article.content}</p>
        </div>
      )}
    </>
  );
}

