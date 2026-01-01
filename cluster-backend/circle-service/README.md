# Circle Service

Private relationship graphs service for Cluster.

## Features
- Private per-user circles
- Closeness scores (0-100)
- Add/remove/update connections
- No public exposure

## Endpoints
- `GET /api/circles/me` - Get your circle (protected)
- `POST /api/circles/add` - Add connection (protected)
- `PUT /api/circles/update/:personId` - Update closeness (protected)
- `DELETE /api/circles/remove/:personId` - Remove connection (protected)

## Setup
1. Install dependencies: `npm install`
2. Configure .env file
3. Run: `npm run dev`

Port: 3005
