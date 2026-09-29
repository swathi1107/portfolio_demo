import React, { useState, useEffect } from 'react';
import { Award, Eye, X, Upload, CheckCircle2, FileImage } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { certificates, CertificateItem } from '../data/portfolioData';
import { SmartImage } from './SmartImage';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [localPreviews, setLocalPreviews] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  const handleLocalFilePreview = (
    certId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setLocalPreviews((prev) => ({ ...prev, [certId]: objectUrl }));
  };

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-20 md:py-24 border-b border-zinc-200/70 dark:border-zinc-800/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
            05. Verified Coursework
          </p>
          <h2
            id="certifications-heading"
            className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Course certifications completed across programming, data structures, databases, operating systems, and algorithms.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => {
            const previewUrl = localPreviews[cert.id];
            const showRealImage = Boolean(previewUrl) || cert.isUploaded;
            const effectiveSrc = previewUrl || cert.imagePath;

            return (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="rounded-2xl overflow-hidden bg-white dark:bg-[#12151C] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-150 flex flex-col justify-between"
              >
                <div>
                  {/* Certificate Thumbnail / Honest Placeholder */}
                  {showRealImage ? (
                    <SmartImage
                      src={effectiveSrc}
                      alt={`${cert.title} certificate from ${cert.platform}`}
                      containerClassName="aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/80 dark:border-zinc-800/80"
                      className="w-full h-full object-cover"
                      fallbackTitle={cert.title}
                      assetHint={cert.imagePath}
                    />
                  ) : (
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="aspect-[16/10] w-full bg-[#F8F8F6] dark:bg-[#0A0C10] border-b border-zinc-200/80 dark:border-zinc-800/80 p-5 flex flex-col justify-between cursor-pointer group"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        <span>{cert.platform}</span>
                        <span>{cert.category}</span>
                      </div>

                      <div className="my-auto py-2">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2.5">
                          <Award className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {cert.title}
                        </p>
                      </div>

                      <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 truncate">
                        Asset slot: /public{cert.imagePath}
                      </p>
                    </div>
                  )}

                  {/* Card Details */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400">
                      <span>{cert.platform}</span>
                      <span aria-hidden="true">·</span>
                      <span>{cert.category}</span>
                    </div>

                    <h3 className="mt-1.5 text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {cert.title}
                    </h3>

                    <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Topics: {cert.skillsCovered.join(' · ')}
                    </p>

                    {cert.statusNote && (
                      <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400 italic">
                        {cert.statusNote}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="px-5 py-3.5 bg-[#F8F8F6]/60 dark:bg-[#0A0C10]/60 border-t border-zinc-200/70 dark:border-zinc-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>View Certificate</span>
                  </button>

                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                    {showRealImage ? 'Uploaded' : 'Ready for image'}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#12151C] border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden my-8"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                    {selectedCert.platform} · {selectedCert.category}
                  </p>
                  <h3
                    id="cert-modal-title"
                    className="text-lg font-bold text-zinc-900 dark:text-zinc-100"
                  >
                    {selectedCert.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate modal"
                  className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5">
                {localPreviews[selectedCert.id] || selectedCert.isUploaded ? (
                  <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
                    <img
                      src={localPreviews[selectedCert.id] || selectedCert.imagePath}
                      alt={`${selectedCert.title} Certificate`}
                      referrerPolicy="no-referrer"
                      className="w-full max-h-[460px] object-contain mx-auto"
                    />
                  </div>
                ) : (
                  <div className="p-8 rounded-xl bg-[#F8F8F6] dark:bg-[#0A0C10] border border-dashed border-zinc-300 dark:border-zinc-800 text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                      <FileImage className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      Certificate Image Slot Ready
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                      To display your actual certificate scan permanently, save the image file at{' '}
                      <code className="font-mono text-zinc-900 dark:text-zinc-100 bg-zinc-200/70 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                        /public{selectedCert.imagePath}
                      </code>{' '}
                      and set <code className="font-mono">isUploaded: true</code> in{' '}
                      <code className="font-mono">src/data/portfolioData.ts</code>.
                    </p>

                    {/* Instant Browser Preview Option */}
                    <div className="pt-2">
                      <label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer">
                        <Upload className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Preview Certificate File from Computer</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleLocalFilePreview(selectedCert.id, e)
                          }
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>
                )}

                {/* Coursework Topics Covered */}
                <div>
                  <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>Key Concepts Covered</span>
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                    {selectedCert.skillsCovered.map((skill, idx) => (
                      <React.Fragment key={skill}>
                        <span>{skill}</span>
                        {idx < selectedCert.skillsCovered.length - 1 && (
                          <span aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-[#F8F8F6] dark:bg-[#0A0C10] border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  Target path: /public{selectedCert.imagePath}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
