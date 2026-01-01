import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clusterClient } from '../services/api';
import { MainLayout } from '../layouts/MainLayout';

export const ClusterPage = () => {
  const [view, setView] = useState<'global' | 'circle'>('global');
  const [tribes, setTribes] = useState([]);

  useEffect(() => {
    const fetchTribes = async () => {
      try {
        const res = await clusterClient.get('/api/cluster/config');
        setTribes(res.data.tribes);
      } catch (error) {
        console.error('Failed to fetch tribes');
      }
    };
    fetchTribes();
  }, []);

  return (
    <MainLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setView('global')}
            className={`px-4 py-2 rounded ${view === 'global' ? 'bg-accent-warm text-dark-bg' : 'bg-dark-secondary'}`}
          >
            Global
          </button>
          <button
            onClick={() => setView('circle')}
            className={`px-4 py-2 rounded ${view === 'circle' ? 'bg-accent-warm text-dark-bg' : 'bg-dark-secondary'}`}
          >
            Your Circle
          </button>
        </div>

        {view === 'global' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Global Clusters</h2>
            {tribes.map((tribe: any) => (
              <motion.div
                key={tribe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-dark-secondary rounded border border-dark-tertiary"
              >
                <h3 className="text-lg font-semibold text-accent-warm">{tribe.name}</h3>
                <p className="text-gray-400 text-sm">{tribe.description}</p>
                <div className="mt-2 text-xs text-gray-500">{tribe.members} members</div>
              </motion.div>
            ))}
          </div>
        )}

        {view === 'circle' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Your Circle</h2>
            <p className="text-gray-400">Build your closest connections here.</p>
          </div>
        )}
      </motion.div>
    </MainLayout>
  );
};
