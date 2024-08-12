import React from "react";

const images = [

  "https://i.ibb.co/Dz98D34/arr1.png",
  "https://i.ibb.co/b3pj1kn/arr2.png",
  "https://i.ibb.co/rtGsyBN/arr3.png",
  "https://i.ibb.co/vqgJCSL/arr4.png",
  "https://i.ibb.co/4Wg5Z54/arr5.png",
  "https://i.ibb.co/MVkBpP2/arr6.png",
];

const Gallery = () => {
  return (
    <div>
      <div className="bg-Travelimg relative  bg-cover bg-center h-96">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins text-[#fff] mb-4">
            Gallery
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8">
          {images.map((image) => (
            <div className="rounded-lg overflow-hidden shadow-md transform transition hover:scale-110">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
