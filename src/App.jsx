import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Therapists from './components/Therapists'
import HowItWorks from './components/HowItWorks'
import Membership from './components/Membership'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import FAQ from './components/FAQ'
import Business from './components/Business'
import About from './components/About'
import Contact from './components/Contact'
import Jobs from './components/Jobs'
import Login from './components/Login'


const App = () => {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <Routes>
        <Route path='/' element={
          <>
            <Hero />
            <Therapists />
            <HowItWorks />
            <Membership />
            <Footer />
          </>
        } />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/business' element={<Business />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/jobs' element={<Jobs />} />
      </Routes>
    </div>
  )
}

export default App
