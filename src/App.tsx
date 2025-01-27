import "./App.css";
import ArticleListPage from "./component/ArticlePage";
import ArticleDetailPage from "./component/ArticleContent";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <main>
          <Routes>
            <Route index element={<ArticleListPage />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
