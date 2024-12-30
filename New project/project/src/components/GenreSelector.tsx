import React from 'react';

interface GenreSelectorProps {
  selectedGenres: string[];
  onChange: (genres: string[]) => void;
  error?: string;
}

const GAME_GENRES = [
  'Action', 'Adventure', 'RPG', 'Strategy', 
  'Sports', 'Racing', 'Puzzle', 'Shooter'
];

export const GenreSelector: React.FC<GenreSelectorProps> = ({
  selectedGenres,
  onChange,
  error,
}) => {
  return (
    <div>
      <label className="block text-gray-300 mb-2">Favorite Game Genres</label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {GAME_GENRES.map((genre) => (
          <label
            key={genre}
            className={`cursor-pointer p-2 rounded-lg border ${
              selectedGenres.includes(genre)
                ? 'border-purple-500 bg-purple-500 bg-opacity-20'
                : 'border-gray-700 hover:border-purple-500'
            } transition-all`}
          >
            <input
              type="checkbox"
              className="hidden"
              checked={selectedGenres.includes(genre)}
              onChange={(e) => {
                const newGenres = e.target.checked
                  ? [...selectedGenres, genre]
                  : selectedGenres.filter((g) => g !== genre);
                onChange(newGenres);
              }}
            />
            {genre}
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};