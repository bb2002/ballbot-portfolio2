import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import ProjectView from "./pages/ProjectView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/:projectName" element={<ProjectView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
