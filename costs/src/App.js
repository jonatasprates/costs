import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProjetct from './components/pages/NewProjetct';

import Container from './components/layout/Container';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path="/company" element={<Company/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/newproject" element={<NewProjetct/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
