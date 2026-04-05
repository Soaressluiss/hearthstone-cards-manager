import { cardSchema } from "../schemas/CardSchema";
import { Search, Trash2 } from "lucide-react";
import { useCards } from "../context/CardContext";
import { toast } from "sonner";
import { motion } from "motion/react";

export default function CardFilter() {
  const { setFilters, filters } = useCards();

  const tipos = cardSchema.shape.tipo.options;
  const classes = cardSchema.shape.classe.options;

  const handleResetFields = () => {
    toast.info("Filtros limpos.");
    setFilters({ search: "", tipo: "", classe: "" });
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 10,
      }}
      className="bg-surface border-primary-soft/40 flex w-full flex-col gap-4 rounded-xl border p-2.5 sm:p-5"
    >
      <h3 className="font-belwe text-primary text-center sm:text-lg lg:text-start lg:text-xl">
        ENCONTRE SUAS CARTAS
      </h3>
      <div className="flex w-full flex-col items-end gap-2 sm:gap-4 lg:flex-row">
        <div className="flex w-full flex-1 flex-col gap-2">
          <label className="text-muted font-belwe text-xs tracking-wider sm:text-sm">
            Nome ou ID
          </label>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Guardião da floresta ou ID"
              value={filters.search}
              onChange={({ target }) => setFilters({ search: target.value })}
              className="bg-background/40 focus:border-primary font-belwe w-full rounded-lg border border-white/10 px-3 py-3 pl-8 text-base text-sm outline-none sm:pl-10 sm:text-[1rem]"
            />
            <Search className="text-primary-soft pointer-events-none absolute top-4 left-3 size-4" />
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col gap-2 lg:flex-row lg:gap-4">
          <div className="flex flex-1 gap-2 lg:gap-4">
            <div className="flex flex-1 flex-col gap-2">
              <label className="text-muted font-belwe text-xs tracking-wider sm:text-sm">
                Tipos
              </label>
              <select
                value={filters.tipo}
                onChange={({ target }) => setFilters({ tipo: target.value })}
                className={`bg-background/40 focus:border-primary font-belwe w-full rounded-lg border border-white/10 px-3 py-3 text-xs outline-none sm:text-[1rem] ${!filters.tipo ? "text-muted" : "text-base"} `}
              >
                <option className="bg-surface text-xs sm:text-[1rem]" value="">
                  Tipo da Carta
                </option>
                {tipos.map((t) => (
                  <option
                    key={t}
                    value={t}
                    className="bg-surface text-base text-xs sm:text-[1rem]"
                  >
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label className="text-muted font-belwe text-xs tracking-wider sm:text-sm">
                Classes
              </label>
              <select
                value={filters.classe}
                onChange={({ target }) => setFilters({ classe: target.value })}
                className={`bg-background/40 focus:border-primary font-belwe w-full rounded-lg border border-white/10 px-3 py-3 text-xs outline-none sm:text-[1rem] ${!filters.classe ? "text-muted" : "text-base"}`}
              >
                <option className="bg-surface text-xs sm:text-[1rem]" value="">
                  Classe da Carta
                </option>
                {classes.map((c) => (
                  <option
                    key={c}
                    value={c}
                    className="bg-surface text-base text-xs sm:text-[1rem]"
                  >
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={() => handleResetFields()}
            className="border-primary/50 text-primary/50 hover:bg-primary/10 flex h-full cursor-pointer items-center justify-center self-end rounded-md border px-3 py-2 transition sm:px-4 sm:py-3"
          >
            <Trash2 />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
