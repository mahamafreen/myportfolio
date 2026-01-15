import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const socialItems = [
    { icon: <Github size={20} />, label: 'GitHub', href: SOCIAL_LINKS.github },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
    { icon: <Instagram size={20} />, label: 'Instagram', href: SOCIAL_LINKS.instagram },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
          <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-50px] right-[-50px] w-60 h-60 bg-secondary/20 rounded-full blur-[100px]" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-5xl font-serif font-bold text-textPrimary mb-6">Let's build <br /> something great.</h2>
              <p className="text-textSecondary text-lg mb-12">
                Whether you have a specific project in mind or just want to explore possibilities, my inbox is always open.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center border border-border">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-textSecondary">Email Me</p>
                    <p className="text-textPrimary font-bold">{SOCIAL_LINKS.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8">
                  {socialItems.map((soc, i) => (
                    <motion.a
                      key={i}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      onClick={(e) => {
                        // Ensure it doesn't trigger any parent form behaviors or page scrolls
                        e.stopPropagation();
                      }}
                      className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-textSecondary hover:text-primary hover:border-primary transition-all cursor-pointer"
                      title={soc.label}
                    >
                      {soc.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-textSecondary ml-2">Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-surface/50 border border-border rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-textSecondary ml-2">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-surface/50 border border-border rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-textSecondary ml-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-surface/50 border border-border rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 bg-primary hover:bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === 'success' ? (
                  "Message Sent!"
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;