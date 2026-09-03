import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullScreen?: boolean;
}

export function Loader({ size = 'md', fullScreen = false, className, ...props }: LoaderProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 border-2',
    md: 'w-20 h-20 border-[3px]',
    lg: 'w-32 h-32 border-4',
    xl: 'w-48 h-48 border-4',
  };
  
  const innerSizeClasses = {
    sm: 'w-12 h-12 border-2',
    md: 'w-20 h-20 border-[3px]',
    lg: 'w-32 h-32 border-4',
    xl: 'w-48 h-48 border-4',
  };

  const imageSizes = {
    sm: 24,
    md: 40,
    lg: 64,
    xl: 96,
  };

  const loader = (
    <div className={cn("relative flex items-center justify-center", className)} {...props}>
      {/* Outer subtle ring */}
      <div
        className={cn(
          "rounded-full border-brand-orange/20 absolute",
          sizeClasses[size]
        )}
      />
      
      {/* Animated primary ring */}
      <div
        className={cn(
          "rounded-full border-t-brand-orange border-r-brand-orange/60 border-b-transparent border-l-transparent animate-spin",
          innerSizeClasses[size]
        )}
      />
      
      {/* Inner logo */}
      <div className="absolute animate-pulse flex items-center justify-center">
        <Image 
          src="/images/logo.png" 
          alt="Suzang Group Loading" 
          width={imageSizes[size]} 
          height={imageSizes[size]}
          className="object-contain"
        />
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-md">
        {loader}
        <p className="mt-8 text-sm font-medium text-brand-orange/80 animate-pulse uppercase tracking-[0.2em]">
          Chargement
        </p>
      </div>
    );
  }

  return loader;
}
