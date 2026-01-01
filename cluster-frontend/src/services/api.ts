import axios from 'axios';

const createClient = (baseURL: string) => {
  const client = axios.create({ baseURL });

  client.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return client;
};

export const authClient = createClient(import.meta.env.VITE_AUTH_SERVICE || 'http://localhost:3001');
export const userClient = createClient(import.meta.env.VITE_USER_SERVICE || 'http://localhost:3002');
export const tribeClient = createClient(import.meta.env.VITE_TRIBE_SERVICE || 'http://localhost:3003');
export const postClient = createClient(import.meta.env.VITE_POST_SERVICE || 'http://localhost:3004');
export const circleClient = createClient(import.meta.env.VITE_CIRCLE_SERVICE || 'http://localhost:3005');
export const clusterClient = createClient(import.meta.env.VITE_CLUSTER_SERVICE || 'http://localhost:3006');
export const notificationClient = createClient(import.meta.env.VITE_NOTIFICATION_SERVICE || 'http://localhost:3007');
