import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-800 flex-column">
      <Header />
      <HeroSection />
      <AboutMe />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
