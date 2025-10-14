import Navbar from '../components/Navbar';
import GradientLine from '../components/ui/GradientLine';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Head from 'next/head';

const projects = [
  { title: 'Title', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.', link: '#' },
  { title: 'Title', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.', link: '#' },
  { title: 'Title', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.', link: '#' },
  { title: 'Title', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.', link: '#' },
  { title: 'Title', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.', link: '#' },
  { title: 'Title', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.', link: '#' },
];

export default function Projects() {
  const navOptions = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/uses', label: 'Uses' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <>
      <Head>
        <title>Projects | Hunter Lambert</title>
      </Head>
  <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors flex flex-col justify-between">
  <Navbar options={navOptions} position="top" />
  <GradientLine />
        <main className="max-w-5xl mx-auto px-8 py-20 flex-1">
          <h1 className="text-4xl font-extrabold mb-8 text-blue-700 dark:text-yellow-700">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 flex flex-col justify-between border-2 border-transparent animate-gradient-border">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-yellow-700">{proj.title}</h2>
                  <p className="text-blue-500 dark:text-yellow-300 mb-4">{proj.desc}</p>
                </div>
                <a href={proj.link} className="text-blue-600 dark:text-yellow-400 hover:underline mt-auto">View Project</a>
              </div>
            ))}
          </div>
        </main>
        <Footer navOptions={navOptions}>
          <ContactForm />
        </Footer>
      </div>
    </>
  );
}
