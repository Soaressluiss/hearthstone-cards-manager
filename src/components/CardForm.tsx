import { useForm } from "react-hook-form";
import {
  cardSchema,
  defaultValues,
  type CardFormData,
} from "../schemas/CardSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardClass, CardType } from "../types/Card";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "./ui/dialog";
import { useCards } from "../context/CardContext";
import { useEffect } from "react";

interface CardFormProps {
  openModal: boolean;
  handleOpenModal: (isOpen: boolean) => void;
}

function generateMana() {
  return Math.floor(Math.random() * 11);
}

export default function CardForm({
  openModal,
  handleOpenModal,
}: CardFormProps) {
  const { addCard, getCardById, cardId, updateCard } = useCards();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const selectedCard = cardId ? getCardById(cardId) : null;
  const isEditing = !!selectedCard;

  useEffect(() => {
    if (cardId && selectedCard) {
      reset(selectedCard);
    } else {
      reset(defaultValues);
    }
  }, [cardId, selectedCard, reset]);

  const onSubmit = async (formData: CardFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const baseCard = {
      mana: generateMana(),
      ...formData,
    };

    if (!isEditing) {
      addCard(baseCard);
    } else {
      updateCard(cardId!, {
        ...baseCard,
        mana: selectedCard?.mana ?? baseCard.mana,
      });
    }
    reset();
    handleOpenModal(false);
  };

  return (
    <Dialog open={openModal} onOpenChange={handleOpenModal}>
      <DialogContent
        aria-describedby={undefined}
        onInteractOutside={() => reset(defaultValues)}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-surface border-primary-soft/40 flex w-full flex-col gap-2 rounded-xl border p-5 pb-8"
        >
          <DialogTitle className="font-belwe text-primary text-center text-3xl">
            Adicionar carta
          </DialogTitle>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nome"
              className="text-muted font-belwe text-sm tracking-wider"
            >
              Nome da Carta
            </label>
            <input
              id="nome"
              {...register("nome")}
              placeholder="Guardião da Floresta"
              className="bg-background/40 focus:border-primary font-belwe rounded-lg border border-white/10 px-3 py-3 text-base outline-none"
            />
            <p className="text-xs text-red-400">{errors.nome?.message}</p>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="descricao"
              className="text-muted font-belwe text-sm tracking-wider"
            >
              Descrição
            </label>
            <textarea
              id="descricao"
              {...register("descricao")}
              placeholder="Protege a natureza e seus aliados com força ancestral."
              className="bg-background/40 focus:border-primary font-belwe max-h-50 min-h-30 rounded-lg border border-white/10 px-3 py-3 text-base outline-none"
            />
            <p className="text-xs text-red-400">{errors.descricao?.message}</p>
          </div>

          <div className="flex gap-3">
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-muted font-belwe text-sm tracking-wider">
                Ataque
              </label>
              <input
                type="number"
                {...register("ataque", { valueAsNumber: true })}
                className="bg-background/40 focus:border-primary font-belwe rounded-lg border border-white/10 px-3 py-3 text-base outline-none"
              />
              <p className="text-xs text-red-400">{errors.ataque?.message}</p>
            </div>

            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-muted tracking-widre font-belwe text-sm">
                Defesa
              </label>
              <input
                type="number"
                {...register("defesa", { valueAsNumber: true })}
                className="bg-background/40 focus:border-primary font-belwe rounded-lg border border-white/10 px-3 py-3 text-base outline-none"
              />
              <p className="text-xs text-red-400">{errors.defesa?.message}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-muted tracking-widre font-belwe text-sm">
              Tipo
            </label>
            <select
              {...register("tipo")}
              className={`bg-background/40 focus:border-primary font-belwe rounded-lg border border-white/10 px-3 py-3 text-base outline-none`}
            >
              <option className="bg-surface" value="">
                Selecione seu tipo
              </option>
              {Object.values(CardType).map((tipo) => (
                <option
                  key={tipo}
                  value={tipo}
                  className="bg-surface text-base"
                >
                  {tipo}
                </option>
              ))}
            </select>
            <p className="text-xs text-red-400">{errors.tipo?.message}</p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-muted tracking-widre font-belwe text-sm">
              Classe
            </label>
            <select
              {...register("classe")}
              className={`bg-background/40 focus:border-primary font-belwe rounded-lg border border-white/10 px-3 py-3 text-base outline-none`}
            >
              <option className="bg-surface" value="">
                Selecione sua classe
              </option>
              {Object.values(CardClass).map((classe) => (
                <option
                  key={classe}
                  value={classe}
                  className="bg-surface text-base"
                >
                  {classe}
                </option>
              ))}
            </select>
            <p className="text-xs text-red-400">{errors.classe?.message}</p>
          </div>

          <div className="mt-2 flex items-center justify-center gap-4 self-end">
            <DialogClose
              onClick={() => reset(defaultValues)}
              className="font-belwe text-muted h-full cursor-pointer px-4 py-2 hover:text-base"
            >
              Cancelar
            </DialogClose>
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`bg-primary font-belwe text-contrast disabled:bg-primary-soft/50 hover:bg-primary-soft h-full rounded-md px-4 py-2 font-semibold transition ${isSubmitting ? "cursor-progress" : "cursor-pointer disabled:cursor-not-allowed"}`}
            >
              {isSubmitting ? "Salvando carta..." : "Salvar carta"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
