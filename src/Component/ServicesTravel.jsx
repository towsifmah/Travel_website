import React from 'react'
import { MdFlight } from "react-icons/md";
import { FaHotel, FaUmbrellaBeach, FaConciergeBell } from "react-icons/fa";
const service = [
  {
    icon: <MdFlight />,
    title: "Fight Booking",
    description:
      "we provide eady and quick fight booking service to make your travel hassle-free.",
  },
  {
    icon: <FaHotel />,
    title: "Hotel Booking",
    description:
      "Book hotels at the best prices with our exclusive deals and discounts.",
  },
  {
    icon: <FaUmbrellaBeach />,
    title: "Beach Tours",
    description:
      "Enjoy relaxing beach tours with all-inclusive packages and guided tours",
  },
  {
    icon: <FaConciergeBell />,
    title: "Concierge Services",
    description:
      "Get personalized concierge services for a seamless travel experience.",
  },
];
const ServicesTravel = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container">
        <h3 className="text-5xl font-bold font-poppins text-center mb-8">
          Popular Services
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {service.map((icon, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center justify-center cursor-pointer transform transition duration-300 hover:scale-110"
            >
              <div className="mb-4 text-2xl text-blue-600">{icon.icon}</div>

              <h3 className="text-xl font-bold font-poppins mb-2">
                {icon.title}
              </h3>
              <p className="font-normal font-poppins text-center text-gray-600">
                {icon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesTravel