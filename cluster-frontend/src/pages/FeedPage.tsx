import { useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';

export const FeedPage = () => {
  const [mode, setMode] = useState<'light' | 'deep'>('light');

  return (
    <MainLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode('light')}
            className={`px-4 py-2 rounded text-sm ${mode === 'light' ? 'bg-accent-warm text-dark-bg' : 'bg-dark-secondary'}`}
          >
            Light Read
          </button>
          <button
            onClick={() => setMode('deep')}
            className={`px-4 py-2 rounded text-sm ${mode === 'deep' ? 'bg-accent-warm text-dark-bg' : 'bg-dark-secondary'}`}
          >
            Deep Reflect
          </button>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-dark-secondary rounded border border-dark-tertiary"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">👤</div>
                <div>
                  <p className="font-semibold">User Name</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <p className="text-gray-300">{mode === 'light' ? 'Quick thought...' : 'Deeper reflection on life, meaning, and connection...'}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-dark-secondary rounded border border-dark-tertiary text-center">
          <p className="text-gray-400 text-sm">You've reached the end of your feed.</p>
          <p className="text-gray-500 text-xs mt-2">Take a moment to reflect.</p>
        </div>
      </motion.div>
    </MainLayout>
  );
};
