import React from "react";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from "./pages/login";
import { User } from "./pages/user";
import { SignUp } from "./pages/signUp";

function App() {
  return (
    <div className="App">
      <div className="main-block">
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
