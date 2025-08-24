import "./App.css";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import ChatBox from "./components/ChatBox.jsx";
import Credits from "./pages/Credits.jsx";
import Community from "./pages/Community.jsx";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import { useAppContext } from "./context/AppContext.jsx";

function App() {
  const { isDark, isMinimized, setIsMinimized } = useAppContext();
  return (
    <main
      className={`flex h-screen w-screen transition-all ${
        isDark
          ? "bg-gradient-to-b from-[#221f22] to-[#000000] text-white"
          : "text-black bg-white"
      }`}
    >
      <div className="relative p-1 md:hidden block">
        <button
        onClick={()=>setIsMinimized(false)}
          className={`p-1 cursor-pointer rounded-full ${
            isDark ? "hover:bg-gray-800" : "hover:bg-gray-200"
          }`}
        >
          <HiOutlineMenuAlt1
            className="size-6 "
            onClick={() => setIsMinimized(false)}
          />
        </button>
      </div>
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
