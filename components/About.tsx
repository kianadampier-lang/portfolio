import React from 'react';
import SectionContainer from './ui/SectionContainer';
import { ABOUT_CONTENT, SKILLS } from '../constants';
import { Code2, Server, PenTool, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getIconForCategory = (category: string) => {
    switch(category) {
      case 'Frontend': return <Code2 size={20} />;
      case 'Backend': return <Server size={20} />;
      case 'Design': return <PenTool size={20} />;
      default: return <Terminal size={20} />;
    }
  };

  return (
    <SectionContainer id="about" className="bg-white dark:bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Bio Column */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
          <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            <p>{ABOUT_CONTENT.bio}</p>
          </div>
        </div>

        {/* Skills Column */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div key={category} className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-900 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-indigo-600 dark:text-indigo-400 font-semibold">
                  {getIconForCategory(category)}
                  <span>{category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.filter(s => s.category === category).map((skill) => (
                    <span 
                      key={skill.name} 
                      className="px-2.5 py-1 text-sm rounded-md bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-600"
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