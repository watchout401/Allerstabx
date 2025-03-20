// src/components/ui/button.jsx
//import React from 'react';
import PropTypes from 'prop-types';

export function Button({ children, className = '', variant = 'default', ...props }) {
  const variantStyles = {
    default: 'search-button',
    ghost: 'tab-button',
  };

  const activeStyle = variant === 'ghost' && props.active ? 'active-tab' : '';

  return (
    <button
      className={`${variantStyles[variant]} ${activeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Add prop-types validation
Button.propTypes = {
  children: PropTypes.node.isRequired,  // Validate that children is required and can be any renderable node
  className: PropTypes.string,          // Optional string for additional class names
  variant: PropTypes.oneOf(['default', 'ghost']),  // Only allow "default" or "ghost" as variant values
  active: PropTypes.bool,               // Optional boolean for active state
};