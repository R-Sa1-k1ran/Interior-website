import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Location from './components/Location';
import About from './components/About';
import Contact from './Components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [userEmail, setUserEmail] = useState(''); // Store user email

  // Handle login
  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  return (
    <Router>
      <CustomNavbar isLoggedIn={isLoggedIn}
          userEmail={userEmail}
          onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;