import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/config";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.type) setStatus({ type: null, message: "" });
  };

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim()) return "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (!formData.message.trim() || formData.message.trim().length < 10)
      return "Message should be at least 10 characters.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Using Formspree-style endpoint placeholder.
    // Replace FORM_ENDPOINT with your actual Formspree / Getform / backend URL.
    const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/yourid"

    try {
      if (!FORM_ENDPOINT) {
        // Fallback: open mailto if no form service configured
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );
        window.location.href = `mailto:${personalInfo.email || "your.email@example.com"}?subject=${subject}&body=${body}`;
        setStatus({
          type: "success",
          message: "Opening your email client… Please also configure a form endpoint for direct submission.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error("Submission failed");
        }
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-navy-900/30">
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm open to internship opportunities and collaborations. Feel free to reach out!"
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-slate-400 leading-relaxed">
              Whether you have an internship opportunity, a project idea, or
              just want to connect, I'd love to hear from you. I'm actively
              seeking software development internships where I can contribute
              and grow.
            </p>

            <div className="space-y-4">
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                    <Mail size={18} />
                  </div>
                  {personalInfo.email}
                </a>
              )}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                    <Github size={18} />
                  </div>
                  GitHub Profile
                </a>
              )}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                    <Linkedin size={18} />
                  </div>
                  LinkedIn Profile
                </a>
              )}
            </div>

            {!personalInfo.email && (
              <p className="text-sm text-amber-400/80">
                Update your email, GitHub, and LinkedIn in{" "}
                <code className="text-sky-400">src/data/config.js</code>
              </p>
            )}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="card p-6 md:p-8 space-y-5"
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-navy-950 border border-slate-700 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-navy-950 border border-slate-700 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-navy-950 border border-slate-700 text-white placeholder-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition resize-none"
                placeholder="Tell me about the opportunity or your message..."
                required
              />
            </div>

            {status.type && (
              <div
                className={`flex items-start gap-2 text-sm p-3 rounded-lg ${
                  status.type === "success"
                    ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                    : "bg-red-500/10 text-red-300 border border-red-500/30"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                )}
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
