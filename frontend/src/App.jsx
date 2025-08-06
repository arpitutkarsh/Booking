import React  from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Doctors from './pages/Doctors.jsx'
import Login from './pages/Login.jsx'
import Contact from './pages/Contact.jsx'
import MyProfile from './pages/MyProfile.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import Appointments from './pages/Appointments.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
 
  return (
    
    <>

      <div className='mx-3 sm:mx-[10%]'></div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/doctors' element = {<Doctors />} />
        <Route path='/doctors/:speciality' element = {<Doctors />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/my-profile' element = {<MyProfile />} />
        <Route path='/my-appointments' element = {<MyAppointments />} />
        <Route path='/appointment/:docId' element = {<Appointments />} />
      </Routes>
      <Footer />
      
      
    </>
  )
}

export default App
