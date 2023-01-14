import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./components/profile.component"

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Kyro
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profiles
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
