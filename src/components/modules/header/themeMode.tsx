'use client';
import React, { useState } from 'react';
import useDarkSide from '@/app/hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher: React.FC = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light');

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={36} />
      </div>
    </>
  );
};

export default Switcher;
