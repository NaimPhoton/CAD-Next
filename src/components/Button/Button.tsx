import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;                            // The text to display inside the button
  onClick?: () => void;                    // Optional click handler
  type?: 'button' | 'submit' | 'reset';    // Button type (default is 'button')
  disabled?: boolean;                      // Disable the button
  className?: string;                      // Optional custom class for additional styling
  style?: React.CSSProperties;             // Inline styles
  variant?: 'primary' | 'secondary' | 'danger' | 'success'; // Button style variant
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  style = {},
  variant = 'primary',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
