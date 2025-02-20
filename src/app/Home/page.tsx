import React from "react";
import Navbar from "../Components/common/navbar";
import Home from "../Components/Page/Home/home";
import Footer from "../Components/common/footer";
import TopSelling from "../Components/Page/Home/topSelling";
import Newsletter from "../Components/Page/Home/newsletter";

const home = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <TopSelling/>
      <Newsletter/>
      <Footer />
      
    </div>
  );
};

export default home;
