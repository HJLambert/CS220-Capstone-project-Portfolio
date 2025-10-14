import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Head from 'next/head';

export default function Home() {
  const navOptions = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/uses', label: 'Uses' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <>
      <Head>
        <title>Hunter Lambert Portfolio</title>
      </Head>

  <div className="min-h-screen bg-white dark:bg-black border-l-4 border-r-4 border-transparent animate-gradient-border text-gray-900 dark:text-gray-100 transition-colors flex flex-col justify-between">
        <Navbar options={navOptions} position="top" />

        <main className="max-w-4xl mx-auto px-8 py-20 flex-1">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-700 dark:text-yellow-700">Hi, I’m Hunter Lambert </h1>
          <p className="text-lg mb-6 text-blue-500 dark:text-yellow-300">
            I’m a web developer student interested in creative, scientific, and historical applications of software. 
            Welcome to my personal portfolio.
          </p>
          <ThemeToggle />
        </main>
        <Footer navOptions={navOptions}>
          <ContactForm />
        </Footer>
      </div>
    </>
  );
}
