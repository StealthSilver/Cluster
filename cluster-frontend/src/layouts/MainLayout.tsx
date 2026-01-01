import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navItems = [
    { path: '/cluster', icon: '🗺️', label: 'Cluster' },
    { path: '/tribes', icon: '👥', label: 'Tribes' },
    { path: '/feed', icon: '📰', label: 'Feed' },
    { path: '/explore', icon: '🔍', label: 'Explore' },
    { path: '/messages', icon: '💬', label: 'Messages' },
    { path: '/mind-palace', icon: '🧠', label: 'Mind' },
    { path: '/profile', icon: '👤', label: 'Profile' },
    { path: '/notifications', icon: '🔔', label: 'Notify' }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-dark-bg text-white pb-24">
      <div className="max-w-2xl mx-auto p-4">
        {children}
      </div>
      <nav className="fixed bottom-0 left-0 right-0 bg-dark-secondary border-t border-dark-tertiary">
        <div className="max-w-2xl mx-auto flex justify-around">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex-1 py-3 text-center text-2xl transition-colors ${
                location.pathname === item.path ? 'text-accent-warm' : 'text-gray-500 hover:text-white'
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
    </motion.div>
  );
};
