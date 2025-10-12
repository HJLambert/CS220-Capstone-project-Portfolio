import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Navbar({ options, position = 'top' }) {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`navbar bg-white dark:bg-black border-x border-zinc-100 dark:border-zinc-800 w-full flex justify-center ${position === 'bottom' ? 'border-t' : 'border-b'}`}
    >
      {/* Desktop: horizontal menu */}
      <ul className="hidden md:flex gap-8 py-4 text-gray-700 dark:text-gray-200">
        {options.map((opt, i) => (
          <li key={i}>
            <Link href={opt.path} className="hover:underline hover:text-sky-500">
              {opt.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile: dropdown menu */}
      <div className="md:hidden w-full flex flex-col items-center">
        <button
          className="py-4 w-full text-center text-gray-700 dark:text-gray-200 focus:outline-none border-b border-zinc-200 dark:border-zinc-700"
          onClick={() => setOpen((v) => !v)}
        >
          Menu ▾
        </button>
        {open && (
          <ul className="w-full bg-white dark:bg-black text-gray-700 dark:text-gray-200 shadow-md z-10">
            {options.map((opt, i) => (
              <li key={i} className="border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                <Link
                  href={opt.path}
                  className="block px-6 py-3 hover:underline hover:text-sky-500"
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
