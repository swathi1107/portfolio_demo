import React, { useState, useEffect } from 'react';
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  X,
  CheckCircle2,
  Layers,
  Target,
  AlertCircle,
  Sparkles,
  Clock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  projects,
  ProjectItem,
  ProjectCategory,
} from '../data/portfolioData';
import { SmartImage } from './SmartImage';

const filterCategories: ProjectCategory[] = [
  'All',
  'Java',
  'Python',
  'Database',
  'AI/RAG',
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-24 border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header & Interactive Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
              03. Technical Portfolio
            </p>
            <h2
              id="projects-heading"
              className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
            >
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Projects I have built while learning and applying my technical skills.
            </p>
          </div>

          {/* Interactive Filter Bar (Functional Segmented Buttons) */}
          <div
            role="tablist"
            aria-label="Filter projects by technology"
            className="flex flex-wrap items-center gap-1 p-1.5 rounded-xl bg-zinc-200/70 dark:bg-[#12151C] border border-zinc-200 dark:border-zinc-800 self-start"
          >
            {filterCategories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    isSelected
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isDeveloping = project.status === 'Currently Developing';
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-2xl overflow-hidden bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-150 flex flex-col justify-between"
                >
                  <div>
                    {/* Project Visual Container */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative cursor-pointer overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80"
                    >
                      <SmartImage
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        containerClassName="aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        fallbackTitle={project.title}
                        assetHint={project.image}
                      />

                      {/* Subtle measured scrim on bottom-left for index & status */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-5 py-3.5 flex items-center justify-between text-xs text-white">
                        <span className="font-mono">
                          {project.index}. {project.categories.join(' / ')}
                        </span>
                        {isDeveloping && (
                          <span className="inline-flex items-center gap-1.5 font-mono text-amber-300 font-medium">
                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Currently Developing</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Unboxed Technology Stack Metadata (Zero-Pill Discipline) */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400">
                        {project.technologies.map((tech, idx) => (
                          <React.Fragment key={tech}>
                            <span>{tech}</span>
                            {idx < project.technologies.length - 1 && (
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

                      {/* Title & Status */}
                      <div className="mt-2 flex items-baseline justify-between gap-3">
                        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                          >
                            {project.title}
                          </button>
                        </h3>
                      </div>

                      {isDeveloping && (
                        <p className="mt-1.5 text-xs font-medium text-amber-700 dark:text-amber-400">
                          Status: Currently Developing — Active work-in-progress system architecture and prototype.
                        </p>
                      )}

                      {/* Short Description */}
                      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* 4-5 Key Features */}
                      <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                        <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-2.5">
                          {isDeveloping ? 'Planned & In-Progress Features:' : 'Key Features:'}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                          {project.features.slice(0, 6).map((feature) => (
                            <li
                              key={feature}
                              className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                            >
                              <span
                                aria-hidden="true"
                                className="text-blue-600 dark:text-blue-400 font-mono"
                              >
                                –
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="px-6 py-4 bg-[#F8F8F6]/70 dark:bg-[#0A0C10]/60 border-t border-zinc-200/70 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      <span>View Architecture & Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          <Github className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {/* Only display Live Demo button when an actual liveDemoUrl exists */}
                      {project.liveDemoUrl && project.liveDemoUrl.trim() !== '' && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#12151C] border border-zinc-200 dark:border-zinc-800 shadow-xl my-8"
            >
              {/* Sticky Top Modal Header */}
              <div className="sticky top-0 z-10 px-6 py-4 bg-white/95 dark:bg-[#12151C]/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400">
                    <span>Project {selectedProject.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedProject.status}</span>
                  </div>
                  <h3
                    id="modal-project-title"
                    className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100"
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details modal"
                  className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Project Screenshot */}
                <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                  <SmartImage
                    src={selectedProject.image}
                    alt={`${selectedProject.title} preview`}
                    containerClassName="aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-900"
                    className="w-full h-full object-cover"
                    fallbackTitle={selectedProject.title}
                    assetHint={selectedProject.image}
                  />
                  <div className="px-4 py-2.5 bg-[#F8F8F6] dark:bg-[#0A0C10] border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>
                      Technologies: {selectedProject.technologies.join(' · ')}
                    </span>
                    <span className="font-mono">
                      /public/assets/{selectedProject.assetFileName}
                    </span>
                  </div>
                </div>

                {selectedProject.status === 'Currently Developing' && (
                  <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3">
                    <AlertCircle
                      className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                      <strong>Currently Developing:</strong> This project is actively under development. The problem statement, data pipeline design, and target features below reflect ongoing implementation and study.
                    </div>
                  </div>
                )}

                {/* Problem Statement & Objective */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#F8F8F6] dark:bg-[#0A0C10] border border-zinc-200/70 dark:border-zinc-800/80">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                      <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      <span>Problem Statement</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {selectedProject.problemStatement}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8F8F6] dark:bg-[#0A0C10] border border-zinc-200/70 dark:border-zinc-800/80">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                      <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      <span>Objective</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {selectedProject.objective}
                    </p>
                  </div>
                </div>

                {/* Architecture & Workflow */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>Architecture & Workflow</span>
                  </div>
                  <ol className="space-y-2.5">
                    {selectedProject.architectureWorkflow.map((step, i) => (
                      <li
                        key={step}
                        className="p-3 rounded-lg bg-[#F8F8F6] dark:bg-[#0A0C10] border border-zinc-200/60 dark:border-zinc-800/70 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-3"
                      >
                        <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                          0{i + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Features List */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>
                      {selectedProject.status === 'Currently Developing'
                        ? 'Planned & In-Development Features'
                        : 'Key Features Implemented'}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((feat) => (
                      <li
                        key={feat}
                        className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                      >
                        <span className="text-blue-600 dark:text-blue-400 font-mono">
                          ·
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Improvements */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2.5">
                    <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>Future Scope & Learning Next Steps</span>
                  </div>
                  <ul className="space-y-1.5">
                    {selectedProject.futureImprovements.map((item) => (
                      <li
                        key={item}
                        className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                      >
                        <span className="text-zinc-400 font-mono">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-[#F8F8F6] dark:bg-[#0A0C10] border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {selectedProject.liveDemoUrl &&
                    selectedProject.liveDemoUrl.trim() !== '' && (
                      <a
                        href={selectedProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        <span>Live Demo</span>
                      </a>
                    )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                >
                  Close (ESC)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
