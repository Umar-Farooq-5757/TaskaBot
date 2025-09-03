import { createContext, useContext, useState } from "react";
import { dummyChats, dummyUserData } from "../assets/assets";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const [user, setUser] = useState(dummyUserData);
  const [chats, setChats] = useState(dummyChats);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState(selectedChat?.messages || []);

  const value = {
    isDark,
    setIsDark,
    isSidebarOpen,
    setIsSidebarOpen,
    isAboutOpen,
    setIsAboutOpen,
    selectedChat,
    setSelectedChat,
    chats,
    setChats,
    user,
    setUser,
    messages,
    setMessages,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};