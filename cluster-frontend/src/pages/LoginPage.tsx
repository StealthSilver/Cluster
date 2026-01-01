import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authClient } from '../services/api';
import { useAuth } from '../hooks/useAuth';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogin = async () => {
    try {
      const res = await authClient.post('/api/auth/login', { email, password });
      setAuth(res.data.user, res.data.accessToken, res.data.refreshToken);
      navigate('/cluster');
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Cluster</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 bg-dark-secondary border border-dark-tertiary rounded text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-dark-secondary border border-dark-tertiary rounded text-white"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-accent-warm text-dark-bg py-3 rounded font-semibold hover:bg-opacity-90"
        >
          Login
        </button>
        <p className="mt-4 text-center text-gray-400">
          Don't have an account? <Link to="/signup" className="text-accent-warm hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};
