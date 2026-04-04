import { motion } from "motion/react";
import { mockCards } from "../mock/mockCards";
import { Plus } from "lucide-react";
import { useCards } from "../context/CardContext";

interface CreateCardProps {
  handleOpenModal: (isOpen: boolean) => void;
}
export default function CreateCard({ handleOpenModal }: CreateCardProps) {
  const { handleCardId } = useCards();
  const onCreateCard = () => {
    handleCardId(null);
    handleOpenModal(true);
  };
  return (
    <motion.button
      onClick={() => onCreateCard()}
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
  );
}
