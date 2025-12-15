import React from "react";
import { UseNewsContext } from "./context/NewsContext";

const App = () => {
  const { count } = UseNewsContext();
  return <div>App {count}</div>;
};

export default App;
