import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [user, setUser] = useState("umar farooq");
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );


  const value = { user, isDark, setIsDark };


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
