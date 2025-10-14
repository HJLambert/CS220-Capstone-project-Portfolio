import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Head from 'next/head';

export default function Uses() {
  const navOptions = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/uses', label: 'Uses' },
    { path: '/projects', label: 'Projects' },
  ];

  const categories = [
    {
      name: 'Workstation',
      items: [
        { title: 'Item Name', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.' },
        { title: 'Item Name', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.' },
      ],
    },
    {
      name: 'Development Tools',
      items: [
        { title: 'Item Name', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.' },
        { title: 'Item Name', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.' },
      ],
    },
    {
      name: 'Design',
      items: [
        { title: 'Item Name', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.' },
        { title: 'Item Name', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.' },
      ],
    },
    {
      name: 'Productivity',
      items: [
        { title: 'Item Name', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.' },
        { title: 'Item Name', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.' },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Uses | Hunter Lambert</title>
      </Head>
  <div className="min-h-screen bg-white dark:bg-black border-l-4 border-r-4 border-transparent animate-gradient-border text-gray-900 dark:text-gray-100 transition-colors flex flex-col justify-between">
        <Navbar options={navOptions} position="top" />
        <main className="max-w-5xl mx-auto px-8 py-20 flex-1">
          <h1 className="text-4xl font-extrabold mb-8 text-blue-700 dark:text-yellow-700">Here's A short list of tools I employ and enjoy:</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Categories and subheaders */}
            <div>
              {categories.map((cat) => (
                <div key={cat.name} className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-blue-700 dark:text-yellow-700">{cat.name}</h2>
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="mb-6">
                      <div className="hidden md:block h-8"></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* Right: Items with subheaders and descriptions */}
            <div>
              {categories.map((cat) => (
                <div key={cat.name} className="mb-8">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="text-lg font-semibold text-blue-800 dark:text-yellow-200">{item.title}</h3>
                      <p className="text-blue-500 dark:text-yellow-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer navOptions={navOptions}>
          <ContactForm />
        </Footer>
      </div>
    </>
  );
}
