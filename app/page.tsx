export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-accent">AI-Powered</span> Solutions
            <br />
            for Angola
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
            Building scalable technology solutions with autonomous agents, modern frameworks, and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/projects" 
              className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              View Our Work
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We <span className="text-accent">Build</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Automation</h3>
              <p className="text-foreground/70">
                Autonomous agent workflows that handle complex tasks, from data processing to customer interactions.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-foreground/70">
                Modern web applications with Next.js, TypeScript, Prisma, PostgreSQL, and Redis for blazing-fast performance.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Scalable Solutions</h3>
              <p className="text-foreground/70">
                Cloud-native architecture designed to grow with your business, from MVP to enterprise scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured <span className="text-accent">Project</span>
          </h2>
          <div className="bg-muted rounded-2xl overflow-hidden border border-border hover:border-accent transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">Dashboard Financeiro Angola</h3>
                <p className="text-lg text-foreground/70 mb-6">
                  A comprehensive financial management platform built for the Angolan market, featuring real-time data visualization, multi-currency support, and intelligent insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Next.js 14</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Prisma</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">PostgreSQL</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Redis</span>
                </div>
                <a 
                  href="/case-studies/dashboard-financeiro" 
                  className="inline-flex items-center text-accent hover:text-accent-dark font-semibold"
                >
                  Read Case Study
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="bg-background rounded-lg border border-border flex items-center justify-center p-8">
                <div className="text-center text-foreground/50">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Screenshots coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-accent">Tech Stack</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Next.js', 'TypeScript', 'React', 'Prisma', 'PostgreSQL', 'Redis', 'TailwindCSS', 'Node.js', 'Vercel', 'Git', 'REST APIs', 'AI Agents'].map((tech) => (
              <div key={tech} className="bg-background p-6 rounded-lg border border-border text-center hover:border-accent transition-colors">
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something <span className="text-accent">Amazing</span>?
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            Let&apos;s discuss how we can help bring your vision to life with cutting-edge technology.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
