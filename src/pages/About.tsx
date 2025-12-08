import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const experiences = [
    { year: '2025', title: 'Lead Technical Engineer', company: 'DomifyHost' },
    { year: '2024', title: 'Technical Director', company: 'চিন্তাচক্র - Chintachokro' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground scanline">
      <Navbar />
      
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="px-6 mb-20">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xs text-silver mb-3">// about</p>
            <h1 className="text-4xl md:text-5xl mb-6">
              <span className="text-silver">&gt;</span> whoami
              <span className="terminal-cursor" />
            </h1>
          </div>
        </section>

        {/* Bio Section */}
        <section className="px-6 mb-20">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="border border-border p-6 bg-card">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  <span className="text-xs text-muted-foreground ml-2">profile.json</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-silver" />
                    <span className="text-muted-foreground">"role":</span>
                    <span>"Developer & Tech Enthusiast"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-silver" />
                    <span className="text-muted-foreground">"location":</span>
                    <span>"Munshiganj Bangladesh"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-silver" />
                    <span className="text-muted-foreground">"status":</span>
                    <span className="text-foreground">"available"</span>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="text-silver">//</span> I'm a passionate web designer who loves 
                  building things.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-silver">//</span> I create secure, elegant, and user-friendly 
                  digital experiences. I believe in clean code, intuitive design, 
                  and continuous learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="px-6 py-20 bg-muted/20 mb-20">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-10">
              <p className="text-xs text-silver mb-3">// skills</p>
              <h2 className="text-2xl md:text-3xl">
                <span className="text-silver">&gt;</span> list_skills()
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { skill: 'Python', level: 90 },
                { skill: 'WordPress', level: 95 },
                { skill: 'JavaScript', level: 50 },
                { skill: 'HTML/CSS', level: 95 },
                { skill: 'Dart', level: 80 },
                { skill: 'Flutter', level: 80 },                
                { skill: 'SQL', level: 70 },
                { skill: 'Cyber Security', level: 75 },
              ].map((item) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.skill}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="h-px bg-border">
                    <div 
                      className="h-full bg-silver transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="mb-10">
              <p className="text-xs text-silver mb-3">// experience</p>
              <h2 className="text-2xl md:text-3xl">
                <span className="text-silver">&gt;</span> work_history()
              </h2>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="group flex gap-6 p-6 border border-border bg-card hover:border-silver/50 transition-all duration-300"
                >
                  <div className="text-sm text-muted-foreground min-w-[60px]">
                    {exp.year}
                  </div>
                  <div>
                    <h3 className="mb-1">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
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

export default About;
