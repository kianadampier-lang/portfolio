import React from 'react';
import SectionContainer from './ui/SectionContainer';
import { ABOUT_CONTENT, SKILLS } from '../constants';
import { Code2, Server, PenTool, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getIconForCategory = (category: string) => {
    switch(category) {
      case 'Frontend': return <Code2 size={24} />;
      case 'Backend': return <Server size={24} />;
      case 'Design': return <PenTool size={24} />;
      default: return <Terminal size={24} />;
    }
  };

  return (
    <SectionContainer id="about" className="bg-surface dark:bg-[#141218]">
      <div className="flex flex-col gap-16">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">
            <p>{ABOUT_CONTENT.bio}</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-8">Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div 
                key={category} 
                className="bg-surface-container dark:bg-[#2B2930] p-8 rounded-3xl transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary-container text-primary-onContainer rounded-2xl">
                    {getIconForCategory(category)}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">{category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => s.category === category).map((skill) => (
                    <span 
                      key={skill.name} 
                      className="px-4 py-2 text-sm font-medium rounded-full bg-white dark:bg-[#141218] text-slate-700 dark:text-slate-200"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;