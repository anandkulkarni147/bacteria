import React, { useState } from "react";
import { motion } from "framer-motion";
import bacteria from "../Images/bacteria.svg";
import "./background1.css";

const svgVariants = {};

function Background1() {
  const [posX, setPosX] = useState(100);

  const handleMovement = () => {
    for (var i = 100; i < 500; ++i) {
      setPosX(i);
    }
  };

  return (
    <div className="backteria">
      <motion.img
        initial={{
          x: 100,
          y: 200,
        }}
        src={bacteria}
        animate={{
          x: posX,
          y: 200,
        }}
        transition={{
          ease: "linear",
          // duration: 1,
          // repeat: Infinity,
        }}
        onAnimationComplete={() => {
          setPosX(posX + 10);
        }}
      />
    </div>
  );
}

export default Background1;
