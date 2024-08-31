import React from "react";
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import Main from './Components/Plots/Main';

const App = () => {
    return (
        <BrowserRouter> {/* Wrap the Main component with BrowserRouter */}
            <Main />
        </BrowserRouter>
    );
}

export default App;
