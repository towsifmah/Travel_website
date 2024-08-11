import React from "react";

const images = [
  "./src/assets/arr1.png",
  "./src/assets/arr2.png",
  "./src/assets/arr3.png",
  "./src/assets/arr4.png",
  "./src/assets/arr5.png",
  "./src/assets/arr6.png",
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
