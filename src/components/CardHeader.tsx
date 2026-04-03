import {
  Shield,
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

const tipoIconMap: Record<string, LucideIcon> = {
  magia: Sparkles,
  criatura: Sword,
};

const classeIconMap: Record<string, LucideIcon> = {
  guerreiro: Shield,
  mago: Wand2,
  paladino: Cross,
  cacador: Target,
  druida: Leaf,
  qualquer: Skull,
};

export default function CardHeader({ card }: { card: CardFormData }) {
  const TipoIcon = tipoIconMap[card.tipo?.toLowerCase()] || HelpCircle;
  const ClasseIcon = classeIconMap[card.classe?.toLowerCase()] || HelpCircle;

  return (
    <div className="border-primary rounded-xl border">
      <div className="flex h-24 w-full flex-col p-1">
        <div className="flex justify-center gap-2 text-[0.625rem] font-semibold">
          <span className="flex items-center gap-1 rounded bg-purple-600/80 px-2 py-0.5 text-white shadow">
            <TipoIcon size={12} />
            {card.tipo}
          </span>

          <span className="flex items-center gap-1 rounded bg-blue-600/80 px-2 py-0.5 text-white shadow">
            <ClasseIcon size={12} />
            {card.classe}
          </span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="size-10">
            <svg viewBox="0 1 48 48" fill="none" part="icon">
              <title id="hearthstone_title">Hearthstone</title>
              <path
                fill="#593810"
                fill-rule="evenodd"
                d="M24 12.17c7 0 12.8 5.8 12.8 12.8S31 37.77 24 37.77s-12.8-5.8-12.8-12.8S17 12.17 24 12.17"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#FF9C00"
                fill-rule="evenodd"
                d="m37.4 30.17 8.6-5.2-8.6-5.2c-.4-1.2-1-2-1.6-3l2-5.4-5.4 2c-1-.6-2-1.2-3-1.6L24 2.97l-5.2 8.6c-1.2.4-2 1-3 1.6l-5.4-2 2 5.4c-.6 1-1.2 2-1.6 3L2 24.97l8.6 5.2c.4 1.2 1 2 1.6 3l-2 5.399 5.4-2c1 .6 2 1.2 3 1.6l5.4 8.8 5.2-8.6c1.2-.4 2-1 3-1.6l5.4 2-2-5.4c.8-1 1.4-2.2 1.8-3.2M24 36.77c-6.6 0-11.8-5.2-11.8-11.8s5.4-11.8 11.8-11.8c6.6 0 11.8 5.4 11.8 11.8 0 6.6-5.2 11.8-11.8 11.8"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#39CCFF"
                fill-rule="evenodd"
                d="M32 24.569c0 .2-.2.4-.4.6-.2.4.2.4.2.6 0 .4 0 1-.2 1.4 0 .4-.2.8-.4 1.2s-.4.6-.6 1c0 .4-.2.8-.4 1.2-.4.4-.6.6-1 .8s-.4.6-.8 1l-1.2.6c-.4.2-.8.2-1.2.4s-1 .2-1.4.4c-.4 0-1 0-1.4.2-.4 0-.8.4-1.2.4s-.8-.4-1.2-.4-.8-.2-1.2-.4-.8-.2-1.2-.4c-.4 0-.8-.4-1-.8 0-.4 1.2-.4 1.6-.6.6-.4 1.4-.2 2-.6.2-.2.4-.4.6-.4.2-.2.4-.2.8-.2.4-.2 1-.2 1.6-.4l1.2-.6c.4-.2.6-.4 1-.8.4-.2.6-.6 1-1l.6-1.2c.4-.4.8-.4.6-.8s-.2-1-.2-1.4c0-1 .2-2-.4-2.8-.4-.4-.6-.8-.8-1.2-.2-.2-.2-.4-.2-.6 0-.4.2-.4-.2-.4-.2 0-.4.2-.6.2h-.8c-.6 0-1.2 0-1.6.2s-1 .4-1.2.6c-.4.2-.6.6-1 .8-.2 0-.4.2-.6.4 0 .2-.2.4-.2.6-.2.4-.2 1 0 1.6.2.8.8 2 1.8 1.6s-.8-1.8 0-2.2c.4-.2 1-.2 1.4 0 .6 0 1 .2 1.4.4s.2.8.4 1.2c.4.4.4.8.4 1.4 0 1-.6 1.8-1.4 2.2-.4.2-1 0-1.4.2s-.8.4-1.2.4c-.2 0-.4-.2-.6-.2h-.6c-.4 0-.6-.6-1-.6 0-.4-.6-.8-.8-1-.4-.4-.6-.8-1-1.2s-.6-.8-.8-1.2 0-.8-.2-1.2c0-.2-.2-.4-.2-.6v-.8c0-.4-.2-.8-.2-1.2s0-.4.4-.4c.2-.2.4-.4.6-.4-.2-.8 0-1 .4-1.4 0-.2.2-.4.4-.6s.2-.4.4-.4c.4-.4.8-.6 1.2-1 .8-.6 1.6-1.2 2.8-.8.6.2.8-.2 1.2-.2s.8.4 1.2.4c.4.2.8.2 1.2.4s1 .4 1.4.6c1 .4 1.2 1.2 1.8 1.8.4.6 1.6 1.4 1.2 2.2 0 .2 0 .6.2.8.2.4.2.6.2 1 .2.6.8 1.2.8 1.6"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
