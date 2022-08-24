import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Contact from './components/Pages/Contact';
import NewProject from './components/Pages/NewProject';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'




function App() {
  return (
    
   <Router>
     <Navbar />    
    
    <Container>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/company' element={<Company />}/>
      <Route exact path='/contact' element={<Contact />}/>
      <Route exact path='/newproject' element={<NewProject />}/>
    </Routes>
    </Container>
    
    <footer className='min-height'>
    <Footer />
    </footer>
   </Router>
  


  );
}

export default App;
