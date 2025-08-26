import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const value = {
    isDark,
    setIsDark,
    isSidebarOpen,
    setIsSidebarOpen,
    isAboutOpen,
    setIsAboutOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
