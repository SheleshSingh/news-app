import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between bg-yellow-500 p-3 mt-3 rounded-t">
      <h1 className="text-3xl font-semibold">News App</h1>
      <input
        type="text"
        placeholder="Search news"
        className="border-2 rounded px-3"
      />
    </div>
  );
};

export default Header;
