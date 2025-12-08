import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    { icon: Mail, label: 'email', value: 'your@email.com', href: 'mailto:your@email.com' },
    { icon: Github, label: 'github', value: 'github.com/yourname', href: 'https://github.com' },
    { icon: Linkedin, label: 'linkedin', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground scanline">
      <Navbar />
      
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="px-6 mb-20">
          <div className="container mx-auto max-w-4xl">
            <p className="text-xs text-silver mb-3">// contact</p>
            <h1 className="text-4xl md:text-5xl mb-6">
              <span className="text-silver">&gt;</span> init_contact()
              <span className="terminal-cursor" />
            </h1>
            <p className="text-muted-foreground max-w-xl">
              <span className="text-silver">//</span> Have a project in mind? 
              Let's build something together.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Social Links */}
              <div>
                <p className="text-xs text-silver mb-6">// connect</p>
                
                <div className="space-y-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 border border-border bg-card hover:border-silver/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <social.icon className="w-4 h-4 text-silver" />
                        <div>
                          <p className="text-xs text-muted-foreground">{social.label}:</p>
                          <p className="text-sm">{social.value}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  ))}
                </div>

                <div className="mt-8 p-4 border border-border bg-card">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-silver">//</span> Response time: ~24 hours
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="border border-border bg-card">
                  <div className="flex items-center gap-2 p-4 border-b border-border">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                    <span className="text-xs text-muted-foreground ml-2">message.sh</span>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div>
                      <label className="block text-xs text-muted-foreground mb-2">
                        <span className="text-silver">&gt;</span> name:
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-muted border border-border p-3 text-sm text-foreground focus:border-silver/50 focus:outline-none transition-colors"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-muted-foreground mb-2">
                        <span className="text-silver">&gt;</span> email:
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-muted border border-border p-3 text-sm text-foreground focus:border-silver/50 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-muted-foreground mb-2">
                        <span className="text-silver">&gt;</span> message:
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full bg-muted border border-border p-3 text-sm text-foreground focus:border-silver/50 focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 bg-foreground text-background py-3 text-sm font-medium hover:glow-subtle transition-all duration-300"
                    >
                      <span className="text-silver-dark">&gt;</span>
                      send_message()
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
