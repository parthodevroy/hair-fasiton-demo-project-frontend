import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router'; 

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;

    console.log("Subscribing email:", email);
    setIsSubscribed(true);
    setEmail("");

    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* --- 1. Top Section: Branding & Socials --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            {/* আপনার নেভিগেশন বারের লোগোটির সাথে ম্যাচিং SVG */}
            <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span className="font-serif font-bold text-2xl tracking-tight">
              Hair Style Braids
            </span>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mb-6 leading-relaxed">
            Professional hair braiding and styling tailored to your unique beauty. Experience the comfort and premium look you deserve.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-neutral-900 rounded-full hover:bg-pink-600 transition-all duration-300 border border-neutral-800 text-neutral-300 hover:text-white"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-neutral-900 rounded-full hover:bg-pink-600 transition-all duration-300 border border-neutral-800 text-neutral-300 hover:text-white"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* --- 2. Main Footer Content --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-900 pt-16">

          {/* Column 1: Salon Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest text-pink-500">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin size={20} className="text-pink-500 mt-1 shrink-0" />
                <span className="text-neutral-400 text-[14px] leading-relaxed group-hover:text-white transition-colors">
                  your address xx, <br /> MD 20877
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={20} className="text-pink-500 shrink-0" />
                <a href="mailto:diamond.style.braidsalon@gmail.com" className="text-neutral-400 text-[14px] group-hover:text-white transition-colors break-all">
                  example@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={20} className="text-pink-500 shrink-0" />
                <span className="text-neutral-400 text-[14px]">
                  Call: <a href="tel:+12409265242" className="text-white font-bold ml-1 hover:text-pink-500 transition-colors tracking-tight">+1 (240) 926-5242</a>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest text-pink-500">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="flex items-center gap-1 text-neutral-400 hover:text-pink-500 transition-all text-[14px] font-medium group">
                    <ChevronRight size={14} className="text-pink-500 opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/service" className="flex items-center gap-1 text-neutral-400 hover:text-pink-500 transition-all text-[14px] font-medium group">
                    <ChevronRight size={14} className="text-pink-500 opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0" />
                    Services
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link to="/gallary" className="flex items-center gap-1 text-neutral-400 hover:text-pink-500 transition-all text-[14px] font-medium group">
                    <ChevronRight size={14} className="text-pink-500 opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0" />
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center gap-1 text-neutral-400 hover:text-pink-500 transition-all text-[14px] font-medium group">
                    <ChevronRight size={14} className="text-pink-500 opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Salon Hours Feature */}
            <div className="pt-2 flex items-start gap-3 text-xs text-neutral-500 bg-neutral-900/50 p-3 rounded-xl border border-neutral-900">
              <Clock size={16} className="text-pink-500/70 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-neutral-400 uppercase tracking-wider mb-0.5">Salon Hours</p>
                <p>Mon - Sun: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 3: Beautiful Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest text-pink-500">Join Our Club</h3>
            <p className="text-neutral-400 text-[14px] leading-relaxed">
              Subscribe to get special offers, styling updates, and seasonal braiding deals.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="relative mt-4 group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="w-full bg-neutral-900 border border-neutral-800 p-3.5 pr-14 text-sm focus:outline-none focus:border-pink-500 transition-all text-white placeholder:text-neutral-600 rounded-xl"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full w-12 bg-pink-600 flex items-center justify-center hover:bg-white hover:text-pink-600 text-white transition-all duration-300 rounded-r-xl"
              >
                <Send size={18} />
              </button>

              {/* Success Feedback */}
              {isSubscribed && (
                <div className="absolute -bottom-7 left-0 flex items-center gap-1.5 text-emerald-400 text-xs font-bold animate-in fade-in slide-in-from-bottom-1 duration-200">
                  <CheckCircle2 size={14} />
                  Thank you for subscribing!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* --- 3. Bottom Copyright Section --- */}
        <div className="mt-20 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-600 text-xs font-medium">
          <p>Copyrights © 2026 Hair Style Braids. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;