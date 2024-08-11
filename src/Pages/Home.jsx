import React from "react";
import PopularDestinations from "../Component/PopularDestinations";
import ServicesTravel from "../Component/ServicesTravel";
import Client from "../Component/Client";

const Home = () => {
  return (
    <>
      <div className="bg-Travelimg relative h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins text-[#fff] mb-4">
            Explore the world with Us
          </h1>
          <p className="text-lg md:text-2xl font-semibold font-poppins text-white mb-8">
            Discover amizing places at exclusive deals
          </p>
          <button
            className="border text-white px-6 py-2 rounded-full text-lg md:text-xl font-normal font-poppins hover:bg-blue-500
        transform transition duration-300 hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
      <PopularDestinations />
      <ServicesTravel/>
      <Client />
    </>
  );
};

export default Home;
