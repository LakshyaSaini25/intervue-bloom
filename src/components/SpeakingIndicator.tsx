import React from 'react';
import { User, Bot } from 'lucide-react';

interface SpeakingIndicatorProps {
  currentSpeaker: 'ai' | 'user' | 'none';
}

export const SpeakingIndicator: React.FC<SpeakingIndicatorProps> = ({ currentSpeaker }) => {
  return (
    <div className="glass rounded-xl p-4 animate-fade-up">
      <div className="flex items-center space-x-4">
        {/* AI Bot Indicator */}
        <div className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-500 ${
          currentSpeaker === 'ai' 
            ? 'bg-primary text-primary-foreground scale-110 shadow-glow animate-pulse-soft' 
            : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
        }`}>
          <Bot className="w-5 h-5" />
          <span className="text-sm font-medium">AI Interviewer</span>
          {currentSpeaker === 'ai' && (
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          )}
        </div>
        
        {/* Divider */}
        <div className="w-px h-8 bg-border"></div>
        
        {/* User Indicator */}
        <div className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-500 ${
          currentSpeaker === 'user' 
            ? 'bg-accent text-accent-foreground scale-110 shadow-glow animate-pulse-soft' 
            : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
        }`}>
          <User className="w-5 h-5" />
          <span className="text-sm font-medium">You</span>
          {currentSpeaker === 'user' && (
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};