import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notFound/NotFound';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path='about'
          element={<About />}
        />
        <Route
          path='contact'
          element={<Contact />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <ScrollToTop />
    </Router>
  );
};

export default App;
