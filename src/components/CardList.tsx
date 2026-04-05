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
      <section className="flex w-full flex-col gap-10 rounded-lg bg-stone-900 p-5">
        <h3 className="font-belwe text-primary text-center text-2xl">
          MINHAS CARTAS
        </h3>
        <div
          className={`grid w-full place-items-center gap-10 px-2 ${filteredCards.length === 0 ? "col-span-1" : "sm:grid-cols-3 lg:grid-cols-5"}`}
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
