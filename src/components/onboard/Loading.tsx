import Logo from "../../assets/images/hearthstone-logo.png";

import { motion } from "motion/react";
export default function Loading() {
  return (
    <div className="bg-background grid min-h-screen w-full place-items-center">
      <motion.img
        layoutId="logo"
        src={Logo}
        className="sm:h-a h-20"
        alt="Hearthstone Logo animate"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
