import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeSwitch = ({ mode, toggleMode }) => {
  return (
    <div className={"dark-mode-switch"} onClick={toggleMode}>
      <div className="icon-container">
        <FontAwesomeIcon icon={mode === 'dark' ? faMoon : faSun} />
      </div>
    </div>
  );
}

export default DarkModeSwitch;
