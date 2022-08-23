import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Contact from './components/Pages/Contact';
import NewProject from './components/Pages/NewProject';

function App() {
  return (
    
   <Router>
    <div></div>

   <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    
    
    
    <Route exact path='/company'>
      <Company />
    </Route>
    

    
    <Route exact path='/contact'>
      <Contact />
    </Route>
    

    
    <Route exact path='/newproject'>
      <NewProject />
    </Route>
   </Switch>


   </Router>


  );
}

export default App;
