// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
// import About from './Components/About/About'
// import Services from './Components/Services/Services'
// import Project from './Components/Project/Project'
// import Certificate from './Components/Certificate/Certificate'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About/>
      <Project/>
      <Certificate/>
      <Services/> */}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
