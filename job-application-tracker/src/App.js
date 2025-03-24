import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDashboard from "./pages/JobDashboard";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<JobDashboard />} />
    </Routes>
  </Router>
);

export default App;
