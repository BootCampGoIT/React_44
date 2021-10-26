import React, { useContext } from "react";
import { LanguageContext } from "../App";

const LanguageSwitcher = () => {
  const { list, setLang, lang } = useContext(LanguageContext);

  const switchLang = (e) => setLang(e.target.value);
  return (
    <select onChange={switchLang} value={lang}>
      {list.map((item) => (
        <option key={item.name} value={item.name}>
          {item.nativeName}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
