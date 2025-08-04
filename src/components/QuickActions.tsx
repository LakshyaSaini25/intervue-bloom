import React from 'react';
import { Video, Plus, Settings, BarChart3 } from 'lucide-react';
import { InterviewIcon, CodingIcon, AnalyticsIcon, CalendarIcon } from './AnimatedSVGs';

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  animatedIcon: React.ReactNode;
  delay?: string;
  onClick?: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({ 
  title, 
  description, 
  icon, 
  animatedIcon, 
  delay = '0s',
  onClick 
}) => (
  <div 
    className="glass rounded-xl p-6 hover-lift hover-glow cursor-pointer transition-all duration-300 animate-scale-in group"
    style={{ animationDelay: delay }}
    onClick={onClick}
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="relative">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {animatedIcon}
        </div>
        <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <div className="p-4 rounded-xl gradient-primary">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  </div>
);

export const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Start Interview',
      description: 'Begin a new virtual interview session',
      icon: <Video className="w-8 h-8 text-white" />,
      animatedIcon: <InterviewIcon className="w-16 h-16" />,
      delay: '0.1s'
    },
    {
      title: 'Code Challenge',
      description: 'Create or manage coding assessments',
      icon: <Plus className="w-8 h-8 text-white" />,
      animatedIcon: <CodingIcon className="w-16 h-16" />,
      delay: '0.2s'
    },
    {
      title: 'View Analytics',
      description: 'Check interview performance metrics',
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      animatedIcon: <AnalyticsIcon className="w-16 h-16" />,
      delay: '0.3s'
    },
    {
      title: 'Schedule',
      description: 'Manage upcoming interview sessions',
      icon: <Settings className="w-8 h-8 text-white" />,
      animatedIcon: <CalendarIcon className="w-16 h-16" />,
      delay: '0.4s'
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-up">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action, index) => (
          <ActionCard 
            key={index} 
            {...action}
            onClick={() => console.log(`${action.title} clicked`)}
          />
        ))}
      </div>
    </div>
  );
};