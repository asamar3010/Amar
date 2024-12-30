import React from 'react';

interface RGBBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const RGBBorder: React.FC<RGBBorderProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      <div className="relative bg-gray-900 rounded-lg">{children}</div>
    </div>
  );
};