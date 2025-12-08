import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import project images
import HackBookImage from '@/components/hackbook.png';

const Projects = () => {
  const projects = [
    {
      title: 'HackBook',
      description: 'Search, browse, and add security tools --- all in one place. HackBook is designed for ethical hackers, CTF players, cybersecurity learners, and professionals who want a fast, organized way to discover and manage security tools.',
      tech: ['HTML', 'CSS', 'JAVASCRIPT'],
      github: 'https://github.com/HackBooks/hackbooks.github.io.git',
      live: 'https://hackbooks.github.io/',
      featured: true,
      image: HackBookImage,
    },
    {
      title: 'Chintachokro Site Development',
      description: 'A fully responsive website built with WordPress for a local business, featuring custom themes and plugins to enhance user experience.',
      tech: ['WordPress'],
      live: 'https://chintachokro.com/',
      featured: true,
      image: ChintachokroImage,
    },
    {
      title: 'Thinkspirestudio Site Development',
      description: 'A fully responsive website built with WordPress for a local business, featuring custom themes and plugins to enhance user experience.',
      tech: ['WordPress'],
      live: 'https://thinkspirestudio.com/',
      featured: true,
      image: ThinkspirestudioImage,
    },
    {
      title: 'Asset Skills Competition Calculator',
      description: 'This code was developed as part of the Asset Skills Competition held at Munshigonj Polytechnic Institute.',
      tech: ['Python'],
      github: 'https://github.com/hamidur0x/Rsset-skills-competition-calculator.git',
      live: '#',
      featured: false,
      image: AssetCalculatorImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground scanline">
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="px-6 mb-20">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xs text-silver mb-3">// Hamidur Rahman</p>
            <h1 className="text-4xl md:text-5xl mb-6">
              <span className="text-silver">&gt;</span> ls ./projects
              <span className="terminal-cursor" />
            </h1>
            <p className="text-muted-foreground max-w-xl">
              <span className="text-silver">//</span> A collection of work showcasing expertise.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="px-6 mb-20">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs text-silver mb-6">// featured</p>

            <div className="space-y-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <div
                  key={project.title}
                  className="border border-border bg-card p-6 hover:border-silver/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                    <span className="text-xs text-muted-foreground ml-2">
                      project_{String(index + 1).padStart(2, '0')}.md
                    </span>
                    <div className="ml-auto flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.live && project.live !== '#' && (
                        <a
                          href={project.live}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View Live"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover border border-border rounded aspect-video"
                    />

                    <div>
                      <h2 className="text-xl mb-3">{project.title}</h2>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-muted text-muted-foreground border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="px-6">
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs text-silver mb-6">// other projects</p>

            <div className="grid md:grid-cols-2 gap-4">
              {projects.filter(p => !p.featured).map((project, index) => (
                <div
                  key={project.title}
                  className="group p-6 border border-border bg-card hover:border-silver/50 transition-all duration-300 hover-lift"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Folder className="w-5 h-5 text-silver" />
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.live && project.live !== '#' && (
                        <a
                          href={project.live}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View Live"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4 border border-border rounded"
                  />

                  <h3 className="mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
