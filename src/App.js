import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Projects from './assets/pages/Projects';


function App() {
  return (
    <div className="App">
      <Router basename='/portfolio'>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        {/* <Route path='/my_links' element={<MyLinks/>}/> */}
      </Router>
    </div>
  );
}

export default App;