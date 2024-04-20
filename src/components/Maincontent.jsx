import React, { useState } from "react";

const Maincontent = () => {
  const [data, setData] = useState([]);
  const fetchurl = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  fetchurl();
  console.log(data);

  return (
    <div>
      <section class="text-gray-600 body-font ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {data.map((item) => (
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a class=" relative h-48 rounded overflow-hidden flex items-center justify-center">
                  <img
                    alt="ecommerce"
                    class="item-center h-full block"
                    src={item.image}
                  />
                </a>
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p class="mt-1">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maincontent;
