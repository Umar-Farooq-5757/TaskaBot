import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );
    const [isMinimized, setIsMinimized] = useState(false);
  


  const value = {  isDark, setIsDark, isMinimized, setIsMinimized };


  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
