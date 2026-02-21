import { useState } from "react";
import { crepeSale, crepeSucre } from "../mock";
import { SwitchButton } from "./SwitchButton";

export const Menu = () => {
  const [onSwitch, setOnSwitch] = useState(false);
  return (
    <article className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Notre Menu</h2>
      <p className="mb-4 text-justify">
        Découvrez nos délicieuses crêpes sucrées et salées, préparées avec des
        ingrédients frais et de qualité. Tout est fait maison, de la pâte à
        crêpe aux garnitures, pour vous offrir une expérience authentique et
        savoureuse.
      </p>
      <div className={`flex flex-col items-center gap-4 p-4 rounded-lg`}>
        <SwitchButton onSwitch={onSwitch} setOnSwitch={setOnSwitch} />
        <ul className="flex flex-col items-center gap-4">
          {onSwitch
            ? crepeSucre.map((crepe) => (
                <li
                  key={crepe.name}
                  className="flex justify-between items-center border-2 p-0 rounded-full"
                >
                  <img
                    className="w-1/5 border-2 rounded-full"
                    src={crepe.image}
                    alt={`img_crepe_${crepe.name}`}
                  />
                  <h2 className="font-semibold">{crepe.name}</h2>
                  <p className="mr-2">{crepe.price} $</p>
                </li>
              ))
            : crepeSale.map((crepe) => (
                <li
                  key={crepe.name}
                  className="flex justify-between items-center border-2 py-0 rounded-full"
                >
                  <img
                    className="w-1/5 border-2 rounded-full"
                    src={crepe.image}
                    alt={`img_crepe_${crepe.name}`}
                  />
                  <h2 className="font-semibold">{crepe.name}</h2>
                  <p className="mr-2">{crepe.price} $</p>
                </li>
              ))}
        </ul>
      </div>
    </article>
  );
};
