<<<<<<< HEAD
import React from "react";
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import Main from './Components/Plots/Main';

const App = () => {
    return (
        <BrowserRouter> {/* Wrap the Main component with BrowserRouter */}
            <Main />
        </BrowserRouter>
    );
=======
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
>>>>>>> origin/main
}

export default App;