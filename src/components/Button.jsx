import React from "react";

const Button = () => {
  const buttonArr = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <div className="bg-slate-500 flex gap-5 p-3 rounded-b mb-5">
      {buttonArr.map((item) => (
        <button key={item} className="bg-rose-500 px-6 py-2 rounded">
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button;

// business entertainment general health science sports technology
