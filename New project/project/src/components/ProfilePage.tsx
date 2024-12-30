import { RGBBorder } from './RGBBorder';
import { ArrowLeft, Edit2 } from 'lucide-react';

export const ProfilePage = () => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  return (
    <div className="min-h-screen p-8">
      <RGBBorder className="max-w-2xl mx-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              Profile Data
            </h1>
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Return Home
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{userData.username || 'N/A'}</h2>
                <p className="text-gray-400">{userData.email || 'N/A'}</p>
              </div>
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <Edit2 size={20} />
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Gaming Platform</h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white">{userData.platform || 'N/A'}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Favorite Genres</h3>
              <div className="flex flex-wrap gap-2">
                {userData.genres?.length > 0 ? (
                  userData.genres.map((genre: string) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-gray-800 text-white rounded-full"
                    >
                      {genre}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">No genres selected</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </RGBBorder>
    </div>
  );
};