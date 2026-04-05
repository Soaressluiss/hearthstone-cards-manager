import { useRef, useState } from "react";
import CardItem from "./CardItem";
import CreateCard from "./CreateCard";
import CardForm from "./CardForm";
import { useCards } from "../context/CardContext";
import { Plus } from "lucide-react";
import { motion, AnimatePresence, useInView } from "motion/react";

export default function CardList() {
  const [openModal, setOpen] = useState(false);
  const { filteredCards } = useCards();
  const refCreate = useRef(null);
  const isInView = useInView(refCreate);
  const showButton = !isInView;

  const handleOpenModal = (isOpen: boolean) => setOpen(isOpen);

  return (
    <>
      <CardForm openModal={openModal} handleOpenModal={handleOpenModal} />
      <section className="border-primary/40 relative flex w-full flex-col gap-5 rounded-lg border bg-stone-900 p-5 md:gap-10">
        <h3 className="font-belwe text-primary text-center text-lg md:text-xl">
          MINHAS CARTAS
        </h3>

        <div
          className={`grid w-full place-items-center gap-8 px-2 md:gap-10 ${
            filteredCards.length === 0
              ? "col-span-1"
              : "min-[34.375rem]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          }`}
        >
          <div ref={refCreate}>
            <CreateCard handleOpenModal={handleOpenModal} />
          </div>

          {filteredCards.map((card) => (
            <CardItem
              key={card.id}
              card={card}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </div>

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
