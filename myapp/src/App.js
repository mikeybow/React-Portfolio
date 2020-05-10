import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Footer />
     </Router>

    </div>
  );
}

export default App;
