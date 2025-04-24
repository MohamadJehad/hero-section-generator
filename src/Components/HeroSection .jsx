import React, { useState } from 'react';

// Sample data for regeneration with images
const dummyData = [
  {
    headline: "Transform Your Digital Experience",
    subheadline: "Powerful solutions that drive growth and engagement for modern businesses",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
  },
  {
    headline: "Elevate Your Brand Presence",
    subheadline: "Strategic design and development to help you stand out in a crowded market",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
  },
  {
    headline: "Innovate With Confidence",
    subheadline: "Cutting-edge solutions backed by data-driven insights for sustainable growth",
    image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    headline: "Build For The Future",
    subheadline: "Scalable technology solutions designed to grow with your business needs",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    headline: "Unlock Your Digital Potential",
    subheadline: "Expert guidance and tools to help you navigate the digital landscape",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    headline: "Revolutionize Your Digital Presence",
    subheadline: "Powerful, intuitive solutions designed to take your business to the next level",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
          <div className="text-content">
            <h1>{content.headline}</h1>
            <p>{content.subheadline}</p>
            
            <div className="buttons">
              <button className="primary-button">Get Started</button>
              <button 
                className="secondary-button"
                onClick={regenerateContent}
              >
                Regenerate Content
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="image-container">
            <img 
              src={content.image} 
              alt="Hero" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
