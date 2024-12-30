import React from 'react';
import { Gamepad2 } from 'lucide-react';

interface PlatformSelectorProps {
  selectedPlatform: string;
  onSelect: (platform: string) => void;
  error?: string;
}

const PLATFORMS = ['PC', 'PlayStation', 'Xbox', 'Nintendo'];

export const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  selectedPlatform,
  onSelect,
  error,
}) => {
  return (
    <div>
      <label className="block text-gray-300 mb-2">Gaming Platform</label>
      <div className="grid grid-cols-2 gap-4">
        {PLATFORMS.map((platform) => (
          <button
            key={platform}
            type="button"
            className={`p-3 rounded-lg border ${
              selectedPlatform === platform
                ? 'border-purple-500 bg-purple-500 bg-opacity-20'
                : 'border-gray-700 hover:border-purple-500'
            } transition-all`}
            onClick={() => onSelect(platform)}
          >
            <Gamepad2 className="inline-block mr-2" size={20} />
            {platform}
          </button>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};