"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
        className="p-3 rounded-lg bg-[#1e293b] border border-gray-700"
      />

      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        className="p-3 rounded-lg bg-[#1e293b] border border-gray-700"
      />

      <textarea
        placeholder="Your Message"
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
        className="p-3 rounded-lg bg-[#1e293b] border border-gray-700"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-cyan-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="text-center mt-2 text-sm text-gray-300">
          {status}
        </p>
      )}
    </form>
  );
}