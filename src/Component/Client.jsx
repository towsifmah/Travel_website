import React from "react";

const testimonial = [
  {
    name: "Mahmud Hasan",
    image: "https://i.ibb.co/pXqsGN4/mahmud.png",
    text: "He is a Best Programmer in the world.He create this website for travels agency.",
    location: "Dhaka, Bangladesh",
  },
  {
    name: "Jone Smith",
    image: "https://i.ibb.co/fkQqWGq/jone.png",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi cumque maxime unde dolor magnam, aliquid et",
    location: "London UK",
  },
  {
    name: "Smith Johonson",
    image: "https://i.ibb.co/L9G8qdC/smith.png",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi cumque maxime unde dolor magnam, aliquid et",
    location: "Sydney Australia",
  },
];
const Client = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container">
        <h3 className="text-5xl font-bold font-poppins text-center mb-8">
          What Our Clients Say
        </h3>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonial.map((testimonials, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center justify-center cursor-pointer transform transition duration-300 hover:scale-110"
            >
              <img
                src={testimonials.image}
                alt=""
                className="w-24 h-24 rounded-full mx-auto object-cover mb-3"
              />

              <h3 className="text-xl font-bold font-poppins mb-2">
                {testimonials.name}
              </h3>
              <p className=" text-md font-normal font-poppins text-center mb-2 text-gray-600">
                {testimonials.location}
              </p>
              <p className=" text-sm italic text-center text-gray-600">
                {testimonials.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
