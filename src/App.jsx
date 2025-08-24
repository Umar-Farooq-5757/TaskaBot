import './App.css'

import { Routes,Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import ChatBox from './components/ChatBox.jsx'
import Credits from './pages/Credits.jsx'
import Community from './pages/Community.jsx'

import { useAppContext } from './context/AppContext.jsx'

function App() {

  return (
   <div className='flex h-screen w-screen'>
   <Sidebar/>
   <Routes>
    <Route path='/' element={<ChatBox/>}/>
    <Route path='/credits' element={<Credits/>}/>
    <Route path='/community' element={<Community/>}/>
   </Routes>
   </div>
  )
}

export default App
