import React, { createContext, useState, useEffect } from 'react';

// Create Dark Mode Context
export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  // Initialize state with localStorage value or default to light mode (false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Save the dark mode setting to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {/* Add the dark or light mode class to the root div */}
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};
