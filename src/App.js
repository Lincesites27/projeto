import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Contact from './components/Pages/Contact';
import NewProject from './components/Pages/NewProject';

function App() {
  return (
    
   <Router>
    <Routes>

    <Route exact path='/' element={<Home />}/>
    <Route exact path='/company' element={<Company />}/>
    <Route exact path='/contact' element={<Contact />}/>
    <Route exact path='/newproject' element={<NewProject />}/>


    </Routes>
   </Router>


  );
}

export default App;
