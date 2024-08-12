import React from "react";
const destinations = [
  {
    image: "https://i.ibb.co/Dz98D34/arr1.png",
    title: "Paris , France",
    description:
      "The City of Light draws millions of visitors every year with its unforgettable ambiance",
  },
  {
    image: "https://i.ibb.co/b3pj1kn/arr2.png",
    title: "Bali, Indonsia",
    description:
      "Bali is living postcard, and Indonesian paradise that feels like a fantasty",
  },
  {
    image: "https://i.ibb.co/vqgJCSL/arr4.png",
    title: "New York, USA",
    description:
      "New York City is the largest city in the United States and home to many world-famous attrictions",
  },
  {
    image: "https://i.ibb.co/rtGsyBN/arr3.png",
    title: "Tokyo, Japan",
    description:
      "Tokyo offers a seemingly unlimited choice of emtertainment, shopping,Cultural attractions, and dining",
  },
  {
    image: "https://i.ibb.co/4Wg5Z54/arr5.png",
    title: "Uttar Pradesh, India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India",
  },
  {
    image: "https://i.ibb.co/MVkBpP2/arr6.png",
    title: "Dhaka, Bangladesh",
    description:
      "Brief. Jatiyo Sriti Shoudho (জাতীয় স্মৃতি সৌধ) or National Martyrs Memorial is the national monument of Bangladesh",
  },
];


const PopularDestinations = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container">
        <h3 className="text-5xl font-bold font-poppins text-center mb-8">
          Popular Destinatins
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={city.image}
                alt=""
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold font-poppins mb-2">
                  {city.title}
                </h3>
                <p className="font-normal font-poppins text-gray-600">
                  {city.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
