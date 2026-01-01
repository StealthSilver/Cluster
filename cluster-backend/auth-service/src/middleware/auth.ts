import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export interface AuthRequest extends Request {
  userId?: string;
  user?: any;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.userId = (decoded as any).userId;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const generateTokens = (userId: string) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET || 'secret', {
    expiresIn: process.env.JWT_EXPIRE || '15m'
  });

  const refreshToken = jwt.sign({ userId }, process.env.JWT_SECRET || 'secret', {
    expiresIn: process.env.JWT_REFRESH_EXPIRE || '7d'
  });

  return { accessToken, refreshToken };
};
