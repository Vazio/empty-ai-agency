export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Dashboard Financeiro Angola",
      slug: "dashboard-financeiro",
      description: "A comprehensive financial management platform built for the Angolan market with real-time analytics and multi-currency support.",
      category: "Fintech",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/placeholder-dashboard.jpg",
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Case <span className="text-accent">Studies</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Deep dives into the projects we&apos;ve built, the challenges we&apos;ve solved, and the impact we&apos;ve delivered.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <a
              key={index}
              href={`/case-studies/${study.slug}`}
              className="group bg-muted rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="bg-background border-b border-border h-64 flex items-center justify-center">
                <div className="text-center text-foreground/50">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-sm">Screenshots coming soon</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {study.title}
                </h2>
                <p className="text-foreground/70 mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-background text-foreground/70 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}

          {/* Coming Soon Card */}
          <div className="bg-muted rounded-2xl overflow-hidden border border-border border-dashed">
            <div className="h-full flex flex-col items-center justify-center p-12 text-center">
              <svg className="w-16 h-16 text-foreground/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 className="text-2xl font-bold mb-3 text-foreground/70">More Coming Soon</h3>
              <p className="text-foreground/50">
                We&apos;re working on exciting new projects. Check back soon for more case studies.
              </p>
            </div>
          </div>
        </div>

        {/* Why Case Studies Matter */}
        <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-2xl p-12 border border-accent/20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why We Share Our <span className="text-accent">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-foreground/70">
                We believe in showing our process, challenges, and solutions openly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Learning</h3>
              <p className="text-foreground/70">
                Every project teaches us something new that we can apply to future work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <p className="text-foreground/70">
                Demonstrating real-world results helps future clients understand our capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
