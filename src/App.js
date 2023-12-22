import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound  from './pages/NotFound';
import Video from './pages/Video'
import Category from './pages/Category';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Category" element={<Category />} />
        <Route path="*" element={<NotFound  />} />
      </Routes>
    </Router>
  );
};

export default App;