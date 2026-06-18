import React from 'react';
import { Facebook, Instagram, Award, Star, Sparkles } from 'lucide-react';

const Team = () => {
  // আপনার সেলুনের এক্সপার্ট টিম মেম্বারদের ডাটা
  const teamMembers = [
    {
      id: 1,
      name: 'Jessica Evans',
      role: 'Master Braider & Founder',
      experience: '8+ Years Exp',
      specialty: 'Knotless & Box Braids',
      rating: '5.0',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Amara Okafor',
      role: 'Cornrow Specialist',
      experience: '5+ Years Exp',
      specialty: 'Stitch Lines & Feed-ins',
      rating: '4.9',
      img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Naomi Carter',
      role: 'Locs & Twist Artist',
      experience: '6+ Years Exp',
      specialty: 'Goddess Locs & Passion Twists',
      rating: '4.9',
      img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop',
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-20 px-4 sm:px-6 lg:px-8 pt-28">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-[#e11d48] text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded-full inline-flex items-center gap-1">
          <Sparkles size={12} /> Meet Glamour Creators
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mt-3 tracking-tight">
          Our Expert Stylists
        </h2>
        <div className="w-12 h-1 bg-[#e11d48] mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Our talented and certified hair artists are dedicated to bringing your dream look to life with precision, care, and premium styling.
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-neutral-100 transition-all duration-500 group"
          >
            {/* Image & Overlay container */}
            <div className="relative h-[360px] w-full overflow-hidden bg-neutral-100">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Badge (Experience) */}
              <span className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                <Award size={12} className="text-rose-400" />
                {member.experience}
              </span>

              {/* Floating Badge (Rating) */}
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-neutral-900 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Star size={12} className="text-amber-500 fill-amber-500" />
                {member.rating}
              </span>

              {/* Social Media Hover Overlay */}
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-3">
                <a 
                  href="https://facebook.com" target="_blank" rel="noreferrer"
                  className="w-10 h-10 bg-white text-neutral-900 hover:bg-[#e11d48] hover:text-white rounded-full flex items-center justify-center shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="w-10 h-10 bg-white text-neutral-900 hover:bg-[#e11d48] hover:text-white rounded-full flex items-center justify-center shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 text-center">
              <p className="text-[#e11d48] text-xs font-bold uppercase tracking-widest mb-1">
                {member.role}
              </p>
              <h3 className="text-xl font-bold text-neutral-900 tracking-tight transition-colors group-hover:text-[#e11d48]">
                {member.name}
              </h3>
              
              <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col items-center justify-center">
                <span className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider mb-1">Specialty</span>
                <span className="text-sm text-neutral-600 font-semibold px-3 py-1 bg-neutral-50 rounded-lg border border-neutral-100">
                  {member.specialty}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;