import { LiText } from "../small/LiText";

export const Contact = () => {
  return (
    <article className="py-6 sm:py-8" id="contact">
      <div className="bg-surface rounded-xl p-6 sm:p-8 border border-border">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary tracking-wide mb-4">
          Contactez-nous
        </h2>
        <p className="text-muted mb-4 max-w-[65ch]">
          Pour toute réservation ou demande d'information, n'hésitez pas à nous
          contacter
        </p>
        <ul className="mb-4 space-y-2">
          <LiText name="Téléphone" information="+33 1 23 45 67 89" />
          <LiText name="Adresse" information="3 Rue de Hanovre, 75002 Paris" />
        </ul>
        <iframe
          title="Google Maps - 3 Rue de Hanovre, 75002 Paris"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999231556401!2d2.336443315674229!3d48.86867297928862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e296e8f6b2f%3A0x8c8f8f8f8f8f8f!2s17%20Rue%20de%20Choiseul%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1611234567890!5m2!1sfr!2sfr"
          width="100%"
          height="500"
          className="w-full h-[500px] rounded-lg border-0 mb-4"
          allowFullScreen
          loading="lazy"
        />
        <p className="text-muted max-w-[65ch]">
          Nous sommes impatients de vous accueillir dans notre crêperie et de
          vous faire découvrir nos délicieuses crêpes !
        </p>
      </div>
    </article>
  );
};
