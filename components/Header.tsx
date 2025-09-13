
import React from 'react';
import { Button } from './Button';
import { MagicWandIcon, StartOverIcon } from './Icons';

interface HeaderProps {
    onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onReset }) => {
  return (
    <header className="flex justify-between items-center pb-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
            <MagicWandIcon className="w-8 h-8 text-indigo-400" />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">AI Photo Editor</h1>
        </div>
        <Button onClick={onReset} variant="secondary">
            <StartOverIcon />
            <span className="hidden sm:inline">Start Over</span>
        </Button>
    </header>
  );
};
