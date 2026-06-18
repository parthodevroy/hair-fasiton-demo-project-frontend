import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-start overflow-hidden bg-zinc-950">
      {/* 🏙️ Background Image with Premium Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          // আপনি যে জেনারেট করা বা ডাউনলোড করা ছবি ব্যবহার করবেন তার পাথ এখানে দিবেন
          backgroundImage: `linear-gradient(to right, rgba(15, 11, 22, 0.9) 30%, rgba(24, 15, 33, 0.5) 70%, rgba(0, 0, 0, 0.2) 100%), url('https://images.pexels.com/photos/16192981/pexels-photo-16192981.jpeg')` 
        }}
      />

      {/* 🕯️ Subtle Soft Light Glow Accent */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* 📝 Content Area */}
      <div className="relative z-10 max-w-4xl px-6 sm:px-12 md:px-20 lg:px-32 text-left space-y-6">
        
        {/* 🌟 Tiny Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-medium tracking-wide uppercase backdrop-blur-sm animate-pulse">
          ✨ Premium Hair Braiding Salon
        </div>

        {/* 👑 Luxury Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          The Touch That <br className="hidden sm:inline" />
          Brings Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400">Hair To Life</span>
        </h1>

        {/* 📜 Short Descriptive Paragraph */}
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed drop-shadow-sm">
          Our expert stylists blend creativity with precision to create stunning braids that express your unique personality. From protective styles to bold fashion statements.
        </p>

        {/* 📅 Premium Call-To-Action Button */}
        <div className="pt-2">
         <Link to={"/contact"}>
          <button className="group relative px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm sm:text-base tracking-wide shadow-xl shadow-black/30 hover:bg-amber-400 transition-all duration-300 ease-out active:scale-95">
            Book An Appointment
            
            {/* Hover Accent Line Effect */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-zinc-950 rounded-full group-hover:w-1/3 transition-all duration-300" />
          </button>
         </Link>
        </div>

      </div>

      {/* 💈 Bottom Edge Elegant Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </div>
  );
};

export default Hero;