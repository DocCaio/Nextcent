
import './App.css'
import Business from './components/Business'
import ClientsSection from './components/Clients'

import Hero from './components/Hero'
import NavBar from './layout/NavBar'

function App() {


  return (
    <>
    <div className='app'>
     <NavBar/>
     <Hero/>
     <ClientsSection/>
     <Business/>
     </div>
    </>
  )
}

export default App
