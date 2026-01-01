# Auth Service

Authentication service for Cluster.

## Features
- User signup and login
- JWT token generation and refresh
- Password hashing with bcryptjs

## Endpoints
- `POST /api/auth/signup` - Create new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `GET /api/auth/me` - Get current user (protected)

## Setup
1. Install dependencies: `npm install`
2. Configure .env file
3. Run: `npm run dev`

Port: 3001
