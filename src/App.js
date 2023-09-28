import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Projects from './assets/pages/Projects';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          {/* <Route path='/my_links' element={<MyLinks/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
