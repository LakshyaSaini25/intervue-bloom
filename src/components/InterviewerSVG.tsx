import React from 'react';

export const InterviewerSVG: React.FC<{ className?: string }> = ({ className = "w-96 h-96" }) => {
  return (
    <div className={`${className} animate-float`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="url(#interviewerGradient)"
          className="animate-pulse-soft"
        />
        
        {/* Hair */}
        <path
          d="M80 150C80 100 130 60 200 60C270 60 320 100 320 150C320 130 300 120 280 125C260 115 240 110 200 110C160 110 140 115 120 125C100 120 80 130 80 150Z"
          fill="hsl(var(--primary))"
          className="animate-fade-up"
        />
        
        {/* Face */}
        <ellipse
          cx="200"
          cy="180"
          rx="70"
          ry="80"
          fill="#FDB5A6"
          className="animate-scale-in"
          style={{ animationDelay: '0.2s' }}
        />
        
        {/* Eyes */}
        <ellipse cx="180" cy="160" rx="8" ry="12" fill="hsl(var(--primary))" className="animate-fade-up" style={{ animationDelay: '0.4s' }} />
        <ellipse cx="220" cy="160" rx="8" ry="12" fill="hsl(var(--primary))" className="animate-fade-up" style={{ animationDelay: '0.5s' }} />
        <circle cx="180" cy="160" r="3" fill="white" className="animate-glow" />
        <circle cx="220" cy="160" r="3" fill="white" className="animate-glow" />
        
        {/* Eyebrows */}
        <path d="M170 145C175 143 185 143 190 145" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-slide-right" style={{ animationDelay: '0.6s' }} />
        <path d="M210 145C215 143 225 143 230 145" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="animate-slide-right" style={{ animationDelay: '0.7s' }} />
        
        {/* Nose */}
        <path d="M200 170L195 185L200 190L205 185Z" fill="#F4A394" className="animate-fade-up" style={{ animationDelay: '0.8s' }} />
        
        {/* Mouth */}
        <path
          d="M185 200C190 210 195 215 200 215C205 215 210 210 215 200"
          stroke="hsl(var(--accent))"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="animate-glow"
          style={{ animationDelay: '0.9s' }}
        />
        
        {/* Body/Shirt */}
        <rect
          x="130"
          y="260"
          width="140"
          height="120"
          rx="20"
          fill="hsl(var(--card))"
          className="animate-slide-up"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Professional Blazer */}
        <path
          d="M140 280C140 270 150 260 160 260H240C250 260 260 270 260 280V360C260 370 250 380 240 380H160C150 380 140 370 140 360V280Z"
          fill="hsl(var(--primary))"
          className="animate-fade-up"
          style={{ animationDelay: '1.1s' }}
        />
        
        {/* Collar */}
        <path d="M180 260L200 280L220 260" stroke="white" strokeWidth="2" fill="white" className="animate-scale-in" style={{ animationDelay: '1.2s' }} />
        
        {/* Arms */}
        <ellipse cx="120" cy="320" rx="25" ry="60" fill="#FDB5A6" className="animate-slide-right" style={{ animationDelay: '1.3s' }} />
        <ellipse cx="280" cy="320" rx="25" ry="60" fill="#FDB5A6" className="animate-slide-left" style={{ animationDelay: '1.3s' }} />
        
        {/* Hands */}
        <circle cx="120" cy="370" r="15" fill="#FDB5A6" className="animate-scale-in" style={{ animationDelay: '1.4s' }} />
        <circle cx="280" cy="370" r="15" fill="#FDB5A6" className="animate-scale-in" style={{ animationDelay: '1.4s' }} />
        
        {/* Floating Elements */}
        <circle cx="80" cy="100" r="4" fill="hsl(var(--primary-glow))" className="animate-float" style={{ animationDelay: '2s' }} />
        <circle cx="320" cy="120" r="3" fill="hsl(var(--accent))" className="animate-float" style={{ animationDelay: '2.2s' }} />
        <circle cx="60" cy="200" r="2" fill="hsl(var(--primary-glow))" className="animate-float" style={{ animationDelay: '2.4s' }} />
        <circle cx="340" cy="250" r="3" fill="hsl(var(--accent))" className="animate-float" style={{ animationDelay: '2.6s' }} />
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="interviewerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary-glow))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};