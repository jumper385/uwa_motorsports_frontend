import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/team'>Meet the Team</Link>
          <Link to='/car'>The Car</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'>Contact Us</Link>
        </nav>

        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/team'><Team /></Route>
          <Route path='/car'><Car /></Route>
          <Route path='/gallery'><Gallery /></Route>
          <Route path='/contact'><Contact /></Route>
        </Switch>

      </div>
    </Router>    
  );
}

const Home = () => {
  return(
    <h1>Home Page - UWA Motor Sports 2019</h1>
  )
}

const Team = () => {
  return(
    <h1>The Team</h1>
  )
}

const Car = () => {
  return(
    <h1>The Car</h1>
  )
}

const Gallery = () => {
  return(
    <h1>Gallery</h1>
  )
}

const Contact = () => {
  return(
    <h1>Contact Us</h1>
  )
}

export default App;
