import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const LightDarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
    // Additional logic for switching between light and dark mode
  };

  return (
    <div className="light-dark-mode-toggle">
      <button
        className="toggle-button"
        onClick={handleToggleMode}
      >
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </div>
  );
};

export default LightDarkModeToggle;
