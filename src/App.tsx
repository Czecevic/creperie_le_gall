import "./App.css";
import { Menu } from "./components/big/Menu";
import crepe from "./assets/crepe.jpg";
import { NavBar } from "./components/medium/NavBar";
import { Contact } from "./components/big/Contact";
import { useEffect, useState } from "react";

function App() {
  const [infoDays, setInfoDays] = useState(false);

  useEffect(() => {
    const switcher = setInterval(() => {
      setInfoDays((prev) => !prev);
    }, 2000);
    return () => clearInterval(switcher);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 min-h-screen">
      <NavBar />

      {/* Hero */}
      <div className="w-full rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4),0_10px_25px_-5px_rgba(0,0,0,0.35)] border border-border mb-10 sm:mb-12 animate-[fade-in_0.8s_ease-out] [animation-fill-mode:backwards]">
        <img
          src={crepe}
          alt="Crêperie Le Gall"
          className="w-full h-auto object-cover max-h-112"
        />
      </div>

      {/* Horaires */}
      <section className="py-6 sm:py-8 animate-[slide-up_0.6s_ease-out] [animation-fill-mode:backwards] [animation-delay:0.15s]">
        <div className="bg-surface rounded-xl p-6 sm:p-8 border border-border min-h-14">
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-primary tracking-wide mb-4">
            Ouvert 7 jours / 7
          </h1>
          <div className="min-h-14 relative">
            {infoDays ? (
              <div key="week" className="animate-[change-in_0.45s_ease-out]">
                <h2 className="text-lg font-semibold text-primary-dim mb-1">
                  Du Lundi au Samedi
                </h2>
                <p className="text-white/90">De 11h45 à 22h30</p>
              </div>
            ) : (
              <div key="sunday" className="animate-[change-in_0.45s_ease-out]">
                <h2 className="text-lg font-semibold text-primary-dim mb-1">
                  Le Dimanche
                </h2>
                <p className="text-white/90">De 11h45 à 22h</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div
        className="h-px bg-linear-to-r from-transparent via-border to-transparent my-10 sm:my-12"
        aria-hidden
      />

      <Menu />

      {/* Séparateur */}
      <div
        className="h-px bg-linear-to-r from-transparent via-border to-transparent my-10 sm:my-12"
        aria-hidden
      />

      {/* Contact */}
      <div className="animate-[slide-up_0.6s_ease-out] [animation-fill-mode:backwards] [animation-delay:0.05s]">
        <Contact />
      </div>
    </div>
  );
}

export default App;
