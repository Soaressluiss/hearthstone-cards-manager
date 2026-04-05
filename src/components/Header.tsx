import Logo from "../assets/images/hearthstone-logo.png";
import { motion, type Variants } from "motion/react";
export default function Header() {
  const headline: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <header className="flex w-full justify-center border-b border-white/5 sm:py-3">
      <div className="flex flex-col items-center text-center">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeIn" },
          }}
          src={Logo}
          alt="Hearthstone Logo"
          className="h-15 sm:h-18"
        />
        <div className="flex flex-col items-center gap-0.5 text-center sm:gap-1.5">
          <div className="overflow-hidden py-2">
            <motion.h1
              initial="initial"
              animate="animate"
              variants={headline}
              className="font-belwe from-primary via-primary-soft to-accent bg-linear-to-r bg-clip-text text-xl tracking-wide text-transparent drop-shadow-[0_4px_12px_rgba(96,165,250,0.3)] sm:text-2xl"
            >
              Cards Manager
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-muted text-xs tracking-wide italic sm:text-[1rem]"
          >
            Gerencie suas cartas com facilidade
          </motion.p>
        </div>
      </div>
    </header>
  );
}
