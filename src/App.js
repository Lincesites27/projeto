import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Contact from './components/Pages/Contact';
import NewProject from './components/Pages/NewProject';
import Container from './components/layout/Container';

function App() {
  return (
    
   <Router>

    <div>
    <Link to="/">Home</Link>
    <Link to="/contact">Contato</Link>
    <Link to="/company">Empresa</Link>
    <Link to="/newproject">Novo Projeto</Link>
    </div>
    
    <Container>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/company' element={<Company />}/>
      <Route exact path='/contact' element={<Contact />}/>
      <Route exact path='/newproject' element={<NewProject />}/>
    </Routes>
    </Container>
    
   </Router>


  );
}

export default App;
