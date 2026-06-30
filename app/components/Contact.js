"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  alert("Form Submitted!");

  console.log("Form Submitted!");

  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    console.log("Status:", res.status);

    const data = await res.json();

    console.log(data);

    if (data.success) {
      alert("Email sent!");
      setStatus("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed!");
      setStatus("❌ Failed to send message.");
    }

  } catch (error) {
    console.error(error);
    alert("Error sending email");
  }

  setLoading(false);
};

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Let's Build Something Amazing
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Interested in working together? Send me a message and I'll get back to you.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-bold">
            Contact Information
          </h3>

          <div className="mt-8 space-y-6">

            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <span>perpetualokeke4@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <span>+234 903 770 2456</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <span>Nigeria</span>
            </div>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >

          <div className="space-y-6">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full rounded-xl bg-[#111827] p-4 outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full rounded-xl bg-[#111827] p-4 outline-none"
            />

            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full rounded-xl bg-[#111827] p-4 outline-none"
            />

            <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-500 disabled:opacity-50"
>
  {loading ? "Sending..." : "Send Message"}
</button>

            {status && (
              <p className="text-center">
                {status}
              </p>
            )}

          </div>

        </form>

      </div>

    </section>
  );
}