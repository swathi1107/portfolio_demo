import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Info,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const isEmailPlaceholder =
    personalInfo.contact.email === 'YOUR_EMAIL' ||
    !personalInfo.contact.email.includes('@');

  const isLinkedInPlaceholder =
    personalInfo.contact.linkedin === 'YOUR_LINKEDIN' ||
    !personalInfo.contact.linkedin.startsWith('http');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    /**
     * ========================================================================
     * BACKEND / EMAIL SERVICE INTEGRATION POINT
     * ========================================================================
     * To connect this form to an email service (such as Formspree, EmailJS,
     * or a custom backend route), replace the state update below with a
     * `fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', ... })`
     * request.
     */
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                09. Get in Touch
              </p>
              <h2
                id="contact-heading"
                className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                Let's Connect
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                I'm always interested in learning, building projects and connecting with people in technology.
              </p>
            </div>

            {/* Contact Channels List */}
            <div className="space-y-3.5">
              {/* Email */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Email
                  </p>
                  {isEmailPlaceholder ? (
                    <div>
                      <p className="text-sm font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                        {personalInfo.contact.email}
                      </p>
                      <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                        Update <code className="font-mono">contact.email</code> in{' '}
                        <code className="font-mono">src/data/portfolioData.ts</code>
                      </p>
                    </div>
                  ) : (
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      {personalInfo.contact.email}
                    </a>
                  )}
                </div>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    LinkedIn
                  </p>
                  {isLinkedInPlaceholder ? (
                    <div>
                      <p className="text-sm font-mono font-semibold text-zinc-900 dark:text-zinc-100">
                        {personalInfo.contact.linkedin}
                      </p>
                      <p className="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                        Update <code className="font-mono">contact.linkedin</code> in{' '}
                        <code className="font-mono">src/data/portfolioData.ts</code>
                      </p>
                    </div>
                  ) : (
                    <a
                      href={personalInfo.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      <span>{personalInfo.contact.linkedin}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              {/* GitHub */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <Github className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    GitHub
                  </p>
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                  >
                    <span>{personalInfo.contact.github}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Send a Message
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Fill out the form below to draft a message.
              </p>

              {submitted ? (
                <div className="mt-6 p-6 rounded-xl bg-[#F8F8F6] dark:bg-[#0A0C10] border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                    <span>Message Preview Recorded (Frontend-Only Mode)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Because this portfolio currently runs as a static frontend application without a backend mail server configured, your message has been validated locally.
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    Developer Note: Connect Formspree or EmailJS inside{' '}
                    <code>src/components/Contact.tsx</code> (handleSubmit) to enable live email delivery.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#F8F8F6] dark:bg-[#0A0C10] text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="your.email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#F8F8F6] dark:bg-[#0A0C10] text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#F8F8F6] dark:bg-[#0A0C10] text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
                      <span>
                        Frontend form ready for Formspree / EmailJS integration.
                      </span>
                    </p>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
