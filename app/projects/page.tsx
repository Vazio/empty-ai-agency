export default function Projects() {
  const projects = [
    {
      title: "Dashboard Financeiro Angola",
      description: "Comprehensive financial management platform with real-time analytics, multi-currency support, and intelligent insights tailored for the Angolan market.",
      tech: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Redis", "TailwindCSS"],
      status: "Live",
      link: "/case-studies/dashboard-financeiro"
    },
    {
      title: "Future Projects",
      description: "We're constantly working on new innovative solutions. Stay tuned for upcoming projects in AI automation, fintech, and enterprise software.",
      tech: ["AI", "Automation", "Cloud"],
      status: "Coming Soon",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-accent">Projects</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore the solutions we&apos;ve built with cutting-edge technology and intelligent automation.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-muted rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              {/* Project Image Placeholder */}
              <div className="bg-background border-b border-border h-64 flex items-center justify-center">
                <div className="text-center text-foreground/50">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Screenshots coming soon</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400' 
                      : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-foreground/70 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.link !== '#' && (
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-accent hover:text-accent-dark font-semibold"
                  >
                    View Case Study
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="mt-20 bg-muted rounded-2xl p-12 border border-border">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Project <span className="text-accent">Capabilities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-foreground/70">
                End-to-end development from database design to responsive frontend, deployed on cloud infrastructure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">AI Integration</h3>
              <p className="text-foreground/70">
                Autonomous agents and intelligent workflows that automate complex business processes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
              <p className="text-foreground/70">
                Lightning-fast applications with server-side rendering, caching strategies, and optimized data flows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
