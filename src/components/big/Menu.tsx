import { useState } from "react";
import { crepeSale, crepeSucre } from "../../mock";
import { SwitchButton } from "../medium/SwitchButton";

export const Menu = () => {
  const [onSwitch, setOnSwitch] = useState(false);
  return (
    <article
      id="menu"
      className="flex flex-col items-center py-6 sm:py-8 animate-[slide-up_0.6s_ease-out] [animation-fill-mode:backwards] [animation-delay:0.1s]"
    >
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary tracking-wide mb-4">
        Notre Menu
      </h2>
      <p className="mb-6 text-muted text-center max-w-[65ch]">
        Découvrez nos délicieuses crêpes sucrées et salées, préparées avec des
        ingrédients frais et de qualité. Tout est fait maison, de la pâte à
        crêpe aux garnitures, pour vous offrir une expérience authentique et
        savoureuse.
      </p>
      <div className="flex flex-col items-center gap-6 p-4 sm:p-6 w-full max-w-2xl">
        <SwitchButton onSwitch={onSwitch} setOnSwitch={setOnSwitch} />
        <ul className="flex flex-row flex-wrap items-stretch justify-evenly gap-4 w-full">
          {(onSwitch ? crepeSucre : crepeSale).map((crepe, index) => (
            <li
              key={crepe.name}
              className="w-1/3 flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-300 animate-[slide-in-left_0.4s_ease-out] [animation-fill-mode:backwards]"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-border shrink-0"
                src={crepe.image}
                alt={crepe.name}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-primary truncate">
                  {crepe.name}
                </h3>
              </div>
              <p className="font-semibold text-primary shrink-0">
                {crepe.price} €
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
