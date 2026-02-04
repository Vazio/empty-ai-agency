export default function DashboardFinanceiroCaseStudy() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent/10 via-background to-background py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <a href="/case-studies" className="inline-flex items-center text-accent hover:text-accent-dark mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </a>
          <h1 className="text-5xl font-bold mb-6">Dashboard Financeiro Angola</h1>
          <p className="text-2xl text-foreground/70 mb-8">
            A modern financial management platform built for the Angolan market
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">Fintech</span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">Next.js 14</span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">TypeScript</span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium">2024</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Challenge</h3>
              <p className="text-foreground/70">
                Angolan businesses needed a modern, localized financial management solution with multi-currency support and real-time insights.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Solution</h3>
              <p className="text-foreground/70">
                Built a full-stack web application with autonomous AI agents handling data processing, analytics, and intelligent recommendations.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Impact</h3>
              <p className="text-foreground/70">
                Production-ready platform deployed on Vercel with automatic deployments, real-time updates, and enterprise-grade performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold mb-8">
            The <span className="text-accent">Problem</span>
          </h2>
          <div className="prose prose-lg max-w-none text-foreground/70">
            <p className="mb-4">
              The Angolan market lacked modern, web-based financial management tools that understood 
              local currency dynamics (AOA), business practices, and regulatory requirements. Existing 
              solutions were either:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• Outdated desktop software with poor user experience</li>
              <li>• International SaaS platforms not localized for Angola</li>
              <li>• Expensive enterprise solutions beyond reach of SMEs</li>
              <li>• Manual spreadsheet-based workflows prone to errors</li>
            </ul>
            <p>
              Businesses needed a solution that combined modern web technology, local market understanding, 
              and intelligent automation to streamline financial operations.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold mb-8">
            The <span className="text-accent">Solution</span>
          </h2>
          
          {/* Screenshot Placeholder */}
          <div className="bg-muted rounded-2xl border border-border h-96 flex items-center justify-center mb-12">
            <div className="text-center text-foreground/50">
              <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-sm">Dashboard screenshots coming soon</p>
            </div>
          </div>

          <div className="space-y-8 text-foreground/70">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Core Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-2">Real-Time Dashboard</h4>
                  <p className="text-sm">Live financial metrics, cash flow visualization, and performance indicators updated in real-time.</p>
                </div>
                <div className="bg-muted p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-2">Multi-Currency Support</h4>
                  <p className="text-sm">Native AOA support with automatic exchange rate updates for USD, EUR, and other currencies.</p>
                </div>
                <div className="bg-muted p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-2">Transaction Management</h4>
                  <p className="text-sm">Track income, expenses, and transfers with categorization and tagging capabilities.</p>
                </div>
                <div className="bg-muted p-6 rounded-xl border border-border">
                  <h4 className="font-bold text-foreground mb-2">Analytics & Reports</h4>
                  <p className="text-sm">Automated financial reports, trend analysis, and customizable data visualizations.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Technical Architecture</h3>
              <p className="mb-4">
                Built with a modern, scalable stack designed for performance and maintainability:
              </p>
              <div className="bg-muted p-8 rounded-xl border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-foreground mb-3 flex items-center">
                      <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Frontend
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Next.js 14 (App Router)</li>
                      <li>• TypeScript for type safety</li>
                      <li>• TailwindCSS for styling</li>
                      <li>• Server & Client Components</li>
                      <li>• Responsive design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3 flex items-center">
                      <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                      Backend
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Prisma ORM</li>
                      <li>• PostgreSQL database</li>
                      <li>• Redis for caching</li>
                      <li>• API Routes (REST)</li>
                      <li>• Server Actions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Automation */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold mb-8">
            AI & <span className="text-accent">Automation</span>
          </h2>
          <div className="space-y-6 text-foreground/70">
            <p>
              EmptyBot and autonomous sub-agents handled the entire development lifecycle:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Code Generation</h3>
                <p className="text-sm">Automated scaffolding, component creation, and API endpoint generation with type-safe patterns.</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Testing & QA</h3>
                <p className="text-sm">Continuous testing of features, edge cases, and performance bottlenecks throughout development.</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Deployment</h3>
                <p className="text-sm">Automated builds, zero-downtime deployments to Vercel, and continuous monitoring.</p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Documentation</h3>
                <p className="text-sm">Automatic generation of technical docs, API references, and deployment guides.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold mb-8">
            Results & <span className="text-accent">Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-8 bg-muted rounded-xl border border-border">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-foreground/70">AI-Powered Development</div>
            </div>
            <div className="text-center p-8 bg-muted rounded-xl border border-border">
              <div className="text-4xl font-bold text-accent mb-2">Fast</div>
              <div className="text-foreground/70">Sub-second Load Times</div>
            </div>
            <div className="text-center p-8 bg-muted rounded-xl border border-border">
              <div className="text-4xl font-bold text-accent mb-2">Modern</div>
              <div className="text-foreground/70">Latest Tech Stack</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Production-ready application deployed on Vercel with automatic CI/CD</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mobile-responsive design working seamlessly across all devices</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>High-performance architecture with PostgreSQL + Redis caching</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Type-safe codebase with comprehensive TypeScript coverage</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Scalable architecture ready for thousands of concurrent users</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack Deep Dive */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold mb-8">
            Technology <span className="text-accent">Choices</span>
          </h2>
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">Why Next.js 14?</h3>
              <p className="text-foreground/70">
                Server Components, App Router, and built-in optimizations provide exceptional performance 
                and developer experience. Perfect for building fast, SEO-friendly financial dashboards.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">Why TypeScript?</h3>
              <p className="text-foreground/70">
                Type safety prevents bugs before they reach production. Critical for financial applications 
                where data accuracy and reliability are paramount.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">Why Prisma + PostgreSQL?</h3>
              <p className="text-foreground/70">
                Type-safe database queries, automatic migrations, and PostgreSQL&apos;s reliability 
                ensure data integrity and scalability for growing businesses.
              </p>
            </div>
            <div className="bg-background p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-3">Why Redis?</h3>
              <p className="text-foreground/70">
                Lightning-fast caching for frequently accessed data like exchange rates and user sessions, 
                dramatically improving response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to Build Something Similar?
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Let&apos;s discuss how we can create a custom solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              Start a Project
            </a>
            <a 
              href="/projects" 
              className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              View More Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
