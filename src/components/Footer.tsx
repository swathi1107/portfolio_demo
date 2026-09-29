import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const isEmailPlaceholder =
    personalInfo.contact.email === 'YOUR_EMAIL' ||
    !personalInfo.contact.email.includes('@');

  const isLinkedInPlaceholder =
    personalInfo.contact.linkedin === 'YOUR_LINKEDIN' ||
    !personalInfo.contact.linkedin.startsWith('http');

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#12151C] py-12">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {personalInfo.name}
          </p>
          <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-400">
            {personalInfo.roleTitle}
          </p>
        </div>

        {/* Social & Contact Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            <span>GitHub</span>
          </a>

          {isLinkedInPlaceholder ? (
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          ) : (
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          )}

          {isEmailPlaceholder ? (
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Email</span>
            </a>
          ) : (
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Email</span>
            </a>
          )}
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          © 2026 Swathi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
