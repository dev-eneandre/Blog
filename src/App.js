import './App.css';
import Home from './Components/Pages/Home';
import Menu from './Components/Menu';

import { BrowserRouter as Router, Routes, Route, Outlet, useParams } from "react-router-dom";
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import MyStories from './Components/Pages/MyStories';
import Fashion from './Components/Categories/Fashion';
import Beauty from './Components/Categories/Beauty';
import Places from './Components/Categories/Places';
import Lifestyle  from  './Components/Categories/Lifestyle';
import Decor from './Components/Categories/Decor';
import Press from './Components/Categories/Press';
import SelectedStory from './Components/SelectedStory';
import ErrorPage from './Components/ErrorPage';
import SearchedOutValue from './Components/SearchedOutValue';


function App() {

  return (
    <Router>
        <Menu />
 
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="stories" exact element={<MyStories />} />

              <Route path="/categories/fashion" element={<Fashion />} />
              <Route path="/categories/beauty" element={<Beauty />} />
              <Route path="/categories/places" element={<Places />} />
              <Route path="/categories/lifestyle" element={<Lifestyle />} />
              <Route path="/categories/decor" element={<Decor />} />
              <Route path="/categories/press" element={<Press />} />
             

             {/* searches based on title.... */}
            <Route path="/stories/:title" element={<SelectedStory />} />
            
            {/* Our area of focus  */}
            <Route path="/search/:searchkey" element={<SearchedOutValue />} />
          
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes> 
    </Router>
  );
}

export default App;
