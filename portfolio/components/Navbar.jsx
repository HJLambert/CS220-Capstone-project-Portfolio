import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Navbar({ options }) {
  return (
    <nav className="navbar bg-white dark:bg-black border-x border-zinc-100 dark:border-zinc-800 w-full flex justify-center">
      <ul className="flex gap-8 py-4 text-gray-700 dark:text-gray-200">
        {options.map((opt, i) => (
          <li key={i}>
            <Link href={opt.path} className="hover:underline hover:text-sky-500">
              {opt.label}
            </Link>
          </li>
        ))}
      </ul>
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
};
