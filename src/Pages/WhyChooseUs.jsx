import React from 'react';
import { ShieldCheck, Sparkles, Clock, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <Sparkles className="w-6 h-6 text-pink-500" />,
      title: 'Premium Styling',
      desc: 'We offer precise, tailored hair braiding and styling designed to perfectly complement your unique look and personal beauty.'
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-6 h-6 text-pink-500" />,
      title: 'Hygienic & Safe',
      desc: 'Your health and safety matter. We ensure 100% sanitized tools and a clean, comfortable salon environment for every client.'
    },
    {
      id: 3,
      icon: <Clock className="w-6 h-6 text-pink-500" />,
      title: 'Save Your Time',
      desc: 'With our seamless online booking system, you can lock in your exact schedule and enjoy zero waiting time at the salon.'
    },
    {
      id: 4,
      icon: <HeartHandshake className="w-6 h-6 text-pink-500" />,
      title: 'Client Satisfaction',
      desc: 'From the moment you walk in to your final reveal, our friendly expert staff ensures you get an unmatched VIP experience.'
    }
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-12 border-t border-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Text Column (2-cols width) */}
          <div className="lg:col-span-2 space-y-5 text-center lg:text-left">
            <span className="text-[#e11d48] text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded-full inline-block">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
              Why People Choose Our Salon
            </h2>
            <div className="w-12 h-1 bg-[#e11d48] mx-auto lg:mx-0 rounded-full"></div>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              We don’t just braid hair; we care for your confidence. Discover the premium standards that make us the top-rated braiding parlor in town.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-4 bg-neutral-50 px-5 py-3 rounded-2xl border border-neutral-100 shadow-sm">
                <span className="text-2xl font-black text-neutral-950">99%</span>
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider text-left border-l border-neutral-200 pl-4">
                  Satisfied <br /> Customers
                </span>
              </div>
            </div>
          </div>

          {/* Right Features Grid (3-cols width) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item) => (
              <div 
                key={item.id}
                className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-pink-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-rose-50 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mt-4 tracking-tight group-hover:text-[#e11d48] transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;