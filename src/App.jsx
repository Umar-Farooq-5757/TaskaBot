import "./App.css";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import ChatBox from "./components/ChatBox.jsx";
import Credits from "./pages/Credits.jsx";
import Community from "./pages/Community.jsx";

import { useAppContext } from "./context/AppContext.jsx";

function App() {
  const { isDark } = useAppContext();
  return (
    <main
      className={`flex h-screen w-screen transition-all ${
        isDark
          ? "bg-gradient-to-b from-[#221f22] to-[#000000] text-white"
          : "text-black bg-white"
      }`}
    >
      <Sidebar />
      <Routes>
        <Route path="/" element={<ChatBox />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </main>
  );
}

export default App;