# Netflix Clone

A modern Netflix clone built with Next.js 14, featuring authentication, movie browsing, and watchlist functionality.

## Features

- 🎬 Modern UI/UX similar to Netflix
- 🔐 Authentication with NextAuth.js
  - Email/Password login
  - GitHub OAuth
  - Google OAuth
- 🎥 Movie browsing and details
- 📺 Watchlist functionality
- 🎨 Responsive design
- 🌙 Dark mode support
- 🚀 Built with Next.js 14 App Router

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **UI Components:** Radix UI
- **Email Service:** Resend

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- A Supabase account
- GitHub OAuth credentials
- Google OAuth credentials
- Resend API key for email functionality

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=your_supabase_database_url

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Email (Resend)
EMAIL_SERVER_USER=resend
EMAIL_SERVER_PASSWORD=your_resend_api_key
EMAIL_SERVER_HOST=smtp.resend.com
EMAIL_SERVER_PORT=465
EMAIL_FROM=your_verified_email

# OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Installation

1. Clone the repository:
```bash
git clone 
cd netflix-clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
netflix-clone/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   ├── (auth)/           # Authentication pages
│   ├── home/             # Home page components
│   └── components/       # Shared components
├── components/            # Global components
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── lib/                  # Utility functions and configurations
```

## Database Schema

The project uses Prisma with the following main models:
- User
- Account
- Session
- Movie
- WatchList

