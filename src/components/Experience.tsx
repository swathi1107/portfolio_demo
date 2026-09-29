import React from 'react';
import { Briefcase, Code2, Calendar, MapPin, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { experienceTimeline } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 md:py-24 border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
            04. Practical Exposure
          </p>
          <h2
            id="experience-heading"
            className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Experience & Technical Participation
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Internship training and collaborative problem-solving experiences during my engineering studies.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="mt-12 relative border-l border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experienceTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="relative"
            >
              {/* Timeline Indicator Node */}
              <div
                aria-hidden="true"
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-[#F8F8F6] dark:ring-[#0A0C10]"
              />

              <div className="p-6 rounded-2xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8">
                    {/* Unboxed Metadata Line */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {item.type}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                        {item.duration}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="mt-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                      {item.organization}
                    </h3>

                    <p className="mt-0.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                      {item.type === 'Internship' ? (
                        <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      ) : (
                        <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      )}
                      <span>Position: {item.role}</span>
                    </p>

                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {item.summary}
                    </p>

                    {item.isPlaceholderNote && (
                      <div className="mt-4 p-3.5 rounded-xl bg-[#F8F8F6] dark:bg-[#0A0C10] border border-zinc-200/70 dark:border-zinc-800/80 flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                        <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p className="font-medium text-zinc-800 dark:text-zinc-200">
                            Internship Details Placeholder
                          </p>
                          <p className="mt-0.5">
                            Update duration, project responsibilities, and technologies in{' '}
                            <code className="font-mono text-zinc-800 dark:text-zinc-200">
                              src/data/portfolioData.ts
                            </code>{' '}
                            as internship documentation is finalized.
                          </p>
                        </div>
                      </div>
                    )}

                    <ul className="mt-4 space-y-1.5">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                        >
                          <span className="text-blue-600 dark:text-blue-400 font-mono">
                            –
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      <span>Focus / Technologies:</span>
                      <span className="text-zinc-800 dark:text-zinc-200">
                        {item.technologies.join(' · ')}
                      </span>
                    </div>
                  </div>

                  {/* Right: Experience Photo Slot */}
                  <div className="lg:col-span-4">
                    <SmartImage
                      src={item.imagePath}
                      alt={`${item.organization} — ${item.role}`}
                      forcePlaceholder={!item.isImageUploaded}
                      containerClassName="aspect-[16/10] w-full rounded-xl bg-[#F8F8F6] dark:bg-[#0A0C10]"
                      fallbackTitle={`${item.organization} Photo`}
                      assetHint={item.imagePath}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
