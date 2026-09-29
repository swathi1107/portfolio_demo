import React from 'react';
import { Download, FileText, FolderOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

interface ResumeProps {
  onDownloadResume: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onDownloadResume }) => {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="py-20 md:py-24 border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35 }}
          className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400">
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>Academic & Technical Curriculum Vitae</span>
            </div>

            <h2
              id="resume-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              Want to know more about me?
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Take a look at my resume to explore my education, projects, skills and experience.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <FolderOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              <span>File path:</span>
              <code className="text-zinc-800 dark:text-zinc-200">
                /public{personalInfo.resumePdfPath}
              </code>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onDownloadResume}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
