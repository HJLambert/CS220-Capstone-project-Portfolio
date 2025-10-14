import React, { useState } from "react";


export default function ContactForm() {
  const [status, setStatus] = useState("");
  const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch(formspreeUrl, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      setStatus("Thank you! Your message has been sent.");
      form.reset();
    } else {
      setStatus("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white dark:bg-zinc-900 rounded shadow mt-8 border-4 border-transparent animate-gradient-border">
      <h2 className="text-xl font-bold mb-4 text-blue-700 dark:text-yellow-800">Contact Me</h2>
      <label className="block mb-2 text-blue-600 dark:text-yellow-400">
        Name
        <input type="text" name="name" required className="w-full border-2 rounded px-3 py-2 mt-1 bg-white dark:bg-zinc-800 text-blue-900 dark:text-yellow-100 border-blue-300 dark:border-yellow-700 focus:border-blue-500 dark:focus:border-yellow-500 transition-colors" />
      </label>
      <label className="block mb-2 text-blue-600 dark:text-yellow-400">
        Email
        <input type="email" name="email" required className="w-full border-2 rounded px-3 py-2 mt-1 bg-white dark:bg-zinc-800 text-blue-900 dark:text-yellow-100 border-blue-300 dark:border-yellow-700 focus:border-blue-500 dark:focus:border-yellow-500 transition-colors" />
      </label>
      <label className="block mb-2 text-blue-600 dark:text-yellow-400">
        Message
        <textarea name="message" required className="w-full border-2 rounded px-3 py-2 mt-1 bg-white dark:bg-zinc-800 text-blue-900 dark:text-yellow-100 border-blue-300 dark:border-yellow-700 focus:border-blue-500 dark:focus:border-yellow-500 transition-colors" rows={4}></textarea>
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-yellow-700 dark:hover:bg-yellow-800 transition-colors">Send</button>
      {status && <p className="mt-2 text-sm text-blue-700 dark:text-yellow-300">{status}</p>}
    </form>
  );
}
