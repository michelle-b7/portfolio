import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import {Home, Projects} from './pages'

const App = () => {
  return(
    <main className="bg-slate-300/20">
      <Router basename="/portfolio">
        <Navbar/>
        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
            </Routes>
          
      </Router>


    </main>
    
  )
}

export default App