# Notification Service

Digest-based notifications service for Cluster.

## Features
- Digest-based notifications (no real-time)
- Mention, reply, and tribe activity notifications
- Mark as read functionality
- Paginated notification history

## Endpoints
- `GET /api/notifications` - Get notifications (protected)
- `POST /api/notifications` - Create notification
- `PUT /api/notifications/:id/read` - Mark as read (protected)
- `PUT /api/notifications/read-all` - Mark all as read (protected)
- `DELETE /api/notifications/:id` - Delete notification (protected)

## Setup
1. Install dependencies: `npm install`
2. Configure .env file
3. Run: `npm run dev`

Port: 3007
