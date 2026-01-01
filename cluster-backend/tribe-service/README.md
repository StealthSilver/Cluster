# Tribe Service

Public tribes management service for Cluster.

## Features
- Create and browse tribes
- Join/leave tribes
- Search tribes
- Category management

## Endpoints
- `GET /api/tribes` - Get all public tribes
- `POST /api/tribes` - Create tribe (protected)
- `GET /api/tribes/:id` - Get tribe details
- `POST /api/tribes/:id/join` - Join tribe (protected)
- `POST /api/tribes/:id/leave` - Leave tribe (protected)
- `GET /api/tribes/search/:query` - Search tribes

## Setup
1. Install dependencies: `npm install`
2. Configure .env file
3. Run: `npm run dev`

Port: 3003
