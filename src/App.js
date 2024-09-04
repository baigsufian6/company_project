<<<<<<< HEAD

import React from "react";  // Import BrowserRouter
import Main from './Components/Plots/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.js';
import Page from './Components/Construction/Page.js';
// import Work from './Components/Plots/Main.js';

function App() {
=======
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.js";
import Page from "./Components/Construction/Page.js";
import Main from "./Components/Plots/Main.js";

const App = () => {
>>>>>>> aedda5a6bfb4f2d38613b69881fc3e75cdc017e5
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/construction/*" element={<Page />} />
<<<<<<< HEAD
          <Route path="/plots/*" element={<Main />} />
=======
          <Route path="/plots" element={<Main />} />
>>>>>>> aedda5a6bfb4f2d38613b69881fc3e75cdc017e5
        </Routes>
      </div>
    </Router>
  );
<<<<<<< HEAD

}
=======
};
>>>>>>> aedda5a6bfb4f2d38613b69881fc3e75cdc017e5

export default App;
