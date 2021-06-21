import './Styling/App.css'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// import AboutUs from './Components/AboutUs.js'
// import OurSponsor from './Components/OurSponsor.js'
import Home from './Components/Home.js'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
            
        <Switch>
          {/* <Route path='/about-us' component={About} /> */}
          {/* <Route path='/our-sponsor' component={Sponsor} /> */}
          <Route path='/' component={() => <Home />} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
