import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import Head from 'next/head';

export default function Home() {
  const navOptions = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/uses', label: 'Uses' },
  ];

  return (
    <>
      <Head>
        <title>Hunter Lambert Portfolio</title>
      </Head>

      <div className="min-h-screen bg-white dark:bg-black border-x border-zinc-100 dark:border-zinc-800 text-gray-900 dark:text-gray-100 transition-colors flex flex-col justify-between">
        <Navbar options={navOptions} position="top" />

        <main className="max-w-4xl mx-auto px-8 py-20 flex-1">
          <h1 className="text-4xl font-bold mb-4">Hi, I’m Hunter Lambert </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I’m a web developer student interested in creative, scientific, and historical applications of software. 
            Welcome to my personal portfolio.
          </p>
          <ThemeToggle />
        </main>
        <div className="hidden md:block">
          <Navbar options={navOptions} position="bottom" />
        </div>
      </div>
    </>
  );
}
