import { useTranslations } from 'next-intl';

export default function DashboardFinanceiroAngolaProject() {
  const t = useTranslations('projects');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Angola Color Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-angola-red/5 via-transparent to-angola-yellow/5 pointer-events-none" />
        
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12 py-20 text-center">
          {/* Back Link */}
          <a 
            href="../projects" 
            className="inline-flex items-center text-angola-yellow hover:text-angola-yellow-light mb-12 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </a>

          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-angola-red text-white rounded-full font-semibold text-sm">
              Featured Project
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in">
            Dashboard Financeiro
            <br />
            <span className="text-angola-yellow">Angola</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light text-white/80 mb-12 max-w-4xl mx-auto">
            A premium financial management platform built with cutting-edge technology for the Angolan market
          </p>

          {/* Dashboard Screenshot - Placeholder with elevation */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <svg className="w-32 h-32 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-lg font-medium">Dashboard Preview</p>
                  <p className="text-sm">Real-time financial analytics interface</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Project Overview - 3 Columns */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-8 md:p-10 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-sm font-semibold text-angola-red uppercase tracking-wide mb-4">Challenge</h3>
              <p className="text-foreground/70 leading-relaxed">
                Angolan businesses needed a modern, localized financial management solution with real-time insights, multi-currency support (AOA, USD, EUR), and intuitive dashboards accessible from any device.
              </p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-8 md:p-10 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-sm font-semibold text-angola-red uppercase tracking-wide mb-4">Solution</h3>
              <p className="text-foreground/70 leading-relaxed">
                Built a full-stack web platform with Next.js 14, TypeScript, Prisma, and PostgreSQL. Autonomous AI agents handled development, testing, and deployment, delivering enterprise-grade quality in record time.
              </p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-8 md:p-10 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-sm font-semibold text-angola-red uppercase tracking-wide mb-4">Impact</h3>
              <p className="text-foreground/70 leading-relaxed">
                Production-ready platform deployed on Vercel with automatic CI/CD, real-time data updates, sub-second load times, and scalable architecture ready for thousands of users across Angola.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Premium Layout */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
            Technology <span className="text-accent">Stack</span>
          </h2>

          <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Frontend */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Frontend</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="font-semibold text-lg">Next.js 14</span>
                    <span className="ml-auto text-foreground/60 text-sm">App Router</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="font-semibold text-lg">TypeScript</span>
                    <span className="ml-auto text-foreground/60 text-sm">Type Safety</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="font-semibold text-lg">React 19</span>
                    <span className="ml-auto text-foreground/60 text-sm">Server Components</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="font-semibold text-lg">TailwindCSS</span>
                    <span className="ml-auto text-foreground/60 text-sm">Styling</span>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Backend & Data</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="font-semibold text-lg">Prisma ORM</span>
                    <span className="ml-auto text-foreground/60 text-sm">Type-safe DB</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="font-semibold text-lg">PostgreSQL</span>
                    <span className="ml-auto text-foreground/60 text-sm">Reliability</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="font-semibold text-lg">Redis</span>
                    <span className="ml-auto text-foreground/60 text-sm">Caching</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="font-semibold text-lg">Vercel</span>
                    <span className="ml-auto text-foreground/60 text-sm">Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Card Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
            Core <span className="text-angola-red">Features</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {[
              {
                title: "Real-Time Dashboard",
                description: "Live financial metrics, cash flow visualization, and KPIs updated in real-time with WebSocket connections.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              {
                title: "Multi-Currency Support",
                description: "Native AOA support with automatic exchange rate updates for USD, EUR, and major currencies.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Transaction Management",
                description: "Track income, expenses, and transfers with smart categorization, tagging, and search capabilities.",
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              },
              {
                title: "Analytics & Reports",
                description: "Automated financial reports, trend analysis, profit/loss statements, and customizable visualizations.",
                icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              },
              {
                title: "Smart Notifications",
                description: "Intelligent alerts for important transactions, budget thresholds, and financial milestones.",
                icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              },
              {
                title: "Mobile Responsive",
                description: "Seamless experience across desktop, tablet, and mobile devices with touch-optimized interfaces.",
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-angola-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
            Challenges & <span className="text-angola-red">Solutions</span>
          </h2>

          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-10 h-10 bg-angola-red text-white rounded-xl flex items-center justify-center mr-4 text-lg font-bold">1</span>
                Complex Currency Handling
              </h3>
              <div className="ml-14">
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  <strong className="text-foreground">Challenge:</strong> Managing multiple currencies (AOA, USD, EUR) with real-time exchange rates, proper rounding, and historical data.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <strong className="text-foreground">Solution:</strong> Implemented Redis caching for exchange rates, PostgreSQL for historical data, and TypeScript-safe currency conversion utilities with decimal precision.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-10 h-10 bg-angola-red text-white rounded-xl flex items-center justify-center mr-4 text-lg font-bold">2</span>
                Performance at Scale
              </h3>
              <div className="ml-14">
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  <strong className="text-foreground">Challenge:</strong> Ensuring fast load times and real-time updates even with thousands of transactions and multiple concurrent users.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <strong className="text-foreground">Solution:</strong> Next.js Server Components for efficient rendering, PostgreSQL indexing strategies, Redis for hot data, and optimized SQL queries via Prisma.
                </p>
              </div>
            </div>

            <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-10 h-10 bg-angola-red text-white rounded-xl flex items-center justify-center mr-4 text-lg font-bold">3</span>
                AI-Powered Development
              </h3>
              <div className="ml-14">
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  <strong className="text-foreground">Challenge:</strong> Delivering enterprise-quality code with rapid iteration cycles and comprehensive testing.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <strong className="text-foreground">Solution:</strong> EmptyBot autonomous agents handled scaffolding, component creation, database migrations, testing, and deployment—achieving 100% AI-powered development workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results - Metrics */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-angola-red/10 via-transparent to-angola-yellow/10 pointer-events-none" />
        
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
            Results & <span className="text-angola-yellow">Impact</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16">
            <div className="text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-angola-yellow mb-4">100%</div>
              <div className="text-xl text-white/80">AI-Powered Development</div>
            </div>
            <div className="text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-angola-yellow mb-4">&lt;1s</div>
              <div className="text-xl text-white/80">Sub-Second Load Times</div>
            </div>
            <div className="text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-angola-yellow mb-4">24/7</div>
              <div className="text-xl text-white/80">Production Ready</div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Production-ready deployment on Vercel with automatic CI/CD",
                "Mobile-responsive design working seamlessly across all devices",
                "High-performance architecture with PostgreSQL + Redis caching",
                "Type-safe codebase with comprehensive TypeScript coverage",
                "Scalable infrastructure ready for thousands of concurrent users",
                "Real-time data synchronization with WebSocket connections"
              ].map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-angola-yellow mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-white/90">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Style */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your <span className="text-angola-red">Next Project</span>?
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed">
            Let's create something extraordinary together. From concept to deployment, we deliver enterprise-grade solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="../../contact" 
              className="px-10 py-4 bg-angola-red hover:bg-angola-red-dark text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
            <a 
              href="../projects" 
              className="px-10 py-4 border-2 border-angola-red text-angola-red hover:bg-angola-red hover:text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View More Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
