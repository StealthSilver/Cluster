# Post Service

Post management service for Cluster.

## Features
- Create text and image posts
- Post within tribes only
- Pagination support
- Author-only deletion

## Endpoints
- `POST /api/posts` - Create post (protected)
- `GET /api/posts/tribe/:tribeId` - Get tribe posts
- `GET /api/posts/user/:userId` - Get user posts
- `DELETE /api/posts/:id` - Delete post (protected)

## Setup
1. Install dependencies: `npm install`
2. Configure .env file
3. Run: `npm run dev`

Port: 3004
