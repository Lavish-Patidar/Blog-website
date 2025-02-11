// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./App.css"
import CreatePost from './pages/CreatePost/CreatePost';
import ListPosts from './pages/ListPost/ListPost';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    // Get initial theme from localStorage or default to false
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('darkMode', isDarkMode);
    // Add/remove dark-mode class from body
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div style={{ marginTop: '80px' }}>
          <Routes>
            <Route path="/" element={<CreatePost />} />
            <Route path="/listpost" element={<ListPosts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
