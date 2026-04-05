import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Sword, Shield, Pencil, Trash2 } from "lucide-react";
import CardHeader from "./CardHeader";
import { useCards, type Card } from "../context/CardContext";
import { toast } from "sonner";
import { useState } from "react";

interface Props {
  card: Card;
  handleOpenModal: (isOpen: boolean) => void;
}

export default function CardItem({ card, handleOpenModal }: Props) {
  const { handleCardId, deleteCard } = useCards();
  const [open, setOpen] = useState(false);

  const onDelete = () => {
    deleteCard(card.id);
    toast.success("Carta Excluida.");
  };

  const onEdit = () => {
    handleCardId(card.id);
    handleOpenModal(true);
  };

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
    exit: { opacity: 0, y: 20 },
  };
  return (
    <motion.div whileHover={{ scale: 0.99 }} className="relative h-80 w-55">
      <div
        onClick={() => setOpen(!open)}
        title={card.nome}
        className="border-primary/40 flex h-full cursor-pointer flex-col gap-2 rounded-2xl border bg-linear-to-b from-stone-800 to-stone-900 p-2 shadow-2xl"
      >
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
            <span className="font-belwe text-2xl font-bold">{card.ataque}</span>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-red-700/20 px-3 py-1 text-red-400 shadow">
            <Shield size={18} className="drop-shadow" />
            <span className="font-belwe text-2xl font-bold">{card.defesa}</span>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={container}
            className="bg-surface/40 pointer-events-auto absolute bottom-0 left-0 flex h-16 w-full items-center justify-around gap-4"
          >
            <button
              title="Editar"
              onClick={() => onEdit()}
              className="cursor-pointer rounded-lg bg-linear-to-r from-blue-700 to-blue-500 px-5 py-2 text-base transition-transform duration-300 hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-90"
            >
              <Pencil size={16} />
            </button>
            <button
              title="Excluir"
              onClick={() => onDelete()}
              className="cursor-pointer rounded-lg bg-linear-to-r from-red-700 to-red-500 px-5 py-2 text-base transition-transform duration-300 hover:scale-105 hover:brightness-110 active:scale-95 active:brightness-90"
            >
              <Trash2 size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
