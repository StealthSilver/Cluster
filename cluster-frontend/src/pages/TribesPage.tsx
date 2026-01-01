import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { tribeClient } from '../services/api';
import { MainLayout } from '../layouts/MainLayout';

export const TribesPage = () => {
  const [tribes, setTribes] = useState([]);

  useEffect(() => {
    const fetchTribes = async () => {
      try {
        const res = await tribeClient.get('/api/tribes');
        setTribes(res.data);
      } catch (error) {
        console.error('Failed to fetch tribes');
      }
    };
    fetchTribes();
  }, []);

  return (
    <MainLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold mb-6">Discover Tribes</h1>
        <div className="grid grid-cols-2 gap-4">
          {tribes.map((tribe: any) => (
            <motion.div
              key={tribe._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-dark-secondary rounded border border-dark-tertiary hover:border-accent-warm transition-all cursor-pointer"
            >
              <h3 className="font-semibold text-accent-warm">{tribe.name}</h3>
              <p className="text-xs text-gray-400 mt-2">{tribe.description}</p>
              <button className="mt-3 w-full text-xs bg-accent-warm text-dark-bg py-2 rounded hover:bg-opacity-90">
                Join
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </MainLayout>
  );
};
