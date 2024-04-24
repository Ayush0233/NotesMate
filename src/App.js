import './App.css';
import Header from './components/header';
import Home from './components/home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Courses from './components/pages/courses';
import About from './components/pages/about';
import Help from './components/pages/help';
import Bca from './components/pages/bca';
import Projects from './components/pages/projects';

function App() {
  return (
    <Router>
      <Header/>
     {/* ------------------ */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/help' element={<Help/>} />
        <Route path='/courses/bca' element={<Bca/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
