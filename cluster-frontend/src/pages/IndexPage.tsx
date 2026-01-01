import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const IndexPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/cluster');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg p-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold mb-4">Cluster</h1>
        <p className="text-gray-400 mb-8 text-lg">Think before you share. Connect with intention.</p>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-accent-warm text-dark-bg py-3 rounded font-semibold mb-3 hover:bg-opacity-90"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="w-full border border-accent-warm text-accent-warm py-3 rounded font-semibold hover:bg-dark-secondary"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
