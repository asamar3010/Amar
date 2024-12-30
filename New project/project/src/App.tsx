import { RegistrationForm } from './components/RegistrationForm';
import { ProfilePage } from './components/ProfilePage';

function App() {
  const isProfilePage = window.location.pathname === '/profile';

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {isProfilePage ? <ProfilePage /> : <RegistrationForm />}
      </div>
    </div>
  );
}

export default App;