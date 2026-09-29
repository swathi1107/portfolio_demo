import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { educationTimeline } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-20 md:py-24 border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
            06. Academic Background
          </p>
          <h2
            id="education-heading"
            className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Academic progression from secondary schooling to undergraduate Computer Science Engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="mt-12 relative border-l border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {educationTimeline.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="relative"
            >
              {/* Timeline Node */}
              <div
                aria-hidden="true"
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-[#F8F8F6] dark:ring-[#0A0C10]"
              />

              <div className="p-6 rounded-2xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {edu.location}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <GraduationCap
                      className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{edu.degree}</span>
                  </h3>

                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {edu.institution}
                  </p>

                  {edu.highlights.length > 0 && (
                    <ul className="pt-2 space-y-1">
                      {edu.highlights.map((item) => (
                        <li
                          key={item}
                          className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                        >
                          <span className="text-blue-600 dark:text-blue-400 font-mono">
                            –
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Academic Score / CGPA Metric Block (Tabular Numerals) */}
                <div className="md:text-right shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-zinc-100 dark:border-zinc-800">
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {edu.metricLabel}
                  </p>
                  <p className="mt-0.5 text-2xl sm:text-3xl font-bold font-mono tabular-nums text-zinc-900 dark:text-zinc-100">
                    {edu.metricValue}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
