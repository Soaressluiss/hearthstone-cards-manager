import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Home from "./Home";

export default function Onboading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen w-full">
      <AnimatePresence mode="wait">
        {isLoading ? <Loading /> : <Home />}
      </AnimatePresence>
    </main>
  );
}
