import Header from "../Header";
import CardFilter from "../CardFilters";
import CardList from "../CardList";

export default function Home() {
  return (
    <main className="bg-background flex h-full min-h-screen w-full justify-center">
      <section className="min-h-screen w-full max-w-7xl px-4 py-6">
        <Header />
        <div className="mt-5 flex w-full flex-col gap-6">
          <CardFilter />
          <CardList />
        </div>
      </section>
    </main>
  );
}
