/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { CardClass, CardType } from "../types/Card";
import { mockCards } from "../mock/mockCards";

export interface Card {
  id: number;
  nome: string;
  tipo: CardType;
  classe: CardClass;
  ataque: number;
  defesa: number;
  descricao: string;
  mana: number;
}

interface Filters {
  search?: string;
  tipo?: string;
  classe?: string;
}
interface CardContextType {
  cardId: number | null;
  addCard: (card: Omit<Card, "id">) => void;
  updateCard: (id: number, updated: Partial<Card>) => void;
  deleteCard: (id: number) => void;
  getCardById: (id: number) => Card | undefined;
  handleCardId: (id: number | null) => void;
  filteredCards: Card[];
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const CardContext = createContext<CardContextType | null>(null);

export function CardProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Card[]>(() => {
    try {
      const stored = localStorage.getItem("cards");
      return stored ? JSON.parse(stored) : mockCards;
    } catch {
      return mockCards;
    }
  });
  const [cardId, setCardId] = useState<number | null>(null);
  const currentId = useRef(mockCards.length);
  const [filters, setFiltersState] = useState({
    search: "",
    tipo: "",

    classe: "",
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  function setFilters(newFilters: Filters) {
    setFiltersState((prev) => ({
      ...prev,
      ...newFilters,
    }));
  }

  function generateId() {
    currentId.current += 1;
    return currentId.current;
  }

  function addCard(card: Omit<Card, "id">) {
    const newCard: Card = {
      ...card,
      id: generateId(),
    };

    setCards((prev) => [...prev, newCard]);
  }

  function updateCard(id: number, updated: Partial<Card>) {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, ...updated } : card)),
    );
  }

  function deleteCard(id: number) {
    setCards((prev) => prev.filter((card) => card.id !== id));
  }

  function getCardById(id: number) {
    return cards.find((card) => card.id === id);
  }

  function handleCardId(id: number | null) {
    setCardId(id);
  }

  const filteredCards = cards.filter((item) => {
    const search = filters.search.toLowerCase();
    const matchNome = item.nome.toLowerCase().includes(search);
    const matchID = !!+search && item.id === +search;
    const matchNomeAndID = matchNome || matchID;
    const matchTipo = !filters.tipo || item.tipo === filters.tipo;
    const matchClasse = !filters.classe || item.classe === filters.classe;

    return matchNomeAndID && matchTipo && matchClasse;
  });

  return (
    <CardContext.Provider
      value={{
        cardId,
        addCard,
        updateCard,
        deleteCard,
        getCardById,
        handleCardId,
        setFilters,
        filters,
        filteredCards,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export function useCards() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("useCards deve ser usado dentro de CardProvider");
  }

  return context;
}
