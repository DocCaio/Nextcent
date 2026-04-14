
import './App.css'
import Business from './components/Business'
import ClientsSection from './components/Clients'

import Hero from './components/Hero'
import KnowHow from './components/KnowHow'
import Maecenas from './components/Maecenas'
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
     </div>
    </>
  )
}

export default App
