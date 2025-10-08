import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/myzndvya", {
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Contact Me</h2>
      <label className="block mb-2">
        Name
        <input type="text" name="name" required className="w-full border rounded px-3 py-2 mt-1" />
      </label>
      <label className="block mb-2">
        Email
        <input type="email" name="email" required className="w-full border rounded px-3 py-2 mt-1" />
      </label>
      <label className="block mb-2">
        Message
        <textarea name="message" required className="w-full border rounded px-3 py-2 mt-1" rows={4}></textarea>
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  );
}
