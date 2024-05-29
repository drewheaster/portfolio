import './App.css';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>
  );
}

export default App;
