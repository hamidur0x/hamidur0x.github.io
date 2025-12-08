import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scanline">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-sm text-muted-foreground">
                <span className="text-silver">&gt;</span> initializing portfolio...
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-gradient">Web Designer</span>
              <br />
              <span className="text-muted-foreground">&amp; Developer</span>
            </h1>
            
            <p className="text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <span className="text-silver">//</span> Specializing in Python, Web Development, 
              and Cybersecurity. Building secure, elegant, and user-focused digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background text-sm font-medium hover:glow-subtle transition-all duration-300"
              >
                <span className="text-silver-dark">&gt;</span>
                view_projects()
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 border border-border text-foreground text-sm hover:border-silver transition-all duration-300"
              >
                <span className="text-silver">&gt;</span>
                contact()
              </Link>
            </div>

            <div className="mt-16 text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <p><span className="text-silver">//</span> system ready</p>
            </div>
          </div>

          <a 
            href="#featured" 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </section>

        {/* Featured Section */}
        <section id="featured" className="py-24 px-6 border-t border-border">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs text-silver mb-3">// about</p>
                <h2 className="text-3xl md:text-4xl mb-6">
                  <span className="text-silver">&gt;</span> whoami
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Developer with expertise in Python, HTML, CSS, JavaScript, 
                  WordPress, SQL, and Cybersecurity. Creating secure and 
                  elegant digital solutions.
                </p>
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm text-silver hover:text-foreground transition-colors"
                >
                  <span>&gt;</span> read_more() <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              
              <div className="border border-border p-8 bg-card">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span className="text-xs text-muted-foreground ml-2">stats.sh</span>
                </div>
                <div className="space-y-3 text-sm">
                  <p><span className="text-silver">experience:</span> 5+ years</p>
                  <p><span className="text-silver">projects:</span> 50+</p>
                  <p><span className="text-silver">status:</span> <span className="text-foreground">available</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="text-xs text-silver mb-3">// skills</p>
              <h2 className="text-3xl md:text-4xl">
                <span className="text-silver">&gt;</span> tech_stack
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Python', 'JavaScript', 'WordPress', 'SQL', 'Cyber Security', 'Web Design'].map((skill, index) => (
                <div 
                  key={skill}
                  className="group p-6 border border-border bg-card hover:border-silver/50 transition-all duration-300 hover-lift"
                >
                  <p className="text-xs text-muted-foreground mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 border-t border-border">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-xs text-silver mb-3">// collaborate</p>
            <h2 className="text-3xl md:text-4xl mb-6">
              <span className="text-silver">&gt;</span> start_project()
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Have a project in mind? Let's build something exceptional together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium hover:glow-subtle transition-all duration-300"
            >
              <span className="text-silver-dark">&gt;</span>
              init_contact()
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
