import React, { useState, useRef, useEffect } from 'react';

const HeroSection = ({initialData}) => {
  // State for the data array
  const [data, setData] = useState(initialData);
  
  // State for the currently displayed content
  const [content, setContent] = useState(data[0]);
  
  const [editing, setEditing] = useState(null);
  const editRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Handle regeneration of content
  const regenerateContent = () => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * data.length);
      setContent(data[randomIndex]);
      setIsLoading(false);
      
      // Show success tooltip
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }, 800);
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

  // Update the data array then set the content when editing
  const handleEditChange = (e) => {
    // Update the data array based on ID
    const updatedData = data.map(item => 
      item.id === content.id ? { ...item, [editing]: e.target.value } : item
    );
    setData(updatedData);
    
    // Update the current content
    const updatedContent = {
      ...content,
      [editing]: e.target.value
    };
    setContent(updatedContent);
  };

  const stopEditing = () => {
    setEditing(null);
  };

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
              className="text-4xl font-bold cursor-pointer hover:text-blue-400 transition-colors duration-300"
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
                className="text-lg text-gray-300 cursor-pointer hover:text-blue-400 mb-6 transition-colors duration-300"
              >
                {content.subheadline}
              </p>
            )}
            
            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              <button 
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300 transform hover:scale-105"
              >
                Get Started
              </button>
              <button 
                className={`px-6 py-2 border border-blue-500 hover:bg-blue-900/30 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                onClick={regenerateContent}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  "Regenerate Content"
                )}
              </button>
            </div>
            
            {/* Success message */}
            {showTooltip && (
              <div className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md text-center">
                Content regenerated successfully!
              </div>
            )}
          </div>
          
          {/* Image */}
          <div className="md:w-1/2">
            <img 
              src={content.image} 
              alt="Hero" 
              className="w-full rounded-lg shadow-lg transition-opacity duration-500"
              style={{ 
                opacity: isLoading ? 0.5 : 1,
                transform: `scale(${isLoading ? 0.98 : 1})`,
                transition: 'opacity 0.5s, transform 0.5s' 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
