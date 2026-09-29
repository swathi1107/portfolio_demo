import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackTitle?: string;
  assetHint?: string;
  eager?: boolean;
  forcePlaceholder?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden bg-zinc-100 dark:bg-zinc-900',
  fallbackTitle,
  assetHint,
  eager = false,
  forcePlaceholder = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (forcePlaceholder || hasError || !src) {
    return (
      <div
        className={`${containerClassName} flex flex-col items-center justify-center p-6 text-center select-none border border-dashed border-zinc-300 dark:border-zinc-800`}
        role="img"
        aria-label={alt}
      >
        <div className="w-10 h-10 rounded-lg bg-zinc-200/70 dark:bg-zinc-800/80 flex items-center justify-center text-zinc-600 dark:text-zinc-400 mb-3">
          <ImageIcon className="w-5 h-5" aria-hidden="true" />
        </div>
        {fallbackTitle && (
          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 max-w-xs">
            {fallbackTitle}
          </p>
        )}
        {assetHint && (
          <p className="mt-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            Place file at: /public{assetHint}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    </div>
  );
};
