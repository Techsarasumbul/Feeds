import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing from react-router-dom
import Home from "./Home"; // Assuming you have a Home component
import "../index.css"; // Correct path for index.css file

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} /> {/* Home route */}
      </Routes>
    </Router>
  );
}

export default App;
