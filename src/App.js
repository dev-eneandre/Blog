import './App.css';
import Categories from './Components/Categories';
import Home from './Components/Home';
import Menu from './Components/Menu';

import { BrowserRouter as Router, Routes, Route, Outlet, useParams } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import MyStories from './Components/MyStories';
import Fashion from './Components/Fashion';
import Beauty from './Components/Beauty';
import Places from './Components/Places';
import Lifestyle  from  './Components/Lifestyle';
import Decor from './Components/Decor';
import Press from './Components/Press';
import SelectedStory from './Components/SelectedStory';
import ErrorPage from './Components/ErrorPage';


function App() {


  return (
    <Router>
        <Menu />
        <Categories />
 
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="stories" exact element={<MyStories />}>
              <Route path="fashion" element={<Fashion />} />
              <Route path="beauty" element={<Beauty />} />
              <Route path="places" element={<Places />} />
              <Route path="lifestyle" element={<Lifestyle />} />
              <Route path="decor" element={<Decor />} />
              <Route path="press" element={<Press />} />
            </Route>
            <Route path="/stories/:title" element={<SelectedStory />} />
            
            {/* Our area of focus  */}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes> 
    </Router>
  );
}

export default App;
