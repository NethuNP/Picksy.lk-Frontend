import React from "react";
import Image from "next/image";
import banner from "../../../../../public/Images/banner2.png";
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  
  return (
   
    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 shadow-2xl bg-gradient-to-r from-[#CDC1FF] via-slate-200 to-[#CDC1FF] rounded-lg h-screen">
      <div className="order-1 md:order-2 flex justify-center items-center">
        <Image
          src={banner}
          alt="banner"
          width={600}
          height={500}
          className="overflow-hidden"
        />
      </div>

      <div className="order-2 md:order-1 flex flex-col items-center justify-center md:space-y-10 space-y-2 text-center px-4">
        <p className="text-[#502A43] md:text-[40px] text-[20px] font-bold">
          Welcome to Picksy.lk{" "}
          <span className="flex justify-start items-start md:text-[20px] text-[14px] font-normal md:m-6 m-4">
            Shop the best products at great prices with fast delivery and secure
            payments & everything you need in one place!
          </span>
        </p>
        <button className="bg-[#502A43] text-white md:px-10 md:py-2 px-6 py-1 rounded-lg font-bold hover:bg-[#8f4d79] hover:text-white transition-all text-sm md:text-lg">
          Shop Now
          <FaArrowRight className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Home;
