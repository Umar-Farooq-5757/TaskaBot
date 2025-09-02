import "./App.css";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import ChatBox from "./components/ChatBox.jsx";
import Credits from "./pages/Credits.jsx";
import Community from "./pages/Community.jsx";
import About from "./components/About.jsx";
import { RiMenu2Fill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import "./assets/prism.css";

import { useAppContext } from "./context/AppContext.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const { isDark, setIsSidebarOpen, setIsAboutOpen, isAboutOpen, user } =
    useAppContext();
  return (
    <main
      className={`flex h-screen w-screen transition-all overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-[#221f22] to-[#000000] text-white"
          : "text-black bg-white"
      }`}
    >
      {user ? (
        <>
          <RiMenu2Fill
            onClick={() => setIsSidebarOpen(true)}
            className={`size-7 m-2 rounded-full md:hidden block cursor-pointer`}
          />

          <Sidebar />
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
          <FcAbout
            onClick={() => setIsAboutOpen(!isAboutOpen)}
            className=" size-7 fixed right-4 top-3 cursor-pointer"
          />
          <About />
        </>
      ) : (
        <div className={`${isDark?'bg-gradient-to-b from-[#221f22] to-[#000000]':'bg-white'} flex justify-center items-center min-h-screen min-w-screen`}>
          <Login/>
        </div>
      )}{" "}
    </main>
  );
}

export default App;
