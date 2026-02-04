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
    <div className="min-h-screen py-16 md:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Case <span className="text-angola-red">Studies</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Deep dives into the projects we&apos;ve built, the challenges we&apos;ve solved, and the impact we&apos;ve delivered.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24">
          {caseStudies.map((study, index) => (
            <a
              key={index}
              href={`/case-studies/${study.slug}`}
              className="group backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-3xl hover:border-angola-red/30 transition-all duration-500"
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
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-angola-red text-white rounded-full text-sm font-semibold">
                    {study.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-angola-red transition-colors">
                  {study.title}
                </h2>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {study.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-angola-yellow text-black rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}

          {/* Coming Soon Card */}
          <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-2 border-gray-200/50 border-dashed shadow-2xl rounded-3xl overflow-hidden">
            <div className="h-full flex flex-col items-center justify-center p-12 text-center">
              <svg className="w-20 h-20 text-angola-yellow mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground/70">More Coming Soon</h3>
              <p className="text-lg text-foreground/60 leading-relaxed">
                We&apos;re working on exciting new projects. Check back soon for more case studies.
              </p>
            </div>
          </div>
        </div>

        {/* Why Case Studies Matter */}
        <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-10 md:p-12 lg:p-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why We Share Our <span className="text-angola-red">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-angola-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p className="text-foreground/70 leading-relaxed">
                We believe in showing our process, challenges, and solutions openly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-angola-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Learning</h3>
              <p className="text-foreground/70 leading-relaxed">
                Every project teaches us something new that we can apply to future work.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-angola-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-angola-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Impact</h3>
              <p className="text-foreground/70 leading-relaxed">
                Demonstrating real-world results helps future clients understand our capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
