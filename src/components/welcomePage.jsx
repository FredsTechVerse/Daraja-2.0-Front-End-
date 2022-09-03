import React from "react";
import { motion } from "framer-motion";
const WelcomePage = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center bg-green-500 w-screen h-screen"
      animate={{
        scale: [0.9, 1.5],
        opacity: [1.0, 0],
        borderRadius: ["30px", "0px"],
        transition: {},
      }}
    >
      <motion.p
        className="uppercase text-3xl"
        animate={{
          opacity: [1, 0],
        }}
      >
        Daraja 2.0
      </motion.p>
    </motion.div>
  );
};

export default WelcomePage;
