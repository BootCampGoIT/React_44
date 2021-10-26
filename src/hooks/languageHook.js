import { useState, useEffect } from "react";

export const useLanguageHook = (defaultLanguage = "english") => {
  const [language, setLanguage] = useState(
    JSON.parse(window.localStorage.getItem("language")) || defaultLanguage
  );
  useEffect(() => {
    window.localStorage.setItem("language", JSON.stringify(language));
  }, [language]);
  return [language, setLanguage];
};
