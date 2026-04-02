import Logo from "../assets/images/hearthstone-logo.png";

export default function Header() {
  return (
    <header className="flex w-full justify-center border-b border-white/5 py-3">
      <div className="flex flex-col items-center text-center">
        <img src={Logo} alt="Hearthstone Logo" className="h-24 sm:h-28" />
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h1 className="font-belwe from-primary via-primary-soft to-accent bg-linear-to-r bg-clip-text text-[2.5rem] tracking-wide text-transparent drop-shadow-[0_4px_12px_rgba(96,165,250,0.3)] sm:text-5xl">
            Cards Manager
          </h1>
          <p className="text-muted text-sm tracking-wide italic sm:text-base">
            Gerencie suas cartas com facilidade
          </p>
        </div>
      </div>
    </header>
  );
}
