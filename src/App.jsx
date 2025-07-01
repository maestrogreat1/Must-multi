import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Title subTitle='OUR SERVICES' title='what we offer'/>
        <Services />
         <Title subTitle="Let us talk about" title="Getting you that loan" />
         <Contact />
        
      </div>
      
    </div>
  )
}

export default App
