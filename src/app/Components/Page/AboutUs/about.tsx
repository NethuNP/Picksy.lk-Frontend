import React from "react";
import Image from "next/image";
import banner from "../..//../../../public/Images/banner.png";

const About = () => {
  return (
    <div>
      <div className="flex md:text-4xl text-2xl  items-center text-[#80456b] justify-center mt-8 font-semibold">
        Who we are ??
      </div>
      <div className="bg-gradient-to-r from-[#CDC1FF] via-slate-200 to-[#CDC1FF] container mx-auto  rounded-2xl mt-4 shadow-2xl">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <Image src={banner} alt="banner" className=" " />
          </div>
          <div>
            <div>
              <p className="text-[18px] mt-[40px] text-gray-700">
                Welcome to Picksy.lk, your one-stop destination for all your
                online shopping needs in Sri Lanka. We are dedicated to bringing
                you a seamless, convenient, and enjoyable e-commerce experience,
                offering a wide range of high-quality products at competitive
                prices. At Picksy.lk, customer satisfaction is at the heart of
                everything we do. Whether you're looking for the latest gadgets,
                trendy fashion, home essentials, or unique gifts, we've got you
                covered.{" "}
              </p>

              <p className="mt-10 text-[18px] text-gray-700">
                {" "}
                Our user-friendly platform, secure payment options, and reliable
                delivery services ensure that your shopping journey is smooth
                from start to finish. We are committed to supporting local
                businesses and fostering a sense of community by featuring
                products from Sri Lankan entrepreneurs and brands alongside
                international offerings.
              </p>
              <p className="mt-10 text-[18px] text-gray-700">
                {" "}
                With Picksy.lk, shopping is not just a transaction—it's an
                experience tailored to your needs. Thank you for choosing
                Picksy.lk. We look forward to serving you!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
