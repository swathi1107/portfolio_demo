/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Activities } from './components/Activities';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { personalInfo } from './data/portfolioData';

const THEME_STORAGE_KEY = 'swathi-portfolio-theme';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
      // Default to light editorial theme or system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, darkMode ? 'dark' : 'light');
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleDownloadResume = () => {
    // Trigger download of /assets/Swathi_Resume.pdf
    const link = document.createElement('a');
    link.href = personalInfo.resumePdfPath;
    link.download = 'Swathi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F6] text-zinc-900 dark:bg-[#0A0C10] dark:text-zinc-100 transition-colors duration-150">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onDownloadResume={handleDownloadResume}
      />

      <main className="flex-1">
        <Hero onDownloadResume={handleDownloadResume} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Activities />
        <CurrentlyLearning />
        <Resume onDownloadResume={handleDownloadResume} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
