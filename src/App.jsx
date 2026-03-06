
import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import TicketSection from './components/TicketSection'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'


function App() {
 
  const [inProgress , setInProgress] = useState (0)
    const [resolved , setResolved] = useState (0)

  return (
    <>
    <Navbar/>
       <Hero
        inProgress={inProgress}
        resolved={resolved}
        />
      <TicketSection
        setInProgress={setInProgress}
        setResolved={setResolved}
      />
            <ToastContainer />
           <Footer />
    </>
  )
}

export default App
