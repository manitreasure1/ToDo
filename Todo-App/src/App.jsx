import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import './App.css'
import MainPage from './components/main-page'
import SideNav from './components/side-nav'
import {Upcoming, Today, Calandar, Home, Settings} from './components/home'

function App() {


  return (
    <>
    <BrowserRouter> 
      <SideNav/>
      <div style={{ color: "#ff2a00"}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
          <Route path='/today' element={<Today/>}/>
          <Route path='/calandar' element={<Calandar/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
