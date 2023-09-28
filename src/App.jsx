
import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Tech from './components/Tech'
import ReactGA from "react-ga4";
import { useEffect } from 'react'

ReactGA.initialize("G-YWG5K42MDF");

function App() {
  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page:window.location.pathname + window.location.search ,
      title: "Home page",
    });
  }, []);

  return (
    <>
    <NavBar/>
    <AboutMe/>
    <Tech/>
    <ContactMe/>
    <Footer/>
    </>
  )
  }
    

export default App
