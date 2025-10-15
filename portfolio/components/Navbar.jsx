import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';
import GradientLine from './ui/GradientLine';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ options, position = 'top' }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <GradientLine />
      <nav className="navbar bg-white dark:bg-black w-full flex flex-col md:flex-row md:items-center md:justify-between relative z-20 px-4 md:px-8">
        {/* Top: Site Title and ThemeToggle for mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div className="flex-shrink-0 text-lg md:text-xl font-bold text-blue-700 dark:text-yellow-700 font-sans py-4">
            Hunter Lambert | Web Developer
          </div>
          {/* ThemeToggle for mobile only */}
          <div className="block md:hidden pl-1 pb-2">
            <ThemeToggle />
          </div>
        </div>
        {/* Desktop: horizontal menu and ThemeToggle */}
        <div className="hidden md:flex items-center gap-8 py-4">
          <ul className="flex gap-8 text-blue-700 dark:text-yellow-700">
            {options.map((opt, i) => (
              <li key={i}>
                <Link href={opt.path} className="hover:underline hover:text-blue-500 dark:hover:text-yellow-400">
                  {opt.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile: dropdown menu */}
        <div className="md:hidden w-full flex flex-col items-center">
          <button
            className="py-4 w-full text-center text-blue-700 dark:text-yellow-700 focus:outline-none"
            onClick={() => setOpen((v) => !v)}
          >
            Menu ▾
          </button>
          {open && (
            <ul className="w-full bg-white dark:bg-black text-blue-700 dark:text-yellow-700 shadow-md z-10">
              {options.map((opt, i) => (
                <li key={i} className="last:border-0">
                  <Link
                    href={opt.path}
                    className="block px-6 py-3 hover:underline hover:text-blue-500 dark:hover:text-yellow-400"
                    onClick={() => setOpen(false)}
                  >
                    {opt.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  position: PropTypes.oneOf(['top', 'bottom']),
};
