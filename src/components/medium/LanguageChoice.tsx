import { useTranslation } from "react-i18next";

const languages = [
  { code: "fr", label: "🇫🇷" },
  { code: "en", label: "🇬🇧" },
  { code: "es", label: "🇪🇸" },
  { code: "zh", label: "🇨🇳" },
  { code: "ko", label: "🇰🇷" },
  { code: "ja", label: "🇯🇵" },
];

// i18n.changeLanguage(e.target.value)
export const LanguageChoice = () => {
  const { i18n } = useTranslation();
  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="font-semibold px-2 py-1 text-xl cursor-pointer hover:border-primary/40 transition-all duration-200 focus:outline-none"
    >
      {languages.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
};
