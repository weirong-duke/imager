import React from 'react';
import './Button.scss';
import ComponentWithChildren from "types/ComponentWithChildren";

interface ButtonProps extends ComponentWithChildren {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  type?: "submit" | "danger" | "neutral";
}

const Button = ({children, className, disabled, onClick, type}: ButtonProps) => {
  return <button
    disabled={disabled}
    onClick={onClick}
    className={`Button ${type ? `Button--${type}` : 'submit'} ${className || ''}`}>
    {children}
  </button>
}

export default Button;
