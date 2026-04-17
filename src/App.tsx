
import './App.css'
import Business from './components/Business'
import ClientsSection from './components/Clients'
import Demo from './components/Demo'

import Hero from './components/Hero'
import KnowHow from './components/KnowHow'
import Maecenas from './components/Maecenas'
import Marketing from './components/Marketing'
import Footer from './layout/Footer'
import NavBar from './layout/NavBar'

function App() {


  return (
    <>
    <div className='app'>
     <NavBar/>
     <Hero/>
     <ClientsSection/>
     <Business/>
     <KnowHow/>
     <Maecenas/>
     <Marketing/>
     <Demo/>
     <Footer/>
     </div>
    </>
  )
}

export default App
