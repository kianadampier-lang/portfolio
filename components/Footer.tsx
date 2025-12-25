import React from 'react';
import { FOOTER_TEXT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {FOOTER_TEXT}
        </p>
      </div>
    </footer>
  );
};

export default Footer;