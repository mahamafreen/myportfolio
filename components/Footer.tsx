
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-serif font-bold text-textPrimary mb-4 md:mb-0">
          M<span className="text-primary">.</span>
        </div>
        
        <div className="text-textSecondary text-sm font-light">
          &copy; {currentYear} Maham Afreen. Created with precision and passion.
        </div>

        <div className="mt-4 md:mt-0 flex space-x-6 text-xs uppercase tracking-widest font-bold text-textSecondary">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Status</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
