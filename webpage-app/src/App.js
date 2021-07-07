import './Styling/App.css'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Components/Home.js'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Switch>
            <Route path='/' component={() => <Home />} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
