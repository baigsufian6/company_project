import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Plots/Main';
import Home from './Components/Home';
import Page from './Components/Construction/Page.js';
import ChatBot from './Components/Chatbot';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <ChatBot />
          </>
        } />
        <Route path="/construction/*" element={<Page />} />
        <Route path="/plots/*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;