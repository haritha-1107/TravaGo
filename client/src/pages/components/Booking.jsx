import destination from "../../assets/images/destination.png";
import payment from "../../assets/images/payment.png";
import vehicle from "../../assets/images/vehicle.png";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";
const Booking = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // check on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const steps = [
    {
      id: 1,
      image: destination,
      title: "Choose Destination",
      description:
        "Built Wicket longer admire do barton vanity itself do in it. ",
    },
    {
      id: 2,
      image: payment,
      title: "Make Payment",
      description: "just make your payment and enjoy the trip",
    },
    {
      id: 3,
      image: vehicle,
      title: "Reach AirPort on Selected Date",
      description: "Reach airport on selected date and enjoy your trip with us",
    },
  ];
  return (
    <div className="my-16">
      {/* Animated Heading */}
      <motion.h4
        className="text-[#DF6951] text-center md:text-start text-lg font-semibold md:text-xl md:font-bold"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Easy and Fast
      </motion.h4>

      <motion.h1
        className="text-[#181E4B] text-center md:text-start text-5xl font-bold my-4 capitalize"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Book your next trip in <br /> 3 easy steps
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left Steps Section */}
        <div className="w-full md:w-1/2 px-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex gap-8 my-2 py-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={step.image} alt="" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#5E6282] text-lg font-semibold md:text-xl md:font-bold">
                  {step.title}
                </h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Image Card */}
        
      </div>

      {/* logo section */}
      
    </div>
  );
};
export default Booking;
