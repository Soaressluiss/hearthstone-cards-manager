import { useState } from "react";
import { mockCards } from "../mock/mockCards";
import type { CardFormData } from "../schemas/CardSchema";
import CardItem from "./CardItem";
import CreateCard from "./CreateCard";
import CardForm from "./CardForm";

export default function CardList() {
  const [openModal, setOpen] = useState(false);
  const handleOpenModal = (isOpen: boolean) => setOpen(isOpen);

  const onEdit = (card: CardFormData) => {
    console.log(card);
  };
  const onDelete = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <CardForm openModal={openModal} handleOpenModal={handleOpenModal} />
      <section className="flex w-full flex-col gap-10 rounded-lg bg-stone-900 p-5">
        <h3 className="font-belwe text-primary text-center text-4xl">
          Minhas cartas
        </h3>

        {mockCards.length === 0 ? (
          <p className="text-muted text-center">Nenhuma carta adicionada</p>
        ) : (
          <div className="grid w-full grid-cols-2 place-items-center gap-10 px-2 sm:grid-cols-3 lg:grid-cols-5">
            <CreateCard handleOpenModal={handleOpenModal} />
            {mockCards.map((card) => (
              <CardItem
                key={card.id}
                card={card}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
