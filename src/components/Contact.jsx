import React, { useEffect, useRef, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { cn } from "../lib/utils";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef(null); 
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    if (!formRef.current) return;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus(" Configuration missing. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.");
      setSending(false);
      return;
    }

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      .then(() => {
        setStatus(" Message sent successfully!");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus(" Failed to send message. Please try again later.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 bg-black">
      <Helmet>
        <title>Contact | Sriram Vissakoti</title>
        <meta name="description" content="Get in touch with Sriram Vissakoti for collaborations, opportunities, or inquiries." />
        <link rel="canonical" href="/contact" />
        <meta property="og:title" content="Contact | Sriram Vissakoti" />
        <meta property="og:description" content="Reach out to discuss projects, ideas, or opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/contact" />
        <meta property="og:image" content="/profile_pic.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Sriram Vissakoti" />
        <meta name="twitter:description" content="Reach out to discuss projects, ideas, or opportunities." />
        <meta name="twitter:image" content="/profile_pic.jpg" />
      </Helmet>

      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-xl w-full text-center">
        <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-5xl sm:text-7xl font-extrabold text-transparent">
          Connect with Me
        </h1>
        <p className="mt-4 text-neutral-400 text-lg">Let’s chat — drop a message!</p>

        <form ref={formRef} onSubmit={sendEmail} className="mt-10 space-y-4">
          {/* Explicit recipient so you can map `to_email` in the EmailJS template */}
          <input type="hidden" name="to_email" value="sriramnaidu799@gmail.com" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full rounded-md bg-black/40 px-4 py-2 text-white placeholder-neutral-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <input
            type="email"
            name="email"
            placeholder="Email (must be Gmail)"
            required
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
            className="w-full rounded-md bg-black/40 px-4 py-2 text-white placeholder-neutral-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="w-full rounded-md bg-black/40 px-4 py-2 text-white placeholder-neutral-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/20"
          />

          <div className="mt-6 flex justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              type="submit"
              disabled={sending}
              className="bg-black text-white flex items-center space-x-2 px-6 py-2 font-semibold disabled:opacity-60"
            >
              <span>{sending ? "Sending..." : "Send Message"}</span>
            </HoverBorderGradient>
          </div>

          {status && (
            <p className={`mt-4 text-sm ${status? "text-green-400" : "text-red-400"}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;