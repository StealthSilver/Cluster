import { useEffect } from 'react';

export const MindPalacePage = () => {
  useEffect(() => {
    window.location.href = 'https://mind-palace-eight.vercel.app/';
  }, []);

  return <div>Redirecting to Mind Palace...</div>;
};
