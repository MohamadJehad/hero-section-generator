import React, { useState, useRef, useEffect } from 'react';

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
  
  const [editing, setEditing] = useState(null);
  const editRef = useRef(null);

  // Handle regeneration of content
  const regenerateContent = () => {
    const randomIndex = Math.floor(Math.random() * dummyData.length);
    setContent(dummyData[randomIndex]);
  };

  // Handle inline editing
  const startEditing = (field) => {
    setEditing(field);
    setTimeout(() => {
      if (editRef.current) {
        editRef.current.focus();
      }
    }, 0);
  };

  const handleEditChange = (e) => {
    setContent({
      ...content,
      [editing]: e.target.value
    });
  };

  const stopEditing = () => {
    setEditing(null);
  };

  // Click outside to stop editing
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (editRef.current && !editRef.current.contains(event.target)) {
        stopEditing();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex ">
      <div className="container mx-auto px-12 py-12 max-w-6xl">
       
        {/* HEADLINE*/}
        <div className="text-center mb-12">
          {editing === 'headline' ? (
            <textarea
              ref={editRef}
              value={content.headline}
              onChange={handleEditChange}
              onBlur={stopEditing}
              onKeyDown={(e) => e.key === 'Enter' && stopEditing()}
              className="w-full text-4xl font-bold bg-gray-800 p-2 rounded border border-blue-500"
              rows={2}
            />
          ) : (
            <h1 
              onClick={() => startEditing('headline')}
              className="text-4xl font-bold cursor-pointer hover:text-blue-400"
            >
              {content.headline}
            </h1>
          )}
        </div>
        
        {/* Subtext and Photo - Side by side */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Subtext */}
          <div className="md:w-1/2 flex flex-col justify-center">
            {editing === 'subheadline' ? (
              <textarea
                ref={editRef}
                value={content.subheadline}
                onChange={handleEditChange}
                onBlur={stopEditing}
                onKeyDown={(e) => e.key === 'Enter' && stopEditing()}
                className="w-full text-lg text-gray-300 bg-gray-800 p-2 rounded border border-blue-500 mb-6"
                rows={4}
              />
            ) : (
              <p 
                onClick={() => startEditing('subheadline')}
                className="text-lg text-gray-300 cursor-pointer hover:text-blue-400 mb-6"
              >
                {content.subheadline}
              </p>
            )}
            
            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
                Get Started
              </button>
              <button 
                className="px-6 py-2 border border-blue-500 hover:bg-blue-900/30 rounded-md"
                onClick={regenerateContent}
              >
                Regenerate Content
              </button>
            </div>
          </div>
          
          {/* Image  */}
          <div className="md:w-1/2">
            <img 
              src={content.image} 
              alt="Hero" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
   
};

export default HeroSection;
