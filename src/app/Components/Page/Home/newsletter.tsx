import React from "react";
import news from "../../../../../public/Images/newsletter.jpg";

const Newsletter = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-[#8f4d79] text-[30px] mt-10 font-semibold">
        Get Notified about New Products
      </div>

      <div className="grid grid-cols-2 w-full h-[400px] bg-[#CDC1FF] container mx-auto mt-6">
        <div className="flex items-center justify-center">
          <p className="text-gray-800 text-lg font-medium">
            Stay updated with the latest deals and offers!
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="flex items-center justify-center w-full h-[400px] bg-cover bg-center bg-no-repeat rounded-lg"
            style={{
              backgroundImage: `url(${news.src})`,
            }}
          >
            <input
              type="text"
              placeholder="Enter your e-mail here"
              className="text-gray-400 w-1/2 h-[40px] rounded-lg bg-white bg-opacity-80 px-4 placeholder-gray-500 border border-indigo-200 shadow-2xl"
            />
            <button className="bg-[#502A43] text-white md:px-6 md:py-2 ml-4 rounded-lg"> Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
