import React, { useState } from 'react';

// Sample data for regeneration
const dummyData = [
  {
    headline: "Transform Your Digital Experience",
    subheadline: "Powerful solutions that drive growth and engagement for modern businesses",
  },
  {
    headline: "Elevate Your Brand Presence",
    subheadline: "Strategic design and development to help you stand out in a crowded market",
  },
  {
    headline: "Innovate With Confidence",
    subheadline: "Cutting-edge solutions backed by data-driven insights for sustainable growth",
  },
  {
    headline: "Build For The Future",
    subheadline: "Scalable technology solutions designed to grow with your business needs",
  },
  {
    headline: "Unlock Your Digital Potential",
    subheadline: "Expert guidance and tools to help you navigate the digital landscape",
  }
];

const HeroSection = () => {
  const [content, setContent] = useState(dummyData[0]);

  // Handle regeneration of content
  const regenerateContent = () => {
    const randomIndex = Math.floor(Math.random() * dummyData.length);
    setContent(dummyData[randomIndex]);
  };

  return (
    <div className="hero-section">
      <div className="container">
        <div className="content">
          {/* Text Content */}
          <div className="">
            <h1>{content.headline}</h1>
            <p>{content.subheadline}</p>
            
            <div className="buttons">
              <button className="primary-button">Get Started</button>
              <button className="" onClick={regenerateContent}>
                Regenerate Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
