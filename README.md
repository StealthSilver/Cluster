# Cluster - V1

A calm, relationship-aware social application with separate microservices architecture.

## 🎯 Overview

Cluster is designed as a relationship-focused social platform where:
- Users join public **Tribes** based on shared interests
- Posts are shared **within tribes**, not broadcast globally
- Users build **private closeness graphs** (Circles) with the people closest to them
- A **global Cluster Map** shows the landscape of communities
- **Notifications** are digest-based, not real-time alerts

## 🏗️ Architecture

### Backend (7 Microservices)

| Service | Port | Purpose |
|---------|------|---------|
| Auth Service | 3001 | User signup, login, JWT tokens |
| User Service | 3002 | User profiles, bios, avatars |
| Tribe Service | 3003 | Public interest groups |
| Post Service | 3004 | Posts within tribes |
| Circle Service | 3005 | Private closeness graphs |
| Cluster Service | 3006 | Global cluster map |
| Notification Service | 3007 | Digest notifications |

### Frontend
- **React App** (Port 3000): 8 main pages with protected routes
- **Next.js Landing** (Port 3010): SEO-optimized homepage

## ✨ Features

✅ User authentication with JWT
✅ User profiles with avatars and bios
✅ Public tribes with join/leave
✅ Posts within tribes (chronological, paginated)
✅ Private circles with closeness scores (0-100)
✅ Global cluster map view
✅ Feed with light/deep reading modes
✅ Explore and discover tribes
✅ Direct messaging interface
✅ Notification digest
✅ Fully responsive design
✅ Dark theme, calm aesthetic
✅ No aggressive notifications or badges
✅ Framer Motion animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### 1. Setup MongoDB
```bash
# Option A: Local MongoDB
mongod

# Option B: MongoDB Atlas
# Sign up at https://mongodb.com/cloud
# Get connection string and add to .env files
```

### 2. Start Backend Services (7 terminals)
```bash
# Terminal 1 - Auth Service
cd cluster-backend/auth-service
npm install
npm run dev

# Terminal 2 - User Service
cd cluster-backend/user-service
npm install
npm run dev

# Terminal 3 - Tribe Service
cd cluster-backend/tribe-service
npm install
npm run dev

# Terminal 4 - Post Service
cd cluster-backend/post-service
npm install
npm run dev

# Terminal 5 - Circle Service
cd cluster-backend/circle-service
npm install
npm run dev

# Terminal 6 - Cluster Service
cd cluster-backend/cluster-service
npm install
npm run dev

# Terminal 7 - Notification Service
cd cluster-backend/notification-service
npm install
npm run dev
```

### 3. Start Frontend
```bash
cd cluster-frontend
npm install
npm run dev
```

### 4. Visit
- **App**: http://localhost:3000
- **Landing** (optional): http://localhost:3010

## 📚 API Documentation

### Auth Service (3001)

```
POST /api/auth/signup
{
  "email": "user@example.com",
  "password": "secure",
  "name": "John Doe"
}
Response: { user, accessToken, refreshToken }

POST /api/auth/login
{
  "email": "user@example.com",
  "password": "secure"
}
Response: { user, accessToken, refreshToken }

POST /api/auth/refresh
{
  "refreshToken": "..."
}
Response: { accessToken, refreshToken }

GET /api/auth/me
Authorization: Bearer {token}
Response: User object
```

### User Service (3002)

```
GET /api/profiles/me
Authorization: Bearer {token}
Response: UserProfile

GET /api/profiles/:userId
Response: UserProfile

PUT /api/profiles/me/bio
Authorization: Bearer {token}
{ "bio": "..." }

PUT /api/profiles/me/avatar
Authorization: Bearer {token}
{ "avatar": "😊" }

POST /api/profiles/me/join-tribe/:tribeId
Authorization: Bearer {token}

POST /api/profiles/me/leave-tribe/:tribeId
Authorization: Bearer {token}
```

### Tribe Service (3003)

```
GET /api/tribes
Response: [Tribe...]

POST /api/tribes
Authorization: Bearer {token}
{ "name": "...", "description": "...", "category": "..." }

GET /api/tribes/:id
Response: Tribe

POST /api/tribes/:id/join
Authorization: Bearer {token}

POST /api/tribes/:id/leave
Authorization: Bearer {token}

GET /api/tribes/search/:query
Response: [Tribe...]
```

### Post Service (3004)

```
POST /api/posts
Authorization: Bearer {token}
{ "content": "...", "image": "...", "tribeId": "..." }

GET /api/posts/tribe/:tribeId?page=1&limit=10
Response: [Post...]

GET /api/posts/user/:userId
Response: [Post...]

DELETE /api/posts/:id
Authorization: Bearer {token}
```

### Circle Service (3005)

```
GET /api/circles/me
Authorization: Bearer {token}
Response: Circle with connections

POST /api/circles/add
Authorization: Bearer {token}
{ "personId": "..." }

PUT /api/circles/update/:personId
Authorization: Bearer {token}
{ "closenessScore": 75 }

DELETE /api/circles/remove/:personId
Authorization: Bearer {token}
```

### Cluster Service (3006)

```
GET /api/cluster/config
Response: { version, tribes: [...] }

GET /api/cluster/global-view
Authorization: Bearer {token}
Response: { clusters: [...], total }
```

### Notification Service (3007)

```
GET /api/notifications?page=1&limit=10
Authorization: Bearer {token}
Response: [Notification...]

POST /api/notifications
{ "userId": "...", "type": "mention|reply|tribe_activity", "content": "..." }

PUT /api/notifications/:id/read
Authorization: Bearer {token}

PUT /api/notifications/read-all
Authorization: Bearer {token}

DELETE /api/notifications/:id
Authorization: Bearer {token}
```

## 🔐 Authentication

All services use JWT token authentication:
1. User signs up/logs in via Auth Service
2. Receives `accessToken` (15 min) and `refreshToken` (7 days)
3. Frontend includes `Authorization: Bearer {token}` on all requests
4. Services validate token via middleware
5. Use refresh token to get new access token

## 🎨 Design Philosophy

- **Dark Theme**: #0f0f0f background with warm accents (#c4a590)
- **Calm Aesthetic**: No aggressive colors, no blue/purple
- **Spacious**: Plenty of breathing room, minimal clutter
- **Human-Centered**: No dopamine-driven UI elements
- **No Badges**: No red notifications, no engagement metrics
- **Intentional**: Slow, thoughtful interactions

## 📁 Project Structure

```
Cluster/
├── cluster-backend/
│   ├── auth-service/
│   ├── user-service/
│   ├── tribe-service/
│   ├── post-service/
│   ├── circle-service/
│   ├── cluster-service/
│   └── notification-service/
├── cluster-frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── styles/
│   └── index.html
├── cluster-landing/
│   ├── app/
│   ├── components/
│   └── styles/
└── README.md
```

## 🛠️ Tech Stack

### Backend
- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- JWT authentication
- Bcryptjs for password hashing

### Frontend
- React 18 + TypeScript
- Vite (bundler)
- React Router (navigation)
- Zustand (state management)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Axios (HTTP client)

### Landing Page
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion

## 📝 Environment Variables

Each service needs a `.env` file (see `.env.example`):

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/cluster-auth
JWT_SECRET=your_super_secret_key_change_in_production
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
NODE_ENV=development
```

**Important**: Change `JWT_SECRET` to a strong random string in production and keep it consistent across all services.

## 🚢 Deployment

### Backend Services
Recommended platforms: Railway, Render, Heroku, AWS

1. Create environment on platform
2. Set environment variables (including strong JWT_SECRET)
3. Connect MongoDB (Atlas recommended)
4. Deploy each service to separate apps/containers

### Frontend
Deploy to Vercel, Netlify, or Docker

### Landing Page
Deploy to Vercel (native Next.js support)

## 📊 Database Schema

Each service has its own MongoDB database:

**Auth Service**: User (email, password hash, name, createdAt)
**User Service**: UserProfile (userId, avatar, bio, joinedTribes, activitySummary)
**Tribe Service**: Tribe (name, description, category, members, createdBy, createdAt)
**Post Service**: Post (content, image, author, tribeId, createdAt)
**Circle Service**: Circle (userId, connections: [{personId, closenessScore}])
**Notification Service**: Notification (userId, type, content, relatedId, read, createdAt)

## 🔒 Security Features

- Password hashing with bcryptjs (10 rounds)
- JWT signature verification
- Auth middleware on protected routes
- CORS configuration
- Environment-based secrets
- No sensitive data in localStorage (tokens only)
- Input validation on all routes

## 🧪 Testing

Each service can be tested via:
- Frontend dev console (Network tab)
- Postman or REST Client
- curl commands

## 📈 Performance Considerations

- MongoDB indexes on frequently queried fields
- Pagination support for large lists
- Service isolation allows independent scaling
- Stateless services for horizontal scaling
- Token caching in localStorage

## 🔗 Related Links

- [Frontend README](./cluster-frontend/README.md)
- [Landing Page README](./cluster-landing/README.md)
- [Setup Guide](./SETUP.md)

## 📄 License

This project is open source.

## 🤝 Contributing

Contributions welcome! Please ensure:
- TypeScript strict mode compliance
- Proper error handling
- Clear commit messages
- Updated documentation

---

**Version**: 1.0.0
**Last Updated**: January 2024
**Status**: Production Ready
