import React from 'react';
import {
  FileCode2,
  Terminal,
  Cpu,
  Database,
  Layers,
  Table2,
  Network,
  Boxes,
  HardDrive,
  Server,
  GitBranch,
  FolderGit2,
  Code,
  Laptop,
} from 'lucide-react';
import { motion } from 'motion/react';
import { skillCategories } from '../data/portfolioData';

const skillIconMap: Record<string, React.ReactNode> = {
  FileCode2: <FileCode2 className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Terminal: <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Cpu: <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Database: <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Layers: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Table2: <Table2 className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Network: <Network className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Boxes: <Boxes className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  HardDrive: <HardDrive className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Server: <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  GitBranch: <GitBranch className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  FolderGit2: <FolderGit2 className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Code: <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
  Laptop: <Laptop className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
};

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 md:py-24 border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
            02. Technical Foundation
          </p>
          <h2
            id="skills-heading"
            className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Skills & Core Competencies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Programming languages, database technologies, core computer science subjects, and development tools practiced through coursework and projects.
          </p>
        </div>

        {/* 4 Skill Category Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80"
            >
              <div className="pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {category.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {category.description}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-[#F8F8F6] dark:bg-[#0A0C10] border border-zinc-200/60 dark:border-zinc-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors duration-150"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-center shrink-0">
                        {skillIconMap[skill.iconName] || (
                          <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {skill.name}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
