"use client";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

// --- CONFIGURATION ---
const EMAILJS_PUBLIC_KEY = "doqEqy3MoEzW-AJ0D";
const EMAILJS_SERVICE_ID = "service_x06ls4e";
const EMAILJS_TEMPLATE_ID = "template_5cpa4kc";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  // --- FIXED ERROR 1: Defined the types allowed for status ---
  const [status, setStatus] = useState<'success' | 'error' | 'sending' | null>(null);

  // --- FIXED ERROR 2: Defined the types for the event 'e' ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
    }, (error) => {
        console.log(error.text);
        setStatus('error');
    });
  };

  return (
    <section id="contact" className="mb-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
        <p className="text-slate-500 mb-8">Fill out form below to send me a message directly to my email.</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center animate-pulse">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              Something went wrong. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/30"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}