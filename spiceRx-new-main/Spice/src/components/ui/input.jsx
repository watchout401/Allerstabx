// src/components/ui/input.jsx
//import React from 'react';
import PropTypes from 'prop-types';

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`input-field ${className}`}
      {...props}
    />
  );
}

// Add prop-types validation
Input.propTypes = {
  className: PropTypes.string,  // Optional string for additional class names
};