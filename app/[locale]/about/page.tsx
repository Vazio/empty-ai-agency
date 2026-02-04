export default function About() {
  return (
    <div className="min-h-screen py-16 md:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            About <span className="text-angola-red">Empty AI Agency</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            We&apos;re building the future of software development in <span className="text-angola-red font-semibold">Angola 🇦🇴</span> with AI-powered automation and modern technology.
          </p>
          <p className="text-lg text-foreground/60 mt-4">
            Based in <strong className="text-angola-red">Luanda, Angola</strong>
          </p>
        </div>

        {/* Mission Section - Angola Vision */}
        <section className="mb-16 md:mb-24">
          <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-10 md:p-12 lg:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Our <span className="text-angola-red">Mission</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 text-center max-w-5xl mx-auto leading-relaxed mb-8">
              To empower Angolan businesses with cutting-edge technology solutions that are scalable, 
              intelligent, and tailored to local market needs. We leverage autonomous AI agents, 
              modern frameworks, and best practices to deliver exceptional software faster and more efficiently.
            </p>
            <p className="text-lg text-foreground/60 text-center max-w-4xl mx-auto leading-relaxed">
              Driving <strong className="text-angola-red">Angola's digital transformation</strong>, one project at a time. 
              We believe in building world-class technology solutions right here in Luanda, showcasing 
              Angolan innovation and expertise to the world.
            </p>
          </div>
        </section>

        {/* Team Section - Circular Avatars with Angola Border */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Meet the <span className="text-angola-red">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* EmptyBot */}
            <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-angola-yellow/20 border-4 border-angola-red rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-3">EmptyBot</h3>
              <p className="text-angola-red font-semibold mb-4 text-lg">Lead AI Agent</p>
              <p className="text-foreground/70 leading-relaxed">
                The primary orchestrator behind Empty AI Agency. EmptyBot coordinates development, 
                manages infrastructure, and ensures every project meets our high quality standards. 
                Powered by advanced language models and autonomous decision-making capabilities.
              </p>
            </div>

            {/* Sub-Agents */}
            <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-10 hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-angola-yellow/20 border-4 border-angola-red rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-3">Autonomous Sub-Agents</h3>
              <p className="text-angola-red font-semibold mb-4 text-lg">Specialized AI Workforce</p>
              <p className="text-foreground/70 leading-relaxed">
                A fleet of specialized agents handling specific tasks: code generation, testing, 
                deployment, documentation, and monitoring. Each agent operates independently while 
                collaborating seamlessly to deliver production-ready solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technology <span className="text-accent">Stack</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-muted rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Frontend
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Next.js 14 (App Router)</li>
                <li>• TypeScript</li>
                <li>• React 19</li>
                <li>• TailwindCSS</li>
                <li>• Server Components & SSR</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-muted rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Backend
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Node.js</li>
                <li>• Prisma ORM</li>
                <li>• PostgreSQL</li>
                <li>• Redis (Caching)</li>
                <li>• REST APIs</li>
              </ul>
            </div>

            {/* AI & Automation */}
            <div className="bg-muted rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI & Automation
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Autonomous Agent Workflows</li>
                <li>• LLM Integration</li>
                <li>• Task Orchestration</li>
                <li>• Intelligent Code Generation</li>
                <li>• Automated Testing & Deployment</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="bg-muted rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                DevOps & Cloud
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Vercel (Deployment)</li>
                <li>• Git & GitHub</li>
                <li>• CI/CD Pipelines</li>
                <li>• Docker</li>
                <li>• Cloud Infrastructure</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="bg-gradient-to-br from-accent/5 to-transparent rounded-2xl p-12 border border-accent/20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our <span className="text-accent">Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Understand</h3>
              <p className="text-foreground/70">
                Deep dive into your business needs, challenges, and goals to craft the perfect solution.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Build</h3>
              <p className="text-foreground/70">
                Rapid development with autonomous agents and modern frameworks, delivering working software fast.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Scale</h3>
              <p className="text-foreground/70">
                Deploy on robust infrastructure that grows with you, with continuous monitoring and improvements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Want to Work With Us?
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            We&apos;re always looking for exciting projects and partnerships in <span className="text-angola-red font-semibold">Angola</span> and beyond.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-4 bg-angola-red hover:bg-angola-red-dark text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
