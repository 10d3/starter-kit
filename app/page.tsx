
export default function Home() {
  const stack = [
    {
      name: "Next.js 16",
      description: "React framework with App Router",
      docs: "https://nextjs.org"
    },
    {
      name: "TanStack Query",
      description: "Powerful data synchronization",
      docs: "https://tanstack.com/query"
    },
    {
      name: "Prisma",
      description: "Next-generation ORM",
      docs: "https://prisma.io"
    },
    {
      name: "Better Auth",
      description: "Modern authentication",
      docs: "https://better-auth.com"
    },
    {
      name: "shadcn/ui",
      description: "Beautiful components",
      docs: "https://ui.shadcn.com"
    },
    {
      name: "Resend",
      description: "Email for developers",
      docs: "https://resend.com"
    },
    {
      name: "UploadThing",
      description: "File uploads made easy",
      docs: "https://uploadthing.com"
    },
    {
      name: "Inngest",
      description: "Background jobs & workflows",
      docs: "https://inngest.com"
    },
    {
      name: "Bun Runtime",
      description: "Fast JavaScript runtime",
      docs: "https://bun.sh",
      badge: "Manual Setup Required"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <main className="mx-auto max-w-5xl px-6 py-20 md:py-32">
        {/* Header */}
        <div className="mb-24 space-y-8">
          <div className="flex items-center gap-4 text-neutral-400">
            <div className="h-px w-12 bg-neutral-200 dark:bg-neutral-800" />
            <span className="text-sm font-medium tracking-wider uppercase">Production Ready</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-neutral-900 dark:text-neutral-50">
              Modern Full-Stack
              <br />
              <span className="font-normal">Starter Kit</span>
            </h1>

            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              A carefully curated tech stack for building production-grade applications with authentication, database management, file uploads, and background processing.
            </p>
          </div>
        </div>

        {/* Bun Setup Notice */}
        <div className="mb-16 rounded-2xl border border-amber-200 dark:border-amber-900/30 bg-amber-50 dark:bg-amber-950/20 p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 text-2xl">⚠️</div>
            <div className="space-y-2">
              <h3 className="font-semibold text-amber-900 dark:text-amber-100">
                Bun Runtime Setup Required
              </h3>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                To enable Bun runtime on Vercel, create a <code className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 font-mono text-xs">vercel.json</code> file in your project root.
              </p>
              <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
                This enables all Bun-specific APIs like <code className="font-mono">Bun.password.hash()</code> and <code className="font-mono">Bun.file()</code>
              </p>
            </div>
          </div>
        </div>

        {/* Stack */}
        <div className="mb-24">
          <h2 className="mb-8 text-sm font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
            Technology Stack
          </h2>
          <div className="grid gap-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
            {stack.map((tech) => (
              <a
                key={tech.name}
                href={tech.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white dark:bg-neutral-950 p-6 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                        {tech.name}
                      </h3>
                      {tech.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium">
                          {tech.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {tech.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-400 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-24">
          <h2 className="mb-8 text-sm font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                Type-Safe Development
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                End-to-end type safety with TypeScript, Prisma ORM, and TanStack Query for bulletproof development.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                Blazing Performance
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Powered by Bun runtime for up to 4x faster installs and native speed improvements across your entire stack.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                Secure Authentication
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Better Auth integration with social logins, magic links, and robust session management out of the box.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                Production Ready
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                File uploads with UploadThing, email with Resend, and background jobs with Inngest all pre-configured.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
            href="/docs"
          >
            Get Started
          </a>
          <a
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 font-medium transition-all hover:border-neutral-400 dark:hover:border-neutral-600"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
