import Navbar from '../components/Navbar';
import GradientLine from '../components/ui/GradientLine';
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

  <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors flex flex-col justify-between">
  <Navbar options={navOptions} position="top" />
  <GradientLine />

        <main className="max-w-4xl mx-auto px-8 py-20 flex-1">
          <h1 className="text-5xl font-extrabold mb-4 text-blue-700 dark:text-yellow-700">Hi, I’m Hunter Lambert </h1>
          <p className="text-lg mb-6 text-blue-500 dark:text-yellow-300">
            I’m a web developer student interested in creative, scientific, and historical applications of software. 
            Welcome to my personal portfolio.
          </p>
          {/* Blog Section */}
          <section className="mt-16 font-sans">
            <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-yellow-700">Updates</h2>
            <div className="space-y-8">
              <article className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-yellow-500">Title, Date</h3>
                <p className="text-blue-500 dark:text-yellow-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisl euismod.</p>
              </article>
              <article className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-yellow-500">Title, Date</h3>
                <p className="text-blue-500 dark:text-yellow-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur euismod, nisl nisi consectetur nisi, euismod consectetur nisi nisl euismod.</p>
              </article>
            </div>
          </section>
        </main>
        <Footer navOptions={navOptions}>
          <ContactForm />
        </Footer>
      </div>
    </>
  );
}
