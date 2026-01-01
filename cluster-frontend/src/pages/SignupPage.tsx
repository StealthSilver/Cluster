import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authClient } from '../services/api';
import { useAuth } from '../hooks/useAuth';

export const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleSignup = async () => {
    try {
      const res = await authClient.post('/api/auth/signup', { name, email, password });
      setAuth(res.data.user, res.data.accessToken, res.data.refreshToken);
      navigate('/cluster');
    } catch {
      setError('Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center">Join Cluster</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-3 bg-dark-secondary border border-dark-tertiary rounded text-white"
        />
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
          onClick={handleSignup}
          className="w-full bg-accent-warm text-dark-bg py-3 rounded font-semibold hover:bg-opacity-90"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-400">
          Already have an account? <Link to="/login" className="text-accent-warm hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};
