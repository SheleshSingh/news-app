import React, { useEffect } from "react";
import { UseNewsContext } from "../context/NewsContext";

const Hero = () => {
  const { news, setNews, fetchNews } = UseNewsContext();
  console.log(news);

  useEffect(() => {
    (async () => {
      const { data } = await fetchNews();
      setNews(data?.articles);
    })();
  }, []);
  return (
    <>
      {news.map((item, index) => (
        <div key={index} className=" border p-2 rounded text-white">
          <div className="w-full h-fit  rounded overflow-hidden">
            <img
              src={item?.urlToImage}
              alt=""
              className="aspect-video object-center"
            />
          </div>
          <div>
            <h1 className="line-clamp-1 text-2xl font-semibold mt-2">
              {item?.title}
            </h1>
            <p className="line-clamp-3">{item?.description}</p>
          </div>
          <button
            onClick={() => window.open(item.url, "_blank")}
            className="bg-rose-500 px-6 py-2 rounded"
          >
            Read More
          </button>
        </div>
      ))}
    </>
  );
};

export default Hero;
