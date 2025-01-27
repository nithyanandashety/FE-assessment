import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Article } from "../lib/Interface";

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/${id}`
      )
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        setError("Failed to fetch article details. Please try again later.");
        console.error(error);
      });
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : article ? (
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-gray-800">{article.title}</h2>
          <p className="text-xl text-gray-600 font-medium">{article.summary}</p>

          <p className="text-gray-800">{article.fullText}</p>
        </div>
      ) : (
        <p className="text-center text-xl">Loading article...</p>
      )}
    </div>
  );
};

export default ArticleDetailPage;
