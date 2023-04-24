import { useState } from 'react';
import { useGlobalContext } from './context';
import { BsSun, BsFillMoonFill } from 'react-icons/bs';
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className='toggle-icon' />
        ) : (
          <BsSun className='toggle-icon' />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
