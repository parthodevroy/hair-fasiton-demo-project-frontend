import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Fsb258ZW58MHx8MHx8fDA%3D",
      title1: "Braids Make",
      highlight: "Beauty",
      subtitle: "From traditional styles to modern trends, we are dedicated to making you look and feel beautiful. Our experienced stylists bring your unique vision to life."
    },
    {
      img: "https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg",
      title1: "Premium",
      highlight: "Hairstyles",
      subtitle: "Experience luxury hair braiding tailored to your lifestyle. We offer top-tier comfort and flawless execution for all hair types."
    },
    {
      img: "https://images.pexels.com/photos/4783329/pexels-photo-4783329.jpeg",
      title1: "Define Your",
      highlight: "Confidence",
      subtitle: "Every braid tells a story of elegance and precision. Book your slot today and walk out with absolute confidence and premium grace."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden">
      
      {/* --- BACKGROUND CAROUSEL WITH EXTRA VISIBILITY --- */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-65 scale-100' : 'opacity-0 scale-105'
            } transform transition-transform duration-[5000ms]`}
          >
            <img 
              src={slide.img} 
              alt="Premium Hair Braiding" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* ইমেজের ভিজিবিলিটি বাড়ানোর জন্য ওভারলে হালকা (Opacity lowered) করা হয়েছে */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950/70" />
      </div>

      {/* --- HERO CONTENT CONTAINER WITH GLASS EFFECT --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center">
        
        {/* লাক্সারি ফ্রন্ট কন্টেনার যা টেক্সটকে ফুটিয়ে তুলবে কিন্তু ব্যাকগ্রাউন্ডও দেখা যাবে */}
        <div className=" p-8 sm:p-12 rounded-2xl shadow-2xl text-center flex flex-col items-center max-w-3xl">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-ping"></span>
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">Welcome to Luxury Braiding</span>
          </div>

          {/* Glowing Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase transition-all duration-500">
            {slides[activeSlide].title1}{' '}
            <span className="text-[#e11d48] inline-block relative drop-shadow-[0_0_20px_rgba(225,29,72,0.6)]">
              {slides[activeSlide].highlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-neutral-200 max-w-xl mx-auto leading-relaxed mb-10 font-medium min-h-[60px] transition-all duration-500">
            {slides[activeSlide].subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#e11d48] text-white font-bold rounded-lg hover:bg-[#be123c] transition-all duration-300 transform hover:-translate-y-1 text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(225,29,72,0.4)]">
              Book An Appointment
            </button>
            
            <a 
              href="#services"
              className="w-full sm:w-auto text-center px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 text-xs uppercase tracking-widest backdrop-blur-sm"
            >
              Explore Our Services
            </a>
          </div>

        </div>

        {/* --- CAROUSEL DOTS INDICATOR --- */}
        <div className="absolute bottom-6 flex items-center gap-3">
          {slides.map((_, dot) => (
            <button 
              key={dot}
              onClick={() => setActiveSlide(dot)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                activeSlide === dot 
                  ? 'bg-[#e11d48] w-8' 
                  : 'bg-white/40 hover:bg-white/60 w-2.5'
              }`}
              aria-label={`Slide ${dot + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;