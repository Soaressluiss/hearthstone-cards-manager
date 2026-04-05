import { cardSchema } from "../schemas/CardSchema";
import { Search, Trash2 } from "lucide-react";
import { useCards } from "../context/CardContext";

export default function CardFilter() {
  const { setFilters, filters } = useCards();

  const tipos = cardSchema.shape.tipo.options;
  const classes = cardSchema.shape.classe.options;

  return (
    <section className="bg-surface border-primary-soft/40 flex w-full flex-col gap-4 rounded-xl border p-5">
      <h3 className="font-belwe text-primary text-xl">ENCONSTRE SUAS CARTAS</h3>
      <div className="flex w-full items-end gap-4">
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-muted font-belwe text-sm tracking-wider">
            Nome ou ID
          </label>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Guardião da floresta ou ID"
              value={filters.search}
              onChange={({ target }) => setFilters({ search: target.value })}
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
              value={filters.tipo}
              onChange={({ target }) => setFilters({ tipo: target.value })}
              className={`bg-background/40 focus:border-primary font-belwe w-full rounded-lg border border-white/10 px-3 py-3 text-base outline-none`}
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
              value={filters.classe}
              onChange={({ target }) => setFilters({ classe: target.value })}
              className={`bg-background/40 focus:border-primary font-belwe w-full rounded-lg border border-white/10 px-3 py-3 text-base outline-none`}
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
        <button
          onClick={() => setFilters({ search: "", tipo: "", classe: "" })}
          className="border-primary/50 text-primary/50 hover:bg-primary/10 flex h-full cursor-pointer items-center justify-center rounded-md border px-4 py-3 transition"
        >
          <Trash2 />
        </button>
      </div>
    </section>
  );
}
