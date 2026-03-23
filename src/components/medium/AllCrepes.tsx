import { useTranslation } from "react-i18next";
import { SwitchButton } from "./SwitchButton";
import { useState } from "react";

export const AllCrepes = () => {
  const { t } = useTranslation();
  const [onSwitch, setOnSwitch] = useState(false);
  const [seeDesc, setSeeDesc] = useState<number | null>(null);

  const seeMenu = (id: number) => {
    setSeeDesc((prev) => (prev === id ? null : id));
  };

  const crepes = t(onSwitch ? "crepes.sucre" : "crepes.sale", {
    returnObjects: true,
  }) as { id: number; name: string; description: string; price: number }[];

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <SwitchButton onSwitch={onSwitch} setOnSwitch={setOnSwitch} />

      <ul className="grid grid-cols-2 gap-3 w-full">
        {crepes.map((crepe, index) => (
          <button
            key={crepe.id}
            style={{ animationDelay: `${index * 0.06}s` }}
            onClick={() => seeMenu(crepe.id)}
            aria-expanded={seeDesc === crepe.id}
            className="flex items-start justify-between gap-3 p-4 rounded-2xl text-left bg-surface border border-border hover:border-primary/40 hover:bg-surface/80 transition-all duration-300 animate-[slide-in-left_0.4s_ease-out] [animation-fill-mode:backwards]"
          >
            <div className="flex-1 min-w-0">
              <span className="font-display font-semibold text-primary text-sm sm:text-base block truncate">
                {crepe.name}
              </span>
              {seeDesc === crepe.id && (
                <p className="text-sm text-white/70 mt-1 leading-snug">
                  {crepe.description}
                </p>
              )}
            </div>
            <span className="font-semibold text-primary/80 text-sm shrink-0 pt-0.5">
              {crepe.price} €
            </span>
          </button>
        ))}
      </ul>
    </div>
  );
};
