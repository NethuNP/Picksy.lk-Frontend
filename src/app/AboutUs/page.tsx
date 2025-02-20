import React from "react";
import Navbar from "../Components/common/navbar";

import Footer from "../Components/common/footer";
import About from "../Components/Page/AboutUs/about";

const page = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default page;
