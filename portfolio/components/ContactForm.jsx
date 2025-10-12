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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white dark:bg-zinc-900 rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4 dark:text-gray-100">Contact Me</h2>
      <label className="block mb-2 dark:text-gray-200">
        Name
        <input type="text" name="name" required className="w-full border rounded px-3 py-2 mt-1 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-zinc-700" />
      </label>
      <label className="block mb-2 dark:text-gray-200">
        Email
        <input type="email" name="email" required className="w-full border rounded px-3 py-2 mt-1 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-zinc-700" />
      </label>
      <label className="block mb-2 dark:text-gray-200">
        Message
        <textarea name="message" required className="w-full border rounded px-3 py-2 mt-1 bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-zinc-700" rows={4}></textarea>
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">Send</button>
      {status && <p className="mt-2 text-sm dark:text-gray-200">{status}</p>}
    </form>
  );
}
