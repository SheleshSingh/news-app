import { UseNewsContext } from "../context/NewsContext";

const Button = () => {
  const { fetchNews, setNews } = UseNewsContext();
  const buttonArr = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const handleClick = async (e) => {
    const cat = e.target.value;
    const data = await fetchNews(`everything?q=${cat}`);
    setNews(data?.articles);
  };
  return (
    <div className="bg-slate-500 flex gap-5 p-3 rounded-b mb-5">
      {buttonArr.map((item) => (
        <button
          key={item}
          value={item}
          className="bg-rose-500 px-6 py-2 rounded"
          onClick={handleClick}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button;

// const res = api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`);
