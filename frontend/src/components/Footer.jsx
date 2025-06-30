import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GM</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
                Gwendolyn Malachias
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              IT Strategy & Optimization Consultant specializing in cybersecurity, infrastructure modernization, and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link to="/experience" className="text-muted-foreground hover:text-blue-600 transition-colors">Experience</Link></li>
              <li><Link to="/education" className="text-muted-foreground hover:text-blue-600 transition-colors">Education</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-blue-600 transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/g-seabra-malachias-2bb609199/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@gwendolynmalachias.com"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Gwendolyn Micahella Malachias. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;