import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { fetchNewsFromCameroon } from "../services/newsService";

const NewsContainer = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const articles = await fetchNewsFromCameroon();
        setNews(articles);
      } catch (err) {
        setError("Erreur de chargement de nouveaux articles...");
      }
    };
    fetchNews();
  }, []);

  if (error) return <p>{error}</p>;
 
  return (
    <div className="container">
      {news.length > 0 ? (
        news.map((news) => (
          <NewsItem
            key={news.article_id}
            title={news.title}
            description={news.description}
            src={news.image_url}
            url={news.link}
          />
        ))
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      )}
    </div>
  );
};

export default NewsContainer;
