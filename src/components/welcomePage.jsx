import React from "react";
import { motion } from "framer-motion";
const WelcomePage = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center bg-green-500 w-screen h-screen"
      animate={{
        opacity: [0, 1],
        transition: {
          duration: 1,
        },
      }}
    >
      <motion.p
        className="uppercase text-3xl"
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.8,
        }}
      >
        Daraja 2.0
      </motion.p>
    </motion.div>
  );
};

export default WelcomePage;
