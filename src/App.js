import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.js';
import Page from './Components/Construction/Page.js';
import Work from './Components/Plots/work.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/construction/*" element={<Page />} />
          <Route path="/plots" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;