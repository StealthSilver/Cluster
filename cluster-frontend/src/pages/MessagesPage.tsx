import { motion } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';

export const MessagesPage = () => {
  const conversations = [
    { id: 1, name: 'Alice', lastMessage: 'Hey, how are you?', avatar: '👤' },
    { id: 2, name: 'Bob', lastMessage: 'Looking forward to the event', avatar: '👤' },
    { id: 3, name: 'Carol', lastMessage: 'Thanks for sharing!', avatar: '👤' }
  ];

  return (
    <MainLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold mb-6">Messages</h1>
        <div className="space-y-2">
          {conversations.map((conv) => (
            <motion.div
              key={conv.id}
              whileHover={{ x: 5 }}
              className="p-4 bg-dark-secondary rounded border border-dark-tertiary cursor-pointer hover:border-accent-warm transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{conv.avatar}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold">{conv.name}</p>
                  <p className="text-xs text-gray-400 truncate">{conv.lastMessage}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </MainLayout>
  );
};
