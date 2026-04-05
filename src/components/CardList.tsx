import { useState } from "react";
import CardItem from "./CardItem";
import CreateCard from "./CreateCard";
import CardForm from "./CardForm";
import { useCards } from "../context/CardContext";

export default function CardList() {
  const { filteredCards } = useCards();
  const [openModal, setOpen] = useState(false);
  const handleOpenModal = (isOpen: boolean) => setOpen(isOpen);

  return (
    <>
      <CardForm openModal={openModal} handleOpenModal={handleOpenModal} />
      <section className="border-primary/40 relative flex w-full flex-col gap-5 rounded-lg border bg-stone-900 p-5 md:gap-10">
        <h3 className="font-belwe text-primary text-center text-lg md:text-xl">
          MINHAS CARTAS
        </h3>
        <div
          className={`grid w-full place-items-center gap-8 px-2 md:gap-10 ${filteredCards.length === 0 ? "col-span-1" : "min-[550px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}`}
        >
          <CreateCard handleOpenModal={handleOpenModal} />
          {filteredCards.map((card) => (
            <CardItem
              key={card.id}
              card={card}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </section>
    </>
  );
}
