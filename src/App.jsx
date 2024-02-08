import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import ContactU from './components/ContactUs/ContactU'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Testymonials from './components/Testymonials/Testymonials'
function App() {
  return <>

    <div className="container">

      <Home />
      <AboutUs />
      <Services />
      <Testymonials />
      <ContactU />
      <Footer />

    </div>


  </>
}

export default App
