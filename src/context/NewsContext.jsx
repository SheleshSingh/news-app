import axios from "axios";
import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const res = axios(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=9bb6b7a6373e4a7aae61c33c83b3c860"
    );
    return res;
  };

  const value = {
    fetchNews,
    news,
    setNews,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const UseNewsContext = () => {
  const context = useContext(NewsContext);
  return context;
};

export { NewsContextProvider, UseNewsContext };
