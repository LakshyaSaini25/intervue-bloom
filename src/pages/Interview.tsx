import React, { useState } from 'react';
import { ArrowLeft, Play, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InterviewerSVG } from '@/components/InterviewerSVG';
import { SpeakingIndicator } from '@/components/SpeakingIndicator';
import { BackgroundIcons } from '@/components/BackgroundIcons';
import { Button } from '@/components/ui/button';

export default function Interview() {
  const [currentSpeaker, setCurrentSpeaker] = useState<'ai' | 'user' | 'none'>('none');
  const [showTutorial, setShowTutorial] = useState(false);

  const handleStartInterview = () => {
    setCurrentSpeaker('ai');
    // Simulate interview starting
    setTimeout(() => {
      setCurrentSpeaker('none');
    }, 3000);
  };

  const tutorialSteps = [
    "Welcome to your virtual interview! The AI interviewer will ask you questions.",
    "Use the speaking indicator to see who's currently talking.",
    "Click 'Start Interview' when you're ready to begin.",
    "Stay calm, be yourself, and good luck!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background Icons */}
      <BackgroundIcons />
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6">
        {/* Back Button and Speaking Indicator */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="hover-scale">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <SpeakingIndicator currentSpeaker={currentSpeaker} />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setShowTutorial(!showTutorial)}
            className="hover-scale hover-glow"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Tutorial
          </Button>
          
          <Button
            onClick={handleStartInterview}
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover-scale hover-glow animate-pulse-soft"
            size="lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Interview
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6">
        {/* Interviewer SVG */}
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Meet Your AI Interviewer
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to showcase your skills? Let's begin!
            </p>
          </div>
          
          <InterviewerSVG className="w-80 h-80 md:w-96 md:h-96" />
          
          <div className="text-center animate-fade-up" style={{ animationDelay: '1.5s' }}>
            <p className="text-lg text-muted-foreground max-w-2xl">
              This is your virtual interview space. I'll be asking you questions 
              about your experience, skills, and problem-solving abilities. 
              Take your time and answer thoughtfully.
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Modal */}
      {showTutorial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
          <div className="glass rounded-xl p-8 max-w-md mx-4 animate-scale-in bg-purple-light/20 backdrop-blur-md border border-purple-light/30">
            <h3 className="text-xl font-bold text-foreground mb-4">Interview Tutorial</h3>
            <div className="space-y-3">
              {tutorialSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 animate-slide-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <Button onClick={() => setShowTutorial(false)} className="hover-scale">
                Got it!
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}