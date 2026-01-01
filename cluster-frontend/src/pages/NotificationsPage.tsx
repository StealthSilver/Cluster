import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { notificationClient } from '../services/api';
import { MainLayout } from '../layouts/MainLayout';

export const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await notificationClient.get('/api/notifications');
        setNotifications(res.data);
      } catch (error) {
        console.error('Failed to fetch notifications');
      }
    };
    fetchNotifications();
  }, []);

  return (
    <MainLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold mb-6">Notifications</h1>
        <div className="space-y-3">
          {notifications.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No notifications yet</p>
          ) : (
            notifications.map((notif: any) => (
              <motion.div
                key={notif._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`p-4 rounded border ${
                  notif.read ? 'bg-dark-secondary border-dark-tertiary' : 'bg-dark-tertiary border-accent-warm'
                }`}
              >
                <p className="font-semibold text-sm">{notif.type}</p>
                <p className="text-sm text-gray-400 mt-1">{notif.content}</p>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </MainLayout>
  );
};
