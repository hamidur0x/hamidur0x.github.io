import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4 text-silver" />
              <span className="text-sm">~/portfolio</span>
            </div>
            <p className="text-muted-foreground text-sm">
              <span className="text-silver">//</span> Building digital solutions
            </p>
          </div>
          
          <div>
            <p className="text-xs text-silver mb-4">navigation</p>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">./home</Link>
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">./about</Link>
              <Link to="/projects" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">./projects</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">./contact</Link>
            </div>
          </div>

          <div>
            <p className="text-xs text-silver mb-4">connect</p>
            <div className="space-y-2">
              <a href="https://github.com/hamidur0x" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">github</a>
              <a href="https://www.linkedin.com/in/hamidur0x/" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">linkedin</a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hamidursohan10.@gmail.com" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">email</a>
              <a href="https://www.facebook.com/hamidur0x" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">facebook</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} <span className="text-silver">|</span> All rights reserved</p>
          <p><span className="text-silver">//</span> Crafted with precision</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
