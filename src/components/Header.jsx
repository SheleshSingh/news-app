import { UseNewsContext } from "../context/NewsContext";

const Header = () => {
  const { fetchNews, setNews } = UseNewsContext();
  let interVal = null;

  const handleSearch = (e) => {
    const searchVal = e.target.value;
    if (!searchVal) return;

    clearTimeout(interVal);

    interVal = setTimeout(async () => {
      const { data } = await fetchNews(`/everything?q=${searchVal}`);
      setNews(data?.articles);
    }, 1000);
  };

  return (
    <div className="flex justify-between bg-yellow-500 p-3 mt-3 rounded-t">
      <h1 className="text-3xl font-semibold">News App</h1>
      <input
        type="text"
        placeholder="Search news"
        className="border-2 rounded px-3"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Header;
