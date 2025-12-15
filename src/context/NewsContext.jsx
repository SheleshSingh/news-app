import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [count, setCount] = useState(90);

  const value = {
    count,
    setCount,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const UseNewsContext = () => {
  const context = useContext(NewsContext);
  return context;
};

export { NewsContextProvider, UseNewsContext };
