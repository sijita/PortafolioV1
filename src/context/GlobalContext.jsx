import React, { useState, createContext } from "react";

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [translated, setTranslated] = useState(false);

  const handleTranslate = () => {
    setTranslated(!translated);
  };

  const data = { translated, handleTranslate };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export { ContextProvider };
export default GlobalContext;
