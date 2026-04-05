import { useRef, useState } from "react";
import CardItem from "./CardItem";
import CreateCardButton from "./CreateCardButton";
import CardForm from "./CardForm";
import { useCards } from "../context/CardContext";
import { Plus } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
} from "motion/react";

export default function CardList() {
  const [openModal, setOpen] = useState(false);
  const { filteredCards } = useCards();
  const refCreate = useRef(null);
  const isInView = useInView(refCreate);
  const showButton = !isInView;

  const handleOpenModal = (isOpen: boolean) => setOpen(isOpen);

  const container: Variants = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.1,
      },
    },
    exit: {},
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    exit: { opacity: 0, y: 40 },
  };
  return (
    <>
      <CardForm openModal={openModal} handleOpenModal={handleOpenModal} />
      <section className="border-primary/40 relative flex w-full flex-col gap-5 rounded-lg border bg-stone-900 p-5 md:gap-10">
        <h3 className="font-belwe text-primary text-center text-lg md:text-xl">
          MINHAS CARTAS
        </h3>

        <motion.div
          initial="hidden"
          animate="animate"
          variants={container}
          exit="exit"
          className={`grid w-full place-items-center gap-8 px-2 md:gap-10 ${
            filteredCards.length === 0
              ? "col-span-1"
              : "min-[34.375rem]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: "easeIn" },
            }}
            ref={refCreate}
          >
            <CreateCardButton handleOpenModal={handleOpenModal} />
          </motion.div>

          {filteredCards.map((card) => (
            <motion.div key={card.id} variants={item}>
              <CardItem card={card} handleOpenModal={handleOpenModal} />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {showButton && (
            <motion.button
              onClick={() => handleOpenModal(true)}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.25 }}
              className="border-primary/50 fixed right-10 bottom-12 z-50 grid size-12 place-items-center rounded-full border active:scale-95 lg:hidden"
            >
              <Plus size={26} className="text-primary/50" />
            </motion.button>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
