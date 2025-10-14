import React from 'react';

export default function GradientLine() {
  return (
    <div className="w-full h-1 relative overflow-hidden">
      <div className="absolute inset-0 animate-gradient-flash bg-gradient-to-r from-blue-400/0 via-blue-500/80 to-slate-900/0 dark:from-yellow-200/0 dark:via-yellow-400/80 dark:to-yellow-900/0" style={{height: '100%', width: '100%'}} />
    </div>
  );
}
