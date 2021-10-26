import React, { useState, createContext } from "react";
import Header from "./header/Header";
import Main from "./main/Main";

import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themes } from "../themes";
import { useLanguageHook } from "../hooks/languageHook";
import languagesSet from "../languages";

export const LanguageContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useLanguageHook("russian");
  // ===========
  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <LanguageContext.Provider
        value={{
          lang,
          setLang,
          set: languagesSet[lang],
          list: languagesSet.list,
        }}>
        <ThemeProvider theme={themes[theme]}>
          <GlobalStyles />
          <Header changeTheme={changeTheme} />
          <Main />
        </ThemeProvider>
      </LanguageContext.Provider>
    </>
  );
};

export default App;
