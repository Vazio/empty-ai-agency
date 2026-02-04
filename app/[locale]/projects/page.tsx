import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('projects');
  
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
    <div className="min-h-screen py-16 md:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Our <span className="text-angola-red">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Explore the solutions we&apos;ve built with cutting-edge technology and intelligent automation.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-3xl hover:border-angola-red/30 transition-all duration-500"
            >
              {/* Project Image Placeholder */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-b border-gray-200/50 h-80 flex items-center justify-center relative overflow-hidden">
                {project.status === 'Live' && (
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-angola-red text-white rounded-full text-sm font-semibold shadow-lg">
                      {project.status}
                    </span>
                  </div>
                )}
                {project.status !== 'Live' && (
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-angola-yellow text-black rounded-full text-sm font-semibold shadow-lg">
                      {project.status}
                    </span>
                  </div>
                )}
                <div className="text-center text-white/60">
                  <svg className="w-28 h-28 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-base font-medium">Project Screenshots</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-angola-yellow text-black rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.link !== '#' && (
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-angola-red hover:text-angola-red-dark font-bold text-lg transition-all duration-300 group/link"
                  >
                    View Case Study
                    <svg className="w-6 h-6 ml-3 transition-transform duration-300 group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="mt-16 md:mt-24 lg:mt-32 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 shadow-2xl rounded-3xl p-10 md:p-12 lg:p-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Project <span className="text-angola-red">Capabilities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Full-Stack Development</h3>
              <p className="text-foreground/70 leading-relaxed">
                End-to-end development from database design to responsive frontend, deployed on cloud infrastructure.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
              <p className="text-foreground/70 leading-relaxed">
                Autonomous agents and intelligent workflows that automate complex business processes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
              <p className="text-foreground/70 leading-relaxed">
                Lightning-fast applications with server-side rendering, caching strategies, and optimized data flows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
