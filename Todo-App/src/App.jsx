import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import './App.css'
import MainPage from './components/main-page'
import SideNav from './components/side-nav'
import {Upcoming, Today, Calandar, Home, Settings} from './components/home'
import styles from './main.module.css'

function App() {


  return (
    <>
    <BrowserRouter> 
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
