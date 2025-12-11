
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className,
  containerClassName,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName || ''}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm z-10 animate-pulse">
          <Loader2 className="w-8 h-8 text-slate-400 animate-spin" />
        </div>
      )}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          {...props}
        />
      ) : (
        <div className={`absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-500 text-xs ${className}`}>
           Image Unavailable
        </div>
      )}
    </div>
  );
};
