import React from 'react';
import { Mail, Send } from 'lucide-react';
import './AnimatedBorderButton.css';

export const AnimatedBorderButton = ({ email = 'sudev97@example.com', size = 'default' }) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  return (
    <div className="relative inline-block rounded-full p-[2px] bg-transparent">
      {/* Animated Gradient Border */}
      <div
        className="absolute inset-0 rounded-full animate-border-gradient"
        style={{
          background: 'linear-gradient(90deg, #FA363686, #c084fc, #60a5fa, #f472b6)',
          backgroundSize: '300% 300%',
          zIndex: 0,
        }}
      />

      {/* Button */}
      <button
        onClick={() => window.location.href = `mailto:${email}`}
        className={`relative z-10 overflow-hidden cursor-pointer rounded-full font-semibold ${sizeClasses[size]}`}
        style={{
          backgroundColor: '#000',
          color: '#fff',
        }}
      >
        {/* Sliding Gradient Background */}
        <div
          className="absolute inset-0 rounded-full animate-bg-slide"
          style={{
            // background: 'linear-gradient(135deg, #10b981, #059669, #f472b6, #db2777)',
            backgroundSize: '300% 300%',
            zIndex: -1,
          }}
        />

        {/* Button content */}
        <div className="relative flex items-center gap-3.5 ">
          <Mail className="w-4 h-4" />
          <span>{email}</span>
          <Send className="w-4 h-4" />
        </div>
      </button>
    </div>
);
};

export default AnimatedBorderButton;
