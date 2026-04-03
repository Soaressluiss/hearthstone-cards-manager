import CardFilter from "./components/CardFilters";
import CardList from "./components/CardList";
import Header from "./components/Header";

function App() {
  return (
    <main className="bg-background flex h-full min-h-screen w-full justify-center">
      <section className="debug min-h-screen w-full max-w-7xl px-4 py-6">
        <Header />
        <div className="mt-10 flex w-full flex-col gap-6">
          <CardFilter />
          <CardList />
        </div>
      </section>
    </main>
  );
}

export default App;
