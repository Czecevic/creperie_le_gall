import { LanguageChoice } from "../small/LanguageChoice";
import { LinkText } from "../small/LinkText";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm animate-[fade-in_0.5s_ease-out]">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 py-6">
        <a
          href="#"
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-primary tracking-[0.15em] [text-shadow:0_2px_12px_rgba(201,168,58,0.35)] hover:text-accent transition-colors duration-200"
        >
          Crêperie Le Gall
        </a>
        <ul className="flex gap-4 sm:gap-6">
          <LinkText link="#menu" linkName="Menu" />
          <LinkText link="#contact" linkName="Contact" />
          <LanguageChoice />
        </ul>
      </div>
    </nav>
  );
};
