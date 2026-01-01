# Cluster - Relationship-Aware Social App

A calm, intentional social platform designed for meaningful connections. Think before you share. Connect with purpose.

## 🎯 Overview

Cluster is a V1 social application built with modern technology stack. It combines:
- **Unified Backend**: Single Express.js service with all features
- **React Frontend**: Vite-powered, TypeScript, Tailwind CSS
- **Landing Page**: Next.js with Framer Motion animations

## 🏗️ Architecture

```
Cluster/
├── cluster-backend/          # Unified Express backend (port 3001)
│   ├── src/
│   │   ├── models/           # MongoDB Mongoose models
│   │   ├── routes/           # Express routes for all features
│   │   ├── middleware/       # Auth & JWT middleware
│   │   └── index.ts          # Main Express app
│   └── package.json
├── cluster-frontend/         # React app (port 3000)
│   ├── src/
│   │   ├── pages/            # Page components
│   │   ├── components/       # Reusable components
│   │   ├── services/         # API client
│   │   ├── hooks/            # Custom hooks
│   │   └── styles/           # Tailwind + globals
│   └── package.json
└── cluster-landing/          # Next.js landing (port 3010)
    ├── app/
    │   ├── page.tsx          # Home page
    │   └── globals.css       # Global styles
    └── package.json
```

## 🚀 Quick Start

### 1. Clone and Setup

```bash
git clone https://github.com/StealthSilver/Cluster.git
cd Cluster
```

### 2. Backend Setup

```bash
cd cluster-backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start the server
npm run dev
```

Backend runs on `http://localhost:3001`

### 3. Frontend Setup

```bash
cd cluster-frontend

# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local

# Start dev server
npm run dev
```

Frontend runs on `http://localhost:3000`

### 4. Landing Page (Optional)

```bash
cd cluster-landing

# Install dependencies
npm install

# Start dev server
npm run dev
```

Landing page runs on `http://localhost:3010`

## 📋 Features Implemented

✅ **Authentication**
- User signup with email, password, name
- Login with email & password
- JWT token generation (15m access, 7d refresh)
- Protected routes

✅ **User Profiles**
- Profile management (avatar, bio)
- Activity tracking (posts, tribes)
- Join/leave tribes

✅ **Tribes (Communities)**
- Create and discover public tribes
- Join/leave tribes
- Browse by category (sports, tech, art, wellness, learning)
- Search functionality

✅ **Posts**
- Create text/image posts in tribes
- Chronological feed
- Pagination support
- Author-only deletion

✅ **Circles (Private)**
- Private relationship graph
- Closeness scoring (0-100)
- Add/update/remove connections
- No public exposure

✅ **Cluster Map**
- Global view of all tribes
- Circle view of close connections
- Two-mode navigation

✅ **Notifications**
- Digest-based (not real-time)
- Types: mentions, replies, tribe activity
- Read/unread tracking
- Pagination

✅ **Messages**
- 1:1 conversation UI
- Minimal, calm design

✅ **Other Features**
- Dark theme design
- Calm UI (no aggressive metrics)
- Responsive layout
- Framer Motion animations

## 🛠️ Tech Stack

### Backend
- **Framework**: Express.js 4.18.2
- **Runtime**: Node.js 18+
- **Language**: TypeScript 5.1.6
- **Database**: MongoDB + Mongoose 7.5
- **Auth**: JWT + bcryptjs
- **API**: REST

### Frontend
- **Framework**: React 18.2
- **Build Tool**: Vite 4.4.9
- **Language**: TypeScript 5.1.6
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 10.16.4
- **State**: Zustand 4.4.1
- **HTTP**: Axios 1.5.0

### Landing Page
- **Framework**: Next.js 14.0
- **Language**: TypeScript 5.1.6
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 10.16.4

## 📚 API Endpoints

### All endpoints run on `/api/` prefix on port 3001

**Auth**
- `POST /auth/signup` - Create account
- `POST /auth/login` - Login
- `POST /auth/refresh` - Refresh token
- `GET /auth/me` - Get current user

**Profiles**
- `GET /profiles/me` - Your profile
- `GET /profiles/:userId` - Any profile
- `PUT /profiles/me/bio` - Update bio
- `PUT /profiles/me/avatar` - Update avatar

**Tribes**
- `GET /tribes` - All tribes
- `POST /tribes` - Create tribe
- `GET /tribes/:id` - Tribe details
- `POST /tribes/:id/join` - Join
- `POST /tribes/:id/leave` - Leave
- `GET /tribes/search/:query` - Search

**Posts**
- `GET /posts/tribe/:tribeId` - Tribe posts
- `GET /posts/user/:userId` - User posts
- `POST /posts` - Create
- `DELETE /posts/:id` - Delete (author only)

**Circles**
- `GET /circles/me` - Your circle
- `POST /circles/add` - Add connection
- `PUT /circles/update/:personId` - Update closeness
- `DELETE /circles/remove/:personId` - Remove

**Cluster**
- `GET /cluster/config` - Configuration
- `GET /cluster/global-view` - Global clusters

**Notifications**
- `GET /notifications` - Your notifications
- `POST /notifications` - Create
- `PUT /notifications/:id/read` - Mark read
- `PUT /notifications/read-all` - Mark all read
- `DELETE /notifications/:id` - Delete

## 🎨 Design System

### Colors
- **Dark Background**: #0f0f0f
- **Warm Accent**: #c4a590
- **Sage Green**: #9ca98a
- ❌ No blue or purple

### Typography
- **Headings**: Sora (600-700 weight)
- **Body**: Inter (400-500 weight)

### Philosophy
- Calm, spacious design
- No aggressive metrics or badges
- Intentional interactions
- Dark theme throughout
- Soft, smooth animations

## 🔐 Security

- Passwords hashed with bcryptjs (10 rounds)
- JWT signature verification
- Auth middleware on protected routes
- CORS enabled
- Input validation on all routes
- No sensitive data in localStorage (tokens only)

## 📦 Database

Single MongoDB instance with collections:
- `users` - Authentication & user accounts
- `userprofiles` - Profile data
- `tribes` - Communities
- `posts` - Posts in tribes
- `circles` - Relationship graphs
- `notifications` - User notifications

## 🚀 Deployment

### Backend (Node.js)
- Recommended: Railway, Render, Heroku
- Set environment variables
- Connect to MongoDB Atlas
- Deploy `dist/` folder (after npm run build)

### Frontend (React)
- Recommended: Vercel, Netlify
- Environment variables for API URLs
- Simple `npm run build && npm start`

### Landing Page (Next.js)
- Recommended: Vercel (native support)
- Same process as other Next.js apps

## 📖 Environment Variables

### Backend (.env)
```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/cluster
JWT_SECRET=your_secret_here
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
NODE_ENV=development
```

### Frontend (.env.local)
```
VITE_AUTH_SERVICE=http://localhost:3001
VITE_USER_SERVICE=http://localhost:3001
VITE_TRIBE_SERVICE=http://localhost:3001
VITE_POST_SERVICE=http://localhost:3001
VITE_CIRCLE_SERVICE=http://localhost:3001
VITE_CLUSTER_SERVICE=http://localhost:3001
VITE_NOTIFICATION_SERVICE=http://localhost:3001
```

## 🧪 Testing the App

1. **Signup**: Create account at `/signup`
2. **Login**: Login with credentials at `/login`
3. **Explore**: Browse tribes at `/tribes`
4. **Create**: Post in tribes from `/feed`
5. **Connect**: Add people to your circle
6. **Discover**: Search for tribes at `/explore`
7. **Notify**: Check notifications

## 📝 Project Structure

```
src/
├── backend/          # Express + MongoDB
├── frontend/         # React + Vite
└── landing/          # Next.js
```

## 🤝 Contributing

This is a solo V1 project. For modifications:
1. Create feature branch
2. Make changes
3. Test locally
4. Push to GitHub

## 📄 License

ISC

## 🙋 Support

For issues or questions, check the backend and frontend README files for detailed information.

---

**Cluster V1** - Think before you share. Connect with intention. 🌍
