import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { userClient } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import { MainLayout } from '../layouts/MainLayout';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await userClient.get('/api/profiles/me');
        setProfile(res.data);
        setBio(res.data.bio || '');
      } catch (error) {
        console.error('Failed to fetch profile');
      }
    };
    fetchProfile();
  }, []);

  const handleSaveBio = async () => {
    try {
      await userClient.put('/api/profiles/me/bio', { bio });
      setEditing(false);
    } catch (error) {
      console.error('Failed to update bio');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <MainLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">👤</div>
          <h1 className="text-2xl font-bold">{user?.name}</h1>
          <p className="text-gray-400">{user?.email}</p>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-gray-400 text-sm mb-2">Bio</p>
            {editing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value.slice(0, 160))}
                maxLength={160}
                className="w-full p-3 bg-dark-secondary border border-dark-tertiary rounded text-white"
                rows={3}
              />
            ) : (
              <p className="p-3 bg-dark-secondary rounded border border-dark-tertiary">{bio || 'No bio yet'}</p>
            )}
          </div>

          <button
            onClick={() => (editing ? handleSaveBio() : setEditing(true))}
            className="w-full bg-accent-warm text-dark-bg py-2 rounded hover:bg-opacity-90"
          >
            {editing ? 'Save' : 'Edit Bio'}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-dark-secondary rounded border border-dark-tertiary text-center">
            <p className="text-2xl font-bold text-accent-warm">{profile?.activitySummary?.postsCount || 0}</p>
            <p className="text-xs text-gray-400">Posts</p>
          </div>
          <div className="p-4 bg-dark-secondary rounded border border-dark-tertiary text-center">
            <p className="text-2xl font-bold text-accent-warm">{profile?.activitySummary?.joinedTribesCount || 0}</p>
            <p className="text-xs text-gray-400">Tribes</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-900 text-white py-2 rounded hover:bg-red-800"
        >
          Logout
        </button>
      </motion.div>
    </MainLayout>
  );
};
