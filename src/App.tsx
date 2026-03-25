import "./App.css";
import { Menu } from "./components/big/Menu";
import { NavBar } from "./components/medium/NavBar";
import { Contact } from "./components/big/Contact";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const imageCount = 6;
const imageUrls = Array.from(
  { length: imageCount },
  (_, i) => new URL(`./assets/image_${i}.jpeg`, import.meta.url).href,
);

function App() {
  const [infoDays, setInfoDays] = useState(false);
  const [indexNumb, setIndexNumb] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const switcher = setInterval(() => {
      setInfoDays((prev) => !prev);
    }, 2000);
    return () => clearInterval(switcher);
  }, []);

  useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  useEffect(() => {
    const switchPicture = setInterval(() => {
      setIndexNumb((prev) => (prev + 1) % imageCount);
    }, 5000);
    return () => clearInterval(switchPicture);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 min-h-screen">
      <NavBar />

      <div className="w-full rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4),0_10px_25px_-5px_rgba(0,0,0,0.35)] border border-border mb-10 sm:mb-12 relative aspect-[16/9]">
        {imageUrls.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Crêperie ${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              i === indexNumb ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          />
        ))}
      </div>

      <section className="py-6 sm:py-8 animate-[slide-up_0.6s_ease-out] [animation-fill-mode:backwards] [animation-delay:0.15s]">
        <div className="bg-surface rounded-xl p-6 sm:p-8 border border-border min-h-14">
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-primary tracking-wide mb-4">
            {t("hours.title")}
          </h1>
          <div className="min-h-14 relative">
            {infoDays ? (
              <div key="week" className="animate-[change-in_0.45s_ease-out]">
                <h2 className="text-lg font-semibold text-primary mb-1">
                  {t("hours.weekdays")}
                </h2>
                <p className="text-white/90">{t("hours.weekdays_hours")}</p>
              </div>
            ) : (
              <div key="sunday" className="animate-[change-in_0.45s_ease-out]">
                <h2 className="text-lg font-semibold text-primary mb-1">
                  {t("hours.sunday")}
                </h2>
                <p className="text-white/90">{t("hours.sunday_hours")}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Menu />

      <div className="animate-[slide-up_0.6s_ease-out] [animation-fill-mode:backwards] [animation-delay:0.05s]">
        <Contact />
      </div>
    </div>
  );
}

export default App;
