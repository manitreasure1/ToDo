import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import SideNav from './components/side-nav'
import Home from './components/home'
import { Settings } from './components/settings'
import { Upcoming } from './components/upcoming'
import { Today } from './components/today'
import { Calandar } from './components/calandar'

import styles from './main.module.css'

function App() {


  return (
    <>
    <BrowserRouter future={{
      v7_startTransition:true,
      v7_relativeSplatPath:true
    }}> 
    <div className={styles.hero}>
    <SideNav/>
      <div className={styles.main}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
          <Route path='/today' element={<Today/>}/>
          <Route path='/calandar' element={<Calandar/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </div>
    </div>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
