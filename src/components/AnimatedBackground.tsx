
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 pointer-events-none">
      <div className="flex items-center justify-center h-full space-x-8 animate-pulse">
        <span className="text-green-400 font-semibold">Discover</span>
        <span className="text-blue-400 font-semibold">Design</span>
        <span className="text-purple-400 font-semibold">Develop</span>
        <span className="text-green-400 font-semibold">Discover</span>
        <span className="text-blue-400 font-semibold">Design</span>
        <span className="text-purple-400 font-semibold">Develop</span>
      </div>
    </div>
  );
};

export default AnimatedBackground;
