import './App.css';
import Categories from './Components/Categories';
import Home from './Components/Home';
import Menu from './Components/Menu';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      
        <Menu />
        <Categories />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes> 
    </Router>
  );
}

export default App;
