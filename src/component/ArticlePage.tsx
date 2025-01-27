import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Article } from "../lib/Interface";

const ArticleListPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        setError("Failed to fetch articles. Please try again later.");
        console.error(error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Articles</h1>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <ul className="space-y-6">
          {articles.map((article) => (
            <li
              key={article.id}
              className="border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">
                {article.title}
              </h2>
              <p className="text-gray-600">{article.summary}</p>
              <Link
                className="mt-4 text-blue-600 font-medium"
                to={`/article/${article.id}`}
              >
                Read more →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticleListPage;
