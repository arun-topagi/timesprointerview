import React from "react";
import QuestionPage from "./components/QuestionPage";
import './App.scss'
import Admin from "./components/Admin";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter,Route, Link, Router, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="userPage" element={<QuestionPage />} />
          <Route path="adminPage" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


{/* <h1>Time's Pro Interview</h1>
      <div className="app-content">
      {/* <QuestionPage/> */}
      // </div>
      // <Admin/>  */}