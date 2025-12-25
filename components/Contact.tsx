import React, { useState } from 'react';
import SectionContainer from './ui/SectionContainer';
import { SOCIAL_LINKS } from '../constants';
import { Send, CheckCircle, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formState);
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionContainer id="contact" className="bg-surface dark:bg-[#141218]">
      <div className="bg-primary-container dark:bg-[#2B2930] rounded-[3rem] p-8 md:p-12 overflow-hidden relative">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#141218] rounded-full text-sm font-bold tracking-wide uppercase text-primary mb-6">
                <Mail size={16} />
                <span>Get in touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Let's start a conversation
              </h2>
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider opacity-60">Connect on</h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 rounded-full bg-white dark:bg-[#141218] text-slate-900 dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                    >
                      <Icon size={20} />
                      <span className="font-medium">{link.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[#141218] p-8 md:p-10 rounded-[2rem] shadow-xl shadow-primary-container/20">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-300">Thanks for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 ml-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#2B2930] border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-[#141218] text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400"
                    placeholder="What's your name?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#2B2930] border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-[#141218] text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400"
                    placeholder="Where can I reach you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 ml-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#2B2930] border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-[#141218] text-slate-900 dark:text-white outline-none transition-all resize-none placeholder:text-slate-400"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 px-8 py-4 rounded-full bg-primary hover:bg-primary-container hover:text-primary-onContainer text-white font-bold text-lg shadow-lg shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;