import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CardProvider } from "./context/CardContext.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardProvider>
      <App />
      <Toaster richColors />
    </CardProvider>
  </StrictMode>,
);
