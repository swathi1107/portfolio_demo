import React from 'react';
import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

interface HeroProps {
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative pt-10 pb-20 md:pt-16 md:pb-28 border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Introduction & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-4">
              <span>{personalInfo.degree}</span>
              <span aria-hidden="true">·</span>
              <span>{personalInfo.semester}</span>
              <span aria-hidden="true">·</span>
              <span>{personalInfo.location}</span>
            </div>

            {/* Greeting */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.12] [text-wrap:balance]">
              {personalInfo.heroGreeting}
            </h1>

            {/* Role Heading */}
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 tracking-tight">
              {personalInfo.roleTitle}
            </p>

            {/* Honest Sub-roles */}
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span>Aspiring Software Developer</span>
              <span aria-hidden="true">·</span>
              <span>Student Developer</span>
              <span aria-hidden="true">·</span>
              <span>Currently learning and building practical projects</span>
            </div>

            {/* Short Description */}
            <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[60ch]">
              {personalInfo.heroTagline}
            </p>

            {/* Primary CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white dark:bg-[#12151C] text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-400 transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Direct Social Links from Existing Portfolio */}
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Github className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <span>{personalInfo.contact.email}</span>
              </a>
            </div>

            {/* Core Technology Strip (Unboxed Typography with · separators) */}
            <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 w-full">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                Core Technologies & Academic Profile
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2.5 text-sm font-mono font-medium text-zinc-800 dark:text-zinc-200">
                  {personalInfo.heroTechStack.map((tech, index) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {index < personalInfo.heroTechStack.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="text-zinc-400 dark:text-zinc-600"
                        >
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs font-mono tabular-nums text-zinc-600 dark:text-zinc-400">
                  <span>{personalInfo.institution}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    CGPA {personalInfo.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Professional Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[350px] sm:max-w-[380px]">
              {/* Subtle architectural offset frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-2.5 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 translate-x-2 translate-y-2 pointer-events-none"
              />

              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#12151C] border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <SmartImage
                  src={personalInfo.profileImage}
                  alt={`Portrait of ${personalInfo.fullName}, Computer Science Engineering Student`}
                  eager={true}
                  containerClassName="aspect-[3/4] w-full bg-zinc-100 dark:bg-zinc-900"
                  className="w-full h-full object-cover object-top"
                  fallbackTitle={`${personalInfo.fullName} — Portrait`}
                  assetHint="/assets/profile.jpg"
                />

                {/* Clean bottom caption bar */}
                <div className="px-5 py-3.5 bg-white dark:bg-[#12151C] border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {personalInfo.fullName}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      B.E. CSE ({personalInfo.batchYears}) · 5th Sem
                    </p>
                  </div>
                  <span className="text-xs font-mono tabular-nums text-zinc-600 dark:text-zinc-400">
                    CGPA {personalInfo.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
