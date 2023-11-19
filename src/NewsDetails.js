import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TitleRedBlack from "./assets/TitleRedBlack";
import NewsAndArticlesHeader from "./Components/NewsAndArticlesHeader";
import ArticleNews from "./Components/ArticleNews";
import PointBlack from "./assets/PointBlack";
import ApiData from "./data/ApiData";
import postsContext from "./data/postsContext";

export default function NewsDetails() {
  // Context and parameters
  const posts = useContext(postsContext);
  const { postId } = useParams();
  const selectedPost = posts.find((p) => p.id === postId);

  return (
    <>
      {/* Header */}
      <NewsAndArticlesHeader />

      {/* API Data */}
      <ApiData postId={postId} />

      {/* Article & News Section */}
      <div className="ArticleAndNewsSectionBoxBackGround">
        <div className="ArticleAndNewsSectionBox">
          {/* Title Section */}

          <TitleRedBlack className="" titleRed="Article &amp; News"
            MainTitle="Get Every Single Articles &amp; News"
            ButtonAText="Browse Articles" ButtonAclassName="btn-transparent s" href="/News"
            ButtonAiconClassName="fa-solid fa-square-arrow-up-right" />

          {/* Article Section */}
          <div className="ArticleAndNewsSectionPic">
            <ArticleNews ArticleID="9a686f0a-8397-41c2-8adb-bd731eea59ac" herf={`/NewsDetails/notFound`} />
            <ArticleNews ArticleID="98267e89-b18a-4356-b95a-d2c4b0ddc224" herf={`/NewsDetails/notFound`} />
            <ArticleNews ArticleID="d0f52440-87b3-4fe4-b9ad-649bab1822b4" herf={`/NewsDetails/notFound`} />
          </div>
        </div>

        {/* PointBlack Component */}
        <PointBlack />
      </div>
    </>
  );
}
