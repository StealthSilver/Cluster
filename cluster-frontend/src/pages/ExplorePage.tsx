import { useState } from 'react';
import { motion } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';

export const ExplorePage = () => {
  const [search, setSearch] = useState('');
  const categories = ['Sports', 'Technology', 'Art', 'Wellness', 'Learning', 'Other'];

  return (
    <MainLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold mb-6">Explore</h1>

        <input
          type="text"
          placeholder="Search tribes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-6 bg-dark-secondary border border-dark-tertiary rounded text-white placeholder-gray-500"
        />

        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              className="p-3 bg-dark-secondary border border-dark-tertiary rounded hover:border-accent-warm transition-all"
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </MainLayout>
  );
};
