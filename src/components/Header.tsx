import Logo from "../assets/images/hearthstone-logo.png";

export default function Header() {
  return (
    <header className="flex w-full justify-center border-b border-white/5 sm:py-3">
      <div className="flex flex-col items-center text-center">
        <img src={Logo} alt="Hearthstone Logo" className="h-15 sm:h-18" />
        <div className="flex flex-col items-center gap-0.5 text-center sm:gap-1.5">
          <h1 className="font-belwe from-primary via-primary-soft to-accent bg-linear-to-r bg-clip-text text-xl tracking-wide text-transparent drop-shadow-[0_4px_12px_rgba(96,165,250,0.3)] sm:text-2xl">
            Cards Manager
          </h1>
          <p className="text-muted text-xs tracking-wide italic sm:text-[1rem]">
            Gerencie suas cartas com facilidade
          </p>
        </div>
      </div>
    </header>
  );
}
