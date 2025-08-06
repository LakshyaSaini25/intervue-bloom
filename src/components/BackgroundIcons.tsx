import React from 'react';
import { Code, BookOpen, Lightbulb, Target, Zap, Star, Trophy, Rocket } from 'lucide-react';

export const BackgroundIcons: React.FC = () => {
  const icons = [
    { Icon: Code, delay: '0s', position: 'top-20 left-20' },
    { Icon: BookOpen, delay: '0.5s', position: 'top-32 right-32' },
    { Icon: Lightbulb, delay: '1s', position: 'top-1/2 left-16' },
    { Icon: Target, delay: '1.5s', position: 'bottom-32 left-24' },
    { Icon: Zap, delay: '2s', position: 'bottom-20 right-20' },
    { Icon: Star, delay: '2.5s', position: 'top-40 left-1/2' },
    { Icon: Trophy, delay: '3s', position: 'bottom-1/2 right-16' },
    { Icon: Rocket, delay: '3.5s', position: 'top-1/4 right-1/4' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-30 animate-float`}
          style={{ 
            animationDelay: delay,
            filter: 'drop-shadow(0 0 10px hsl(var(--primary))) drop-shadow(0 0 20px hsl(var(--primary-glow))) drop-shadow(0 0 30px hsl(var(--primary)))',
          }}
        >
          <Icon className="w-16 h-16 text-primary animate-pulse-soft" style={{
            filter: 'drop-shadow(0 0 8px currentColor)'
          }} />
        </div>
      ))}
      
      {/* Additional floating particles with neon glow */}
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={`particle-${index}`}
          className={`absolute w-3 h-3 bg-primary rounded-full opacity-40 animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            boxShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary-glow)), 0 0 30px hsl(var(--primary))',
            filter: 'blur(0.5px)'
          }}
        />
      ))}
    </div>
  );
};