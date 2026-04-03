import { Plus } from "lucide-react";
import { mockCards } from "../mock/mockCards";
import type { CardFormData } from "../schemas/CardSchema";
import CardItem from "./CardItem";
import { motion } from "motion/react";

export default function CardList() {
  const onEdit = (card: CardFormData) => {
    console.log(card);
  };
  const onDelete = (id: number) => {
    console.log(id);
  };

  return (
    <section className="flex w-full flex-col gap-10 rounded-lg bg-stone-900 p-5">
      <h3 className="font-belwe text-primary text-center text-4xl">
        Minhas cartas
      </h3>

      {mockCards.length === 0 ? (
        <p className="text-muted text-center">Nenhuma carta adicionada</p>
      ) : (
        <div className="grid w-full grid-cols-2 place-items-center gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <motion.button
            disabled={mockCards.length === 30}
            whileHover={{ scale: 0.99 }}
            className="border-muted/70 relative grid h-80 w-55 cursor-pointer flex-col place-items-center gap-3 rounded-2xl border border-dashed bg-linear-to-b from-stone-800 to-stone-900 p-2 shadow-2xl disabled:cursor-not-allowed disabled:opacity-50"
          >
            <div className="flex flex-col items-center gap-5">
              <div className="border-muted/70 flex size-16 items-center justify-center rounded-full border border-dashed">
                <Plus size={30} className="text-muted/50" />
              </div>
              <span className="text-muted/50 font-sans font-semibold tracking-wide">
                NOVA CARTA
              </span>
            </div>
          </motion.button>
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
  );
}
