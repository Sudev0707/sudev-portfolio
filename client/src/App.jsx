import React from "react";
import "./App.css";
// import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const App = () => {
  return (
    <div className="hero">
      <div className="mask"></div>
      <div className="hero-content">
        <p className="recent-project">
          Recent project: <span>Fixy ✨</span>
        </p>

        <h1>Turning design concepts into functional builds</h1>
        <p className="subtitle">
          I design for difference — prioritizing clarity, delight, and genuine user connection.
        </p>

        <div className="social-icons">
          {/* <FaGithub />
          <FaInstagram />
          <FaLinkedin />
          <FaEnvelope /> */}
        </div>

        <div className="stats">
          <div className="stat-box">
            <strong>36k+</strong> <span>YouTube Subscribers</span>
          </div>
          <div className="stat-box">
            <strong>30+</strong> <span>Downloads</span>
          </div>
          <div className="stat-box">
            <strong>4.8/5</strong> <span>Average Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
