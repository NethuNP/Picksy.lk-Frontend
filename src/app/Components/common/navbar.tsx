"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../../public/Images/logo.png";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/Home" },
    { name: "Shop", href: "/Shop" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Contact Us", href: "/Contact" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#A294F9] rounded-lg shadow-lg">
      <div className="hidden md:grid grid-cols-3 h-[100px] text-white font-bold">
        <div className="flex justify-center items-center relative mt-[-120px]">
          <div className="relative w-[250px] h-[100px] ">
            <Image src={logo} alt="logo" layout="fixed" objectFit="contain" />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-10">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="hover:bg-white hover:text-[#502A43] px-4 py-2 rounded-lg"
            >
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>
       
        <div className="flex justify-center items-center">
          <Link href="/Cart">
            <FaShoppingCart className="text-3xl" />
          </Link>
          <Link
            href="/Auth/login"
            className="hover:bg-white hover:text-[#502A43] px-4 py-2 rounded-lg ml-8"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between px-4 h-[70px] text-white font-bold">
        <button onClick={toggleSidebar} className="text-white text-2xl">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={100} height={40} />
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-gradient-to-b from-indigo-500 to-sky-500 text-white z-50 shadow-lg">
          <div className="flex justify-between items-center px-4 py-5">
            <Image src={logo} alt="logo" width={100} height={40} />
            <button onClick={toggleSidebar} className="text-white text-2xl">
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col space-y-5 px-6 py-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:bg-white hover:text-indigo-500 px-4 py-2 rounded-lg"
                onClick={toggleSidebar}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/Auth/login"
              className="hover:bg-white hover:text-indigo-500 px-4 py-2 rounded-lg"
              onClick={toggleSidebar}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
