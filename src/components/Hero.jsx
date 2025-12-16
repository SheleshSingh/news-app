import React from "react";

const Hero = () => {
  return (
    <div className=" border p-2 rounded">
      <div className="w-full h-50 aspect-square rounded overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1765709019390-172aae6717dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div>
        <h1>Title</h1>
        <p className="line-clamp-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          velit nesciunt cupiditate, aperiam, obcaecati in non eveniet, ducimus
        </p>
      </div>
    </div>
  );
};

export default Hero;
