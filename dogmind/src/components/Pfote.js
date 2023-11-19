import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "react-use-gesture";
import PfoteIcon from "../assets/images/PfoteIcon.png"; // Replace with the actual path to your paw icon

const Pfote = () => {
  const { y } = useScroll();

  return (
    <div style={{ height: "50px" }}>
      <motion.img
        src={PfoteIcon}
        alt="Pfote Icon"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
        animate={{ x: y }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </div>
  );
};

export default Pfote;
