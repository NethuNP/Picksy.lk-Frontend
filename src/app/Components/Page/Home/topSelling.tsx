"use client"
import React from "react";
import { useEffect } from "react";
import frock from "../../../../../public/Images/frock.jpg";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaArrowRight } from "react-icons/fa";

import "aos/dist/aos.css";
import AOS from "aos";

const TopSelling = () => {
  const TopSelling = [
    {
      id: 1,
      name: "Item 1",
      price: 100,
      src: frock,
    },
    {
      id: 1,
      name: "Item 1",
      price: 100,
      src: frock,
    },

    {
      id: 1,
      name: "Item 1",
      price: 100,
      src: frock,
    },
    {
      id: 1,
      name: "Item 1",
      price: 100,
      src: frock,
    },
    {
      id: 1,
      name: "Item 1",
      price: 100,
      src: frock,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div>
      <div className="mt-20 flex items-center justify-center text-[20px] text-[#8f4d79] font-normal" data-aos="fade-up">
        Top Selling Products For You
      </div>
      <div className="text-[30px] font-semibold flex items-center justify-center" data-aos="fade-up">
        Top Selling Products
      </div>
      <div className="flex items-center justify-center">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-10 mt-4" >
        {TopSelling.map((item, index) => (
          <div
            key={index}
            className="w-[250px] h-[300px] border border-gray-200 rounded-lg shadow-xl " data-aos="fade-up"
          >
            <div className="flex justify-center items-center mt-4">
              <Image
                src={item.src}
                alt={item.name}
                className="w-[140px] h-[200px] overflow-hidden "
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <div>{item.name}</div>
              <div> RS{item.price}</div>
            </div>
            <div className="flex items-center justify-center">
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>{" "}
            </div>
          </div>
        ))}
      </div></div>
      <div className="flex items-center justify-center mt-6">
        <button className="bg-[#502A43] text-white md:px-6 md:py-2 px-6 py-1 rounded-lg mt-4 hover:bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 hover:text-white transition-all text-sm md:text-lg">
          View All Products
          <FaArrowRight className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default TopSelling;
