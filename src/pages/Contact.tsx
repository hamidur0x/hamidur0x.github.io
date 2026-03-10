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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'hamidursohan10@gmail.com',
          subject: `New message from ${formData.name}`,
          html: `
            <div style="font-family: monospace; padding: 24px; background: #0a0a0a; color: #e0e0e0; border: 1px solid #333;">
              <h2 style="color: #fff; margin-bottom: 20px;">&gt; new_message_received()</h2>
              <p><span style="color: #888;">name:</span> ${formData.name}</p>
              <p><span style="color: #888;">email:</span> <a href="mailto:${formData.email}" style="color: #aaa;">${formData.email}</a></p>
              <p><span style="color: #888;">message:</span></p>
              <p style="border-left: 2px solid #444; padding-left: 12px; margin-left: 8px;">${formData.message}</p>
            </div>
          `,
        }),
      });

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "I'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socials = [
    { icon: Mail, label: 'email', value: 'hamidursohan10@gmail.com', href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hamidursohan10.@gmail.com' },
    { icon: Github, label: 'github', value: 'github.com/hamidur0x', href: 'https://github.com/hamidur0x' },
    { icon: Linkedin, label: 'linkedin', value: 'linkedin.com/in/hamidur0x', href: 'https://www.linkedin.com/in/hamidur0x/' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground scanline">
      <Navbar />
      
      <main className="pt-28 pb-20">
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

        <section className="px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
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
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-3 bg-foreground text-background py-3 text-sm font-medium hover:glow-subtle transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="text-silver-dark">&gt;</span>
                      {isLoading ? 'sending...' : 'send_message()'}
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