import React from 'react';
import { GraduationCap, Code2, MapPin, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, aboutCards, AboutCardItem } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

const iconMap: Record<AboutCardItem['iconName'], React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Code2: <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  MapPin: <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Compass: <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
};

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-24 border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
            01. Introduction & Academic Profile
          </p>
          <h2
            id="about-heading"
            className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            About Me
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Bio, Quick Highlights & 4 Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[68ch]">
                {personalInfo.aboutBio}
              </p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[68ch]">
                {personalInfo.aboutGoal}
              </p>
            </div>

            {/* Key Academic & Project Figures (Preserved from existing portfolio with tabular-nums) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-y border-zinc-200/80 dark:border-zinc-800/80 py-5">
              {personalInfo.quickStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-zinc-900 dark:text-zinc-100">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* 4 Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutCards.map((card) => (
                <div
                  key={card.id}
                  className="p-5 rounded-xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-150 hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center shrink-0">
                      {iconMap[card.iconName]}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {card.label}
                      </p>
                      <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {card.value}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {card.subtext}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Secondary Photo Frame */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl overflow-hidden bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80">
              <SmartImage
                src={personalInfo.aboutImage}
                alt={`${personalInfo.fullName} — Computer Science Engineering Student at Alva's Institute of Engineering and Technology`}
                containerClassName="aspect-[4/4] w-full bg-zinc-100 dark:bg-zinc-900"
                className="w-full h-full object-cover object-top"
                fallbackTitle="About Portrait"
                assetHint="/assets/about.jpg"
              />
              <div className="p-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  {personalInfo.fullName}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                  {personalInfo.institution} · {personalInfo.batchYears}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
