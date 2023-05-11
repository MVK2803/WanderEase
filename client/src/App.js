import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Pref  from './pages/prefchoose';
import ResPage from './pages/resulPage';
import Loading from './pages/modals/modals';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Preferences" element={<Pref />} />
        <Route path="/suggestion" element={<ResPage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
