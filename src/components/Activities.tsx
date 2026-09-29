import React from 'react';
import { Globe, Cpu, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { activities } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

export const Activities: React.FC = () => {
  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="py-20 md:py-24 border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
            07. Co-Curricular Engagement
          </p>
          <h2
            id="activities-heading"
            className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Beyond the Classroom
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Conferences, hackathons, technical workshops, and sustainability-oriented learning activities.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, idx) => {
            const hasImageSlot = Boolean(activity.imagePath);
            return (
              <motion.article
                key={activity.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400">
                      {activity.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {idx === 0 ? (
                        <Globe className="w-4 h-4" aria-hidden="true" />
                      ) : idx === 1 ? (
                        <Users className="w-4 h-4" aria-hidden="true" />
                      ) : idx === 2 ? (
                        <Cpu className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <BookOpen className="w-4 h-4" aria-hidden="true" />
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {activity.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                      {activity.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                {hasImageSlot && activity.imagePath && (
                  <SmartImage
                    src={activity.imagePath}
                    alt={activity.title}
                    forcePlaceholder={!activity.isImageUploaded}
                    containerClassName="aspect-[16/9] w-full rounded-xl bg-[#F8F8F6] dark:bg-[#0A0C10]"
                    fallbackTitle={`${activity.title} Photo`}
                    assetHint={activity.imagePath}
                  />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
