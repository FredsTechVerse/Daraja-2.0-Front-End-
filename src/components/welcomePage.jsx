import React from "react";
import { motion } from "framer-motion";
const WelcomePage = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center bg-green-500 w-screen h-screen"
      animate={{
        scale: [null, 0.9, 1.5],
        opacity: [1.0, 0.9, 0],
        borderRadius: ["0", "30px", "0px"],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <motion.p
        className="uppercase text-3xl "
        animate={{
          rotate: [0, 360],
          scale: [1.0, 1.5],
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        Daraja 2.0
      </motion.p>
    </motion.div>
  );
};

export default WelcomePage;
