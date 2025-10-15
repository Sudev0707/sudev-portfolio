import React, { useState } from "react";
import "../styles/Home.css";
import { Copy, Mail, Send } from "lucide-react"; // optional, for page-specific styles
import AnimatedBorderButton from "../components/buttons/AnimatedBorderButton ";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    window.location.href = "mailto:sudev97@gmail.com";
    setTimeout(() => setIsClicked(false), 600); // reset click animation
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("sudev97gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    // hero
    <div className="page-content flex ">
      <div className="hero-content border-2">
        <div className="profile-info flex items-center rounded-xl p-3 gap-4">
          {/* Open to Work button */}
          <div className="flex items-center gap-2 px-6 py-2.5 rounded-full btn_OpenToWork select-none">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-md font-semibold">
              Open to Work <span>✨</span>
            </p>
          </div>

          {/* Email Button */}
          <div className=" rounded-full">
            <AnimatedBorderButton email="sudev97@example.com" size="default" />
          </div>
        </div>



        <h1>Turning design concepts into functional builds</h1>
        <p className="subtitle">
          I design for difference — prioritizing clarity, delight, and genuine
          user connection.
        </p>

        <div className="social-icons">{/* Place social icons here */}</div>

        <div className="stats">
          <div className="stat-box">
            {/* <strong>36k+</strong> <span>YouTube Subscribers</span> */}
          </div>
          <div className="stat-box">
            {/* <strong>30+</strong> <span>Downloads</span> */}
          </div>
          <div className="stat-box">
            {/* <strong>4.8/5</strong> <span>Average Rating</span> */}
          </div>
        </div>
      </div>
      <div>kjkbfwkjfkr</div>
    </div>
  );
};

export default Home;
