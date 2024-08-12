import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-Travelimg relative  bg-cover bg-center h-96">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins text-[#fff] mb-4">
            About
          </h1>
        </div>
      </div>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center">
            <img
              className="rounded-lg shadow-md w-full h-auto transform transition duration-300 hover:scale-110"
              src="https://i.ibb.co/BL3NRkq/travelsphoto.png"
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold font-poppins mb-4">
                Who We Are
              </h3>
              <p className="text-gray-700 font-poppins font-medium mb-4">
                We are a possionate travel agency committed to providing the
                best travel experiences for our clients. Our team of dedicated
                professionals works tirelessly to ensure your trips are seamless
                and unforgettable.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold font-poppins mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 font-poppins font-medium">
                Our mission is to create amazing travel experiences that inspire
                and enrich the lives of our client. We believe in personalized
                service,attention to detail,and providing exceptional value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
