import '../styles/globals.css';
import ContactForm from '../components/ContactForm';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ContactForm />
    </>
  );
}
