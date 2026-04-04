import { motion } from "framer-motion";
import { Sword, Shield, Pencil, Trash2 } from "lucide-react";
import CardHeader from "./CardHeader";
import { useState } from "react";
import { useCards, type Card } from "../context/CardContext";

interface Props {
  card: Card;
  handleOpenModal: (isOpen: boolean) => void;
}

export default function CardItem({ card, handleOpenModal }: Props) {
  const [flipped, setFlipped] = useState(false);
  const { handleCardId, deleteCard } = useCards();

  const onDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteCard(card.id);
  };

  const onEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleCardId(card.id);
    handleOpenModal(true);
  };

  return (
    <div
      title={card.nome}
      style={{ perspective: 1000 }}
      onClick={() => setFlipped((prev) => !prev)}
      className="cursor-pointer"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        whileTap={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          width: "220px",
          height: "320px",
          position: "relative",
        }}
      >
        <div
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            inset: 0,
          }}
        >
          <div className="border-primary/40 flex h-full flex-col gap-2 rounded-2xl border bg-linear-to-b from-stone-800 to-stone-900 p-2 shadow-2xl">
            <div
              className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center bg-blue-600 text-2xl font-bold text-white"
              style={{
                clipPath:
                  "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
              }}
            >
              {card.mana}
            </div>
            <CardHeader card={card} />
            <h2 className="text-center font-bold wrap-break-word text-yellow-400">
              {card.nome}
            </h2>
            <div className="h-full min-h-10 overflow-y-auto rounded bg-stone-700 p-2 text-xs leading-5 wrap-break-word text-gray-200">
              {card.descricao}
            </div>
            <div className="mt-3 flex w-full justify-between rounded-lg border border-yellow-700/40 bg-linear-to-r from-stone-800 via-stone-900 to-stone-800 p-2 shadow-inner">
              <div className="flex items-center gap-2 rounded-md bg-orange-600/20 px-3 py-1 text-orange-400 shadow">
                <Sword size={18} className="drop-shadow" />
                <span className="font-belwe text-2xl font-bold">
                  {card.ataque}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-red-700/20 px-3 py-1 text-red-400 shadow">
                <Shield size={18} className="drop-shadow" />
                <span className="font-belwe text-2xl font-bold">
                  {card.defesa}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            inset: 0,
          }}
        >
          <div className="bg-surface flex h-full flex-col items-center justify-center gap-6 rounded-2xl border border-yellow-600 bg-linear-to-b shadow-2xl">
            <h3 className="font-belwe px-2 text-xl wrap-anywhere text-yellow-400">
              {card.nome}
            </h3>
            <div className="flex flex-col gap-4">
              <button
                onClick={(e) => onEdit(e)}
                className="font-belwe flex cursor-pointer items-center gap-2 rounded-lg bg-linear-to-r from-blue-700 to-blue-500 px-5 py-2 text-base shadow-lg transition-transform duration-200 hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-90"
              >
                <Pencil size={16} />
                Editar
              </button>
              <button
                onClick={(e) => onDelete(e)}
                className="font-belwe flex cursor-pointer items-center gap-2 rounded-lg bg-linear-to-r from-red-700 to-red-500 px-5 py-2 text-base shadow-lg transition-transform duration-200 hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-90"
              >
                <Trash2 size={16} />
                Excluir
              </button>
            </div>
            <p className="block font-sans text-xs tracking-wide text-gray-400 lg:hidden">
              Toque para voltar
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
