/* eslint-disable react-hooks/incompatible-library */
import { useForm } from "react-hook-form";
import { cardSchema, type CardFormData } from "../schemas/CardSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardClass, CardType } from "../types/Card";

export default function CardForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
    mode: "onChange",
  });

  const tipo = watch("tipo");
  const classe = watch("classe");

  const onSubmit = async (data: CardFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newCard = {
      id: Date.now(),
      ...data,
    };
    console.log(newCard);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-surface flex w-1/2 flex-col gap-2 rounded-xl border border-white/5 p-5 pb-8 shadow-md"
    >
      <h2 className="font-belwe text-primary text-center text-3xl">
        Cadastrar carta
      </h2>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="nome"
          className="text-muted font-sans text-sm tracking-wider"
        >
          Nome
        </label>
        <input
          id="nome"
          {...register("nome")}
          placeholder="Nome da carta"
          className="bg-background focus:border-primary rounded-lg border border-white/10 px-3 py-3 font-sans text-base outline-none"
        />
        <p className="text-xs text-red-400">{errors.nome?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="descricao"
          className="text-muted font-sans text-sm tracking-wider"
        >
          Descrição
        </label>
        <textarea
          id="descricao"
          {...register("descricao")}
          placeholder="A descrição da sua carta"
          className="bg-background focus:border-primary max-h-50 min-h-30 rounded-lg border border-white/10 px-3 py-3 font-sans text-base outline-none"
        />
        <p className="text-xs text-red-400">{errors.descricao?.message}</p>
      </div>

      <div className="flex gap-3">
        <div className="flex w-1/2 flex-col gap-2">
          <label className="text-muted font-sans text-sm tracking-wider">
            Ataque
          </label>
          <input
            type="number"
            {...register("ataque", { valueAsNumber: true })}
            className="bg-background focus:border-primary rounded-lg border border-white/10 px-3 py-3 font-sans text-base outline-none"
          />
          <p className="text-xs text-red-400">{errors.ataque?.message}</p>
        </div>

        <div className="flex w-1/2 flex-col gap-2">
          <label className="text-muted tracking-widre font-sans text-sm">
            Defesa
          </label>
          <input
            type="number"
            {...register("defesa", { valueAsNumber: true })}
            className="bg-background focus:border-primary rounded-lg border border-white/10 px-3 py-3 font-sans text-base outline-none"
          />
          <p className="text-xs text-red-400">{errors.defesa?.message}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-muted tracking-widre font-sans text-sm">
          Tipo
        </label>
        <select
          {...register("tipo")}
          className={`bg-background focus:border-primary rounded-lg border border-white/10 px-3 py-3 font-sans text-base outline-none ${!tipo ? "text-muted" : "text-base"} `}
        >
          <option value="">Selecione seu tipo</option>
          {Object.values(CardType).map((tipo) => (
            <option key={tipo} value={tipo} className="text-base">
              {tipo}
            </option>
          ))}
        </select>
        <p className="text-xs text-red-400">{errors.tipo?.message}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-muted tracking-widre font-sans text-sm">
          Classe
        </label>
        <select
          {...register("classe")}
          className={`bg-background focus:border-primary rounded-lg border border-white/10 px-3 py-3 font-sans text-base outline-none ${!classe ? "text-muted" : "text-base"} `}
        >
          <option value="">Selecione sua classe</option>
          {Object.values(CardClass).map((classe) => (
            <option key={classe} value={classe} className="text-base">
              {classe}
            </option>
          ))}
        </select>
        <p className="text-xs text-red-400">{errors.classe?.message}</p>
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={`bg-primary text-contrast disabled:bg-primary-soft/50 hover:bg-primary-soft mt-2 rounded-md py-2 font-semibold transition ${isSubmitting ? "cursor-progress" : "cursor-pointer disabled:cursor-not-allowed"}`}
      >
        {isSubmitting ? "Salvando carta..." : "Salvar carta"}
      </button>
    </form>
  );
}
