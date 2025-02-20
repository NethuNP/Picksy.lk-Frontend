import React from "react";

const Shop = () => {
  const items = [
    {
      name: "Item 1",
      price: 100,
    },
    {
      name: "Item 2",
      price: 200,
    },
    {
      name: "Item 3",
      price: 300,
    },
    {
      name: "Item 4",
      price: 400,
    },
    {
      name: "Item 5",
      price: 500,
    },
  ];

  return (
    <div>
      <div className="">
        <div className="bg-gradient-to-r from-[#CDC1FF] via-slate-200 to-[#CDC1FF] shadow-xl p-4 mt-8 h-screen">
          <div className="grid grid-cols-4 gap-4 mt-4 ">
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-4 h-[200px]">
                <h1 className="text-2xl font-bold">{item.name}</h1>
                <p className="text-lg">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
