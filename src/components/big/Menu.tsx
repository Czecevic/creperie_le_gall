import { useTranslation } from "react-i18next";
import { AllCrepes } from "../medium/AllCrepes";
import { AllStrongDrink } from "../medium/AllStrongDrink";

interface Boissons {
  id: number;
  name: string;
  desc?: string;
  price: number;
}

export const Menu = () => {
  const { t } = useTranslation();
  const confitures = [
    "Vanille",
    "Fraise",
    "Pistache",
    "Amandes grillée",
    "Citron",
    "Framboise",
  ];
  const sodas = t("boissons.soda", {
    returnObjects: true,
  }) as Boissons[];
  const digestifs = t("boissons.digestif", {
    returnObjects: true,
  }) as Boissons[];
  const bieres = t("boissons.bieres", {
    returnObjects: true,
  }) as Boissons[];
  const eau = t("boissons.eau", {
    returnObjects: true,
  }) as Boissons[];
  const boissons_chaudes = t("boissons.boissons_chaudes", {
    returnObjects: true,
  }) as Boissons[];
  return (
    <article
      id="menu"
      className="flex flex-col items-center py-6 sm:py-8 animate-[slide-up_0.6s_ease-out] [animation-fill-mode:backwards] [animation-delay:0.1s]"
    >
      <div className="bg-surface rounded-xl p-5 sm:p-8 border border-border w-full mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary tracking-wide mb-3">
          {t("menu.title")}
        </h2>
        <p className="text-white/70 max-w-[65ch] leading-relaxed">
          {t("description")}
        </p>
      </div>
      <AllCrepes />
      <div className="bg-surface w-full p-5 m-2 rounded-xl border-border">
        <h1 className="text-primary text-2xl my-2 font-semibold">
          Glaces & Sorbets Artisanaux
        </h1>
        <p className="text-primary font-semibold">À la boule 2,50 €</p>
        {confitures.map((confiture) => (
          <p>{confiture}</p>
        ))}
      </div>
      <h1 className="text-surface font-semibold text-4xl text-center mt-8 mb-4 w-full border-b-4 border-b-surface">
        Les Boissons Bretonnes{" "}
      </h1>
      <div className="flex w-full flex-col md:flex-row">
        <div className="bg-surface w-full md:w-1/3 p-5 m-2 rounded-xl border-border">
          <AllStrongDrink drinks={sodas} nameDrink={"Sodas"} />
        </div>
        <div className="bg-surface w-full md:w-1/3 p-5 m-2 rounded-xl border-border">
          <AllStrongDrink drinks={digestifs} nameDrink={"Digestifs"} />
        </div>
        <div className="bg-surface w-full md:w-1/3 p-5 m-2 rounded-xl border-border">
          <AllStrongDrink drinks={bieres} nameDrink={"Bières / Cides"} />
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row">
        <div className="bg-surface w-full md:w-1/2 p-5 m-2 rounded-xl border-border">
          <AllStrongDrink drinks={eau} nameDrink={"Eaux"} />
        </div>
        <div className="bg-surface w-full md:w-1/2 p-5 m-2 rounded-xl border-border">
          <AllStrongDrink
            drinks={boissons_chaudes}
            nameDrink={"Boissons Chaudes"}
          />
        </div>
      </div>
    </article>
  );
};
