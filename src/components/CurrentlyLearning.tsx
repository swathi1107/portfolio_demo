import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { currentlyLearning } from '../data/portfolioData';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section
      id="learning"
      aria-labelledby="learning-heading"
      className="py-20 md:py-24 border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
              08. Active Exploration
            </p>
            <h2
              id="learning-heading"
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              Currently Learning
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Topics, frameworks, and concepts I am currently studying and practicing to expand my foundation as a student developer.
            </p>
          </div>

          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span>Active study areas · Work in progress</span>
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentlyLearning.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.28, delay: idx * 0.03 }}
              className="p-5 rounded-xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span>{item.category}</span>
                  <BookOpen
                    className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-2 text-base font-bold text-zinc-900 dark:text-zinc-100">
                  {item.topic}
                </h3>

                <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.focusNote}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-zinc-100 dark:border-zinc-800/80 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                Status: Currently Studying
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
