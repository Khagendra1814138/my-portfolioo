
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';

import ProjectEndangeredSpecies from './Pages/Project/projectEndangeredSpecies';
import ProjectEcommerce from './Pages/Project/projectEcommerce';
import ProjectKelang from './Pages/Project/projectKelang';

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
          <Route path='/experience' element={<Experience/>} />
          <Route path='/projects' element={<Projects/>} />
          {/* <Route path= '/projects/:id' element={<ProjectDisplay/>} /> */}
        
          <Route path='/projectEndangeredSpecies' element={<ProjectEndangeredSpecies/>} />
          <Route path='/projectEcommerce' element={<ProjectEcommerce/>} />
          <Route path='/projectKelang' element={<ProjectKelang/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
