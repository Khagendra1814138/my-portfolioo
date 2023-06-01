
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';

import ProjectEndangeredSpecies from './Pages/Project/projectEndangeredSpecies';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import TopButton from './Components/TopButton';

// import ProjectDisplay from './Pages/Project/ProjectDisplay'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <TopButton/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects/>} />
          {/* <Route path= '/projects/:id' element={<ProjectDisplay/>} /> */}
          <Route path='/projectEndangeredSpecies' element={<ProjectEndangeredSpecies/>} />
          <Route path='/experience' element={<Experience/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
