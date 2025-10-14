import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';
import GradientLine from './ui/GradientLine';

export default function Navbar({ options, position = 'top' }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <GradientLine />
      <nav className="navbar bg-white dark:bg-black w-full flex justify-center relative z-20">
        {/* Desktop: horizontal menu */}
        <ul className="hidden md:flex gap-8 py-4 text-blue-700 dark:text-yellow-700">
          {options.map((opt, i) => (
            <li key={i}>
              <Link href={opt.path} className="hover:underline hover:text-blue-500 dark:hover:text-yellow-400">
                {opt.label}
              </Link>
            </li>
          ))}
        </ul>
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
