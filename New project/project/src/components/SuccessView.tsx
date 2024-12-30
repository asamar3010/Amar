import React from 'react';
import { Check } from 'lucide-react';
import { RGBBorder } from './RGBBorder';

interface SuccessViewProps {
  username: string;
}

export const SuccessView: React.FC<SuccessViewProps> = ({ username }) => {
  return (
    <div className="text-center">
      <div className="animate-bounce mb-6">
        <Check className="w-16 h-16 text-green-500 mx-auto" />
      </div>
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-x">
        Registration Complete!
      </h2>
      <p className="text-gray-300 mb-6">Welcome aboard, {username}!</p>
      <RGBBorder>
        <button
          onClick={() => window.location.href = '/profile'}
          className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
        >
          View Profile Data
        </button>
      </RGBBorder>
    </div>
  );
};