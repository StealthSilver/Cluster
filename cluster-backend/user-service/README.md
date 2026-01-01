# User Service

User profile management service for Cluster.

## Features
- User profiles with avatars and bios
- Track joined tribes
- Activity summary

## Endpoints
- `GET /api/profiles/me` - Get your profile
- `GET /api/profiles/:userId` - Get user profile
- `PUT /api/profiles/me/bio` - Update bio
- `PUT /api/profiles/me/avatar` - Update avatar
- `POST /api/profiles/me/join-tribe/:tribeId` - Join tribe
- `POST /api/profiles/me/leave-tribe/:tribeId` - Leave tribe

## Setup
1. Install dependencies: `npm install`
2. Configure .env file
3. Run: `npm run dev`

Port: 3002
