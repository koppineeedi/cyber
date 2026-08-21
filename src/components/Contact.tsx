import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR' | 'UNCONFIGURED'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-5 h-5" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== 'IDLE') {
      setStatus('IDLE');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (formData.name.trim().length < 2 || formData.name.trim().length > 100) {
      setStatus('ERROR');
      setErrorMessage('Please enter a valid name (2 to 100 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('ERROR');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (formData.subject.trim().length < 2 || formData.subject.trim().length > 150) {
      setStatus('ERROR');
      setErrorMessage('Subject must be between 2 and 150 characters.');
      return;
    }

    if (formData.message.trim().length < 10 || formData.message.trim().length > 5000) {
      setStatus('ERROR');
      setErrorMessage('Message must be between 10 and 5000 characters.');
      return;
    }

    setStatus('SENDING');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.unconfigured || response.status === 530 || response.status === 503) {
        setStatus('UNCONFIGURED');
        setErrorMessage('Email service is not configured yet. Please email me directly.');
      } else {
        setStatus('ERROR');
        setErrorMessage(data.error || 'Something went wrong. Please try again or email me directly.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      // Fallback for unconfigured backend / static preview mode
      setStatus('UNCONFIGURED');
      setErrorMessage('Email service is not configured yet. Please email me directly.');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="GET IN TOUCH"
          title="Let's Connect"
          subtitle="Interested in cybersecurity, security operations, internships, collaboration, or career opportunities? Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-start">
          {/* Left Column: Contact Cards & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlassCard className="p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold font-heading text-slate-100">
                Contact Details
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block">Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-slate-200 hover:text-cyan-300 font-medium text-sm sm:text-base transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block">Phone</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-slate-200 hover:text-cyan-300 font-medium text-sm sm:text-base transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block">Location</span>
                    <span className="text-slate-200 font-medium text-sm sm:text-base">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/[0.08]">
                <span className="text-xs font-mono text-slate-400 uppercase block mb-3 font-semibold">
                  Social Profiles
                </span>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      aria-label={link.name}
                    >
                      {getSocialIcon(link.iconName)}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase mb-2 font-semibold">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Vance"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase mb-2 font-semibold">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 uppercase mb-2 font-semibold">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Internship Inquiry / SOC Role"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase mb-2 font-semibold">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-cyan-400 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Feedback State Banners */}
                {status === 'SUCCESS' && (
                  <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>✓ Message sent successfully. Thanks for reaching out!</span>
                  </div>
                )}

                {status === 'ERROR' && (
                  <div className="p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-sm flex items-center gap-2.5">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'UNCONFIGURED' && (
                  <div className="p-4 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-sm space-y-3">
                    <div className="flex items-center gap-2.5">
                      <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                          formData.subject || 'Portfolio Inquiry'
                        )}&body=${encodeURIComponent(formData.message)}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Email Me Directly</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'SENDING'}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer disabled:cursor-not-allowed"
                >
                  {status === 'SENDING' ? (
                    <>
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
