import Navbar from './Navbar';

export default function Footer({ navOptions, children }) {
  return (
    <footer className="w-full bg-white dark:bg-black border-x border-t border-zinc-100 dark:border-zinc-800 text-gray-900 dark:text-gray-100 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start px-8 py-8 gap-8">
        {/* Left: Social links and contact info */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <ul className="mb-2 space-y-1">
            <li><a href="https://github.com/HJLambert" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-sky-500">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/hunter-lambert-b21330196/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-sky-500">LinkedIn</a></li>
            {/* Add more social links as needed */}
          </ul>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <div>📞 (385) 231-5781</div>
            <div>✉️ hunter.j.lambert@gmail.com</div>
          </div>
        </div>
        {/* Right: Contact form */}
        <div className="w-full md:w-auto flex-1">
          {children}
        </div>
      </div>
      <div className="hidden md:block">
        <Navbar options={navOptions} position="bottom" />
      </div>
    </footer>
  );
}
