import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function ArticleNews(props) {
  // State to store the fetched article
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch data from the API using async function
    const fetchData = async () => {
      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        const data = await response.json();

        // Find the article using the provided ArticleID prop
        const targetArticle = data.find((article) => article.id === props.ArticleID);
        setArticle(targetArticle);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.ArticleID]); // Update the effect when ArticleID prop changes

  return (
    <>
      {article && (
        <div className="ArticleNewsBox" key={article.id}>
          {/* Display the article date */}
          <p className="ArticleNewsDate">
            {new Date(article.published).getDate()}{" "}
            <span className="dateMonth">
              {new Date(article.published).toLocaleString('default', { month: 'long' })}
            </span>
          </p>

          {/* Link to the article using the provided href prop */}
          <NavLink to={props.herf}><img className="ArticleNewsPic" src={article.imageUrl} alt="Articles Pic" /></NavLink>

          <br />
          <br />

          {/* Display the author, category, title, and content */}
          <p className="ArticleNewsAuthor">
            {article.author} <span className="descriptionP"> {article.category}</span>
          </p>
          <h5 className="titleBox">{article.title}</h5>
          <p className="description">{article.content}</p>
        </div>
      )}
    </>
  );
}









