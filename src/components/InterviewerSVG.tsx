import React from 'react';

export const InterviewerSVG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full animate-float"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4c2a1" />
            <stop offset="100%" stopColor="#e8a87c" />
          </linearGradient>
          <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a3b2a" />
            <stop offset="100%" stopColor="#2d1f16" />
          </linearGradient>
          <linearGradient id="blazerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#bgGradient)"
          className="animate-pulse-soft"
          style={{ filter: 'drop-shadow(0 0 20px hsl(var(--primary)/0.3))' }}
        />

        {/* Hair (back layer) */}
        <path
          d="M 120 140 Q 120 80 200 80 Q 280 80 280 140 Q 290 160 285 180 Q 280 200 270 210 L 260 200 Q 250 180 200 180 Q 150 180 140 200 L 130 210 Q 120 200 115 180 Q 110 160 120 140"
          fill="url(#hairGradient)"
          className="animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        />

        {/* Face */}
        <ellipse
          cx="200"
          cy="180"
          rx="60"
          ry="70"
          fill="url(#skinGradient)"
          className="animate-fade-up"
          style={{ 
            animationDelay: '0.4s',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
          }}
        />

        {/* Eyes */}
        <ellipse cx="185" cy="165" rx="8" ry="6" fill="white" className="animate-fade-up" style={{ animationDelay: '0.6s' }} />
        <ellipse cx="215" cy="165" rx="8" ry="6" fill="white" className="animate-fade-up" style={{ animationDelay: '0.6s' }} />
        <circle cx="185" cy="165" r="4" fill="#3b82f6" className="animate-fade-up" style={{ animationDelay: '0.8s' }} />
        <circle cx="215" cy="165" r="4" fill="#3b82f6" className="animate-fade-up" style={{ animationDelay: '0.8s' }} />
        <circle cx="187" cy="163" r="1.5" fill="white" className="animate-fade-up" style={{ animationDelay: '1s' }} />
        <circle cx="217" cy="163" r="1.5" fill="white" className="animate-fade-up" style={{ animationDelay: '1s' }} />

        {/* Eyebrows */}
        <path d="M 175 155 Q 185 150 195 155" stroke="#4a3b2a" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-fade-up" style={{ animationDelay: '0.7s' }} />
        <path d="M 205 155 Q 215 150 225 155" stroke="#4a3b2a" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-fade-up" style={{ animationDelay: '0.7s' }} />

        {/* Nose */}
        <path
          d="M 200 175 Q 205 185 200 190 Q 195 185 200 175"
          fill="#e8a87c"
          className="animate-fade-up"
          style={{ animationDelay: '0.9s' }}
        />

        {/* Mouth */}
        <path
          d="M 190 200 Q 200 210 210 200"
          stroke="#d4705a"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-fade-up"
          style={{ animationDelay: '1.1s' }}
        />

        {/* Hair (front layer) */}
        <path
          d="M 140 140 Q 150 100 200 95 Q 250 100 260 140 Q 270 150 265 160 L 255 155 Q 245 140 200 140 Q 155 140 145 155 L 135 160 Q 130 150 140 140"
          fill="url(#hairGradient)"
          className="animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        />

        {/* Neck */}
        <rect
          x="185"
          y="240"
          width="30"
          height="25"
          fill="url(#skinGradient)"
          className="animate-fade-up"
          style={{ animationDelay: '1.2s' }}
        />

        {/* Professional Blazer */}
        <path
          d="M 150 260 Q 150 250 170 250 L 230 250 Q 250 250 250 260 L 260 320 Q 260 340 240 340 L 160 340 Q 140 340 140 320 L 150 260"
          fill="url(#blazerGradient)"
          className="animate-fade-up"
          style={{ 
            animationDelay: '1.3s',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
          }}
        />

        {/* Shirt/Blouse */}
        <path
          d="M 170 250 Q 170 245 200 245 Q 230 245 230 250 L 235 300 Q 235 310 225 310 L 175 310 Q 165 310 165 300 L 170 250"
          fill="white"
          className="animate-fade-up"
          style={{ animationDelay: '1.4s' }}
        />

        {/* Blazer Lapels */}
        <path
          d="M 170 250 Q 175 255 180 260 L 175 280 Q 170 275 165 270 L 170 250"
          fill="hsl(var(--primary-glow))"
          className="animate-fade-up"
          style={{ animationDelay: '1.5s' }}
        />
        <path
          d="M 230 250 Q 225 255 220 260 L 225 280 Q 230 275 235 270 L 230 250"
          fill="hsl(var(--primary-glow))"
          className="animate-fade-up"
          style={{ animationDelay: '1.5s' }}
        />

        {/* Floating Elements for Tech Theme */}
        <circle
          cx="100"
          cy="120"
          r="4"
          fill="hsl(var(--primary))"
          className="animate-float opacity-60"
          style={{ 
            animationDelay: '2s',
            filter: 'drop-shadow(0 0 6px hsl(var(--primary)))'
          }}
        />
        <circle
          cx="320"
          cy="150"
          r="3"
          fill="hsl(var(--primary-glow))"
          className="animate-float opacity-70"
          style={{ 
            animationDelay: '2.5s',
            filter: 'drop-shadow(0 0 4px hsl(var(--primary-glow)))'
          }}
        />
        <circle
          cx="80"
          cy="280"
          r="5"
          fill="hsl(var(--accent))"
          className="animate-float opacity-50"
          style={{ 
            animationDelay: '3s',
            filter: 'drop-shadow(0 0 8px hsl(var(--accent)))'
          }}
        />
        <circle
          cx="340"
          cy="300"
          r="3"
          fill="hsl(var(--primary))"
          className="animate-float opacity-60"
          style={{ 
            animationDelay: '3.5s',
            filter: 'drop-shadow(0 0 6px hsl(var(--primary)))'
          }}
        />

        {/* Subtle Glow Around Character */}
        <ellipse
          cx="200"
          cy="200"
          rx="100"
          ry="120"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          opacity="0.3"
          className="animate-pulse-soft"
          style={{ 
            filter: 'blur(2px)',
            animationDelay: '1.8s'
          }}
        />
      </svg>
    </div>
  );
};