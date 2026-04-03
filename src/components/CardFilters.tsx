import { useState } from "react";
import { cardSchema } from "../schemas/CardSchema";
import { Search, Trash2 } from "lucide-react";

export default function CardFilter() {
  const [search, setSearch] = useState("");
  const [tipo, setTipo] = useState("");
  const [classe, setClasse] = useState("");

  const tipos: string[] = cardSchema.shape.tipo.options;
  const classes: string[] = cardSchema.shape.classe.options;
  function handleChange() {}

  return (
    <section className="bg-surface border-primary-soft/40 flex w-full flex-col gap-4 rounded-xl border p-5">
      <h3 className="font-belwe text-primary text-2xl">Encontre Suas Cartas</h3>
      <div className="flex w-full items-end gap-4">
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-muted font-belwe text-sm tracking-wider">
            Nome ou ID
          </label>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Guardião da floresta ou 4"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                handleChange();
              }}
              className="bg-background/40 focus:border-primary font-belwe w-full rounded-lg border border-white/10 px-3 py-3 pl-10 text-base outline-none"
            />
            <Search className="text-primary-soft pointer-events-none absolute top-4 left-3 size-4" />
          </div>
        </div>

        <div className="flex flex-1 gap-4">
          <div className="flex flex-1 flex-col gap-2">
            <label className="text-muted font-belwe text-sm tracking-wider">
              Tipos
            </label>
            <select
              onChange={(e) => {
                setTipo(e.target.value);
                handleChange();
              }}
              className={`bg-background/40 focus:border-primary font-belwe w-full rounded-lg border border-white/10 px-3 py-3 text-base outline-none ${tipo.length >= 1 ? "text-base" : "text-muted"}`}
            >
              <option value="">Tipo da Carta</option>
              {tipos.map((t) => (
                <option key={t} value={t} className="bg-surface text-base">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <label className="text-muted font-belwe text-sm tracking-wider">
              Classes
            </label>
            <select
              onChange={(e) => {
                setClasse(e.target.value);
                handleChange();
              }}
              className={`bg-background/40 focus:border-primary font-belwe w-full rounded-lg border border-white/10 px-3 py-3 text-base outline-none ${classe.length >= 1 ? "text-base" : "text-muted"}`}
            >
              <option value="">Classe da Carta</option>
              {classes.map((c) => (
                <option key={c} value={c} className="bg-surface text-base">
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="border-primary/50 text-primary/50 hover:bg-primary/10 flex h-full cursor-pointer items-center justify-center rounded-md border px-4 py-3 transition">
          <Trash2 />
        </button>
      </div>
    </section>
  );
}
