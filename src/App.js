import logo from './logo.svg';
import './App.css';
import Title from './components/Title/title.js'
import Banner from './components/Banner/banner.js'
import Projects from './components/Projects/projects.js'

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Projects></Projects>
    </div>
  );
}

export default App;
