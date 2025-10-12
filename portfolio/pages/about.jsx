import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import Head from 'next/head';

export default function About() {
  const navOptions = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/uses', label: 'Uses' },
  ];

  return (
    <>
      <Head>
        <title>About | Hunter Lambert</title>
      </Head>

      <div className="min-h-screen bg-white dark:bg-black border-x border-zinc-100 dark:border-zinc-800 text-gray-900 dark:text-gray-100 flex flex-col justify-between">
        <Navbar options={navOptions} position="top" />

        <main className="max-w-4xl mx-auto px-8 py-20 flex-1">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            My name is Hunter Lambert. I’m passionate about technology, science, and creating projects that merge the two. 
            I’ve built everything from web apps and text-based games to tools for research and historical storytelling.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            This site is part of my ongoing CS220 Capstone project, built with Next.js and Tailwind CSS.
          </p>

          <div className="mt-8">
            <ThemeToggle />
          </div>
        </main>
        <div className="hidden md:block">
          <Navbar options={navOptions} position="bottom" />
        </div>
      </div>
    </>
  );
}
