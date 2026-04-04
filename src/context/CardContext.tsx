/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { CardClass, CardType } from "../types/Card";

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

interface CardContextType {
  cards: Card[];
  cardId: number | null;
  addCard: (card: Omit<Card, "id">) => void;
  updateCard: (id: number, updated: Partial<Card>) => void;
  deleteCard: (id: number) => void;
  getCardById: (id: number) => Card | undefined;
  handleCardId: (id: number | null) => void;
}

const CardContext = createContext<CardContextType | null>(null);

export function CardProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardId, setCardId] = useState<number | null>(null);
  const currentId = useRef(0);

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

  return (
    <CardContext.Provider
      value={{
        cards,
        cardId,
        addCard,
        updateCard,
        deleteCard,
        getCardById,
        handleCardId,
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
