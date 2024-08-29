import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Landing from './views/Landing'
import NotFound from './views/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/404" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
