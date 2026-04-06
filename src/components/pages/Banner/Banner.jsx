import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] container mx-auto my-12 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img
            src="https://i.ibb.co.com/99b008cJ/pngwing-1.png"
            className="max-w-sm rounded-lg "
          />
          <div className="space-y-12">
            <h1 className="text-6xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn p-7 btn-success text-xl text-white ">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
