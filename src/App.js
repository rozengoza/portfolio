import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Academics from './pages/Academics'
import ProjectsDisplay from './pages/ProjectsDisplay';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element ={<Home/>}/>
          <Route path = "/projects" element ={<Projects/>}/>
          <Route path = "/project/:id" element ={<ProjectsDisplay/>}/>
          <Route path = "/experience" element ={<Experience/>}/>
          <Route path = "/academics" element ={<Academics/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
