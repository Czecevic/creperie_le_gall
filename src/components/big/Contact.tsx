import { useTranslation } from "react-i18next";
import { LiText } from "../small/LiText";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <article className="py-6 sm:py-8" id="contact">
      <div className="bg-surface rounded-xl p-6 sm:p-8 border border-border">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary tracking-wide mb-4">
          {t("contact.title")}
        </h2>
        <p className="mb-4 max-w-[65ch]">{t("contact.description")}</p>
        <a
          className="block w-full max-w-80 m-auto mb-2 text-2xl p-1.5 border-2 text-center rounded-xl"
          href="https://widget.thefork.com/fr/fa86536b-7d92-4c9e-bd19-bfaca8588ec5?step=date&date"
        >
          {t("contact.reservation")}
        </a>
        <ul className="mb-4 space-y-2">
          <LiText name={t("contact.phone")} information="+33 1 42 92 00 25" />
          <LiText
            name={t("contact.address")}
            information="8 Rue de Hanovre, 75002 Paris"
          />
        </ul>
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=8%20rue%20d'hanovre,%20paris+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
        <p className="max-w-[65ch] mt-5 text-xl">{t("contact.closing")}</p>
      </div>
    </article>
  );
};
