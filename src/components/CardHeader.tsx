import {
  Wand2,
  Leaf,
  Skull,
  Cross,
  Target,
  HelpCircle,
  type LucideIcon,
  Sword,
  Sparkles,
} from "lucide-react";
import type { CardFormData } from "../schemas/CardSchema";
import HeathStoneIcon from "../assets/images/hearthstone-icon.svg";

type IconConfig = {
  icon: LucideIcon;
  bg: string;
};

const tipoMap: Record<string, IconConfig> = {
  magia: { icon: Sparkles, bg: "bg-purple-700" },
  criatura: { icon: Sword, bg: "bg-indigo-700" },
};

const classeMap: Record<string, IconConfig> = {
  mago: { icon: Wand2, bg: "bg-blue-700" },
  paladino: { icon: Cross, bg: "bg-yellow-600" },
  cacador: { icon: Target, bg: "bg-amber-700" },
  druida: { icon: Leaf, bg: "bg-emerald-700" },
  qualquer: { icon: Skull, bg: "bg-gray-600" },
};

export default function CardHeader({ card }: { card: CardFormData }) {
  const tipo = card.tipo.toLowerCase();
  const classe = card.classe?.toLowerCase();

  const tipoBg = tipoMap[tipo].bg;
  const classeBg = classeMap[classe].bg;
  const TipoIcon = tipoMap[tipo].icon || HelpCircle;
  const ClasseIcon = classeMap[classe].icon || HelpCircle;

  return (
    <div className="border-primary/50 bg-background/10 rounded-xl border">
      <div className="flex h-24 w-full flex-col p-1">
        <div className="flex justify-center gap-2 text-[0.625rem] font-semibold">
          <span
            className={`bg flex items-center gap-1 rounded px-2 py-0.5 text-base shadow ${tipoBg}`}
          >
            <TipoIcon size={12} />
            {card.tipo}
          </span>

          <span
            className={`flex items-center gap-1 rounded bg-blue-600/80 px-2 py-0.5 text-base shadow ${classeBg}`}
          >
            <ClasseIcon size={12} />
            {card.classe}
          </span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="size-10">
            <img src={HeathStoneIcon} alt="HeathStone icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
