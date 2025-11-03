# Modern Full-Stack Starter Kit

A production-ready Next.js starter template with authentication, database management, file uploads, and background job processing. Built with modern tools and best practices.

## Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe development
- **[Bun](https://bun.sh)** - Fast JavaScript runtime (manual setup required)

### Data & State Management
- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization
- **[Prisma](https://prisma.io)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org)** - Recommended database (configurable)

### Authentication
- **[Better Auth](https://better-auth.com)** - Modern authentication solution
  - Social logins (Google, GitHub, etc.)
  - Magic links
  - Session management
  - Role-based access control

### UI & Styling
- **[shadcn/ui](https://ui.shadcn.com)** - Beautiful, accessible components
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[react-icons](https://react-icons.github.io/react-icons)** - Popular icon library

### Features & Services
- **[Resend](https://resend.com)** - Email delivery for developers
- **[UploadThing](https://uploadthing.com)** - Simple file uploads
- **[Inngest](https://inngest.com)** - Background jobs and workflows
- **[t3-env](https://env.t3.gg)** - Type-safe environment variables (recommended)

## Getting Started

### Prerequisites
- [Bun](https://bun.sh) installed on your machine
- [PostgreSQL](https://www.postgresql.org) database (local or hosted)
- API keys for external services (see Environment Variables section)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/10d3/starter-kit
   cd starter-kit
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables (see [Environment Variables](#environment-variables) section)

4. **Set up the database**
   ```bash
   bun prisma generate
   bun prisma db push
   ```

5. **Run the development server**
   ```bash
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# Better Auth
BETTER_AUTH_SECRET="your-secret-key-here"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth Providers (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Resend
RESEND_API_KEY="your-resend-api-key"

# UploadThing
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"

# Inngest
INNGEST_EVENT_KEY="your-inngest-event-key"
INNGEST_SIGNING_KEY="your-inngest-signing-key"
```

### Getting API Keys

- **Resend**: [Sign up at resend.com](https://resend.com)
- **UploadThing**: [Sign up at uploadthing.com](https://uploadthing.com)
- **Inngest**: [Sign up at inngest.com](https://inngest.com)
- **OAuth Providers**: Configure in respective developer consoles

## Deployment

### Vercel (Recommended)

#### Enable Bun Runtime

**Important**: To use Bun runtime on Vercel, create a `vercel.json` file in your project root

```json
```

This enables Bun-specific APIs like:
- `Bun.password.hash()` for password hashing
- `Bun.file()` for file operations
- Native speed improvements

#### Deploy Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Add environment variables
   - Deploy

3. **Set up database**
   - Use [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) or external provider
   - Run migrations: `bun prisma db push`

### Other Platforms

This project can also be deployed to:
- **[Railway](https://railway.app)** - Full Bun support
- **[Fly.io](https://fly.io)** - Great for Bun runtime
- **Self-hosted** - Docker with Bun

## Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── api/               # API routes
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...
├── lib/                   # Utility functions
│   ├── auth.ts           # Better Auth configuration
│   ├── db.ts             # Prisma client
│   └── env.ts            # Environment validation (t3-env)
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static files
└── styles/              # Global styles
```

## Available Scripts

```bash
# Development
bun dev              # Start development server
bun build            # Build for production
bun start            # Start production server

# Database
bun prisma generate  # Generate Prisma Client
bun prisma db push   # Push schema to database
bun prisma studio    # Open Prisma Studio

# Linting & Formatting
bun lint             # Run ESLint
bun format           # Format with Prettier
```

## Features

### Authentication
- Email/password authentication
- Social OAuth providers (Google, GitHub, etc.)
- Magic link authentication
- Session management
- Protected routes and API endpoints

### Database
- Type-safe database queries with Prisma
- Automatic migrations
- Database seeding support

### File Uploads
- Drag-and-drop file uploads
- Image optimization
- Multiple file support
- Progress tracking

### Email
- Transactional emails with Resend
- React Email templates
- Email verification

### Background Jobs
- Scheduled cron jobs
- Event-driven workflows
- Automatic retries
- Job monitoring dashboard

## Best Practices

- ✅ **Type-safe** - End-to-end TypeScript coverage
- ✅ **Environment validation** - t3-env ensures correct configuration
- ✅ **Error handling** - Proper error boundaries and API error handling
- ✅ **Security** - CSRF protection, secure sessions, sanitized inputs
- ✅ **Performance** - Image optimization, code splitting, caching
- ✅ **Accessibility** - ARIA labels, keyboard navigation, semantic HTML

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

- 📚 [Documentation](https://your-docs-url.com)
- 💬 [Discord Community](https://your-discord-url.com)
- 🐛 [Report Issues](https://github.com/your-username/your-repo/issues)

## Acknowledgments

Built with amazing open-source projects:
- Next.js Team
- Prisma Team
- TanStack Team
- Vercel
- And the entire open-source community

---

**Ready to build something amazing?** 🚀

Start by exploring the codebase and customizing it to your needs!
