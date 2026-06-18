// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const ServicesSection = () => {
//   const [activeTab, setActiveTab] = useState('classic');
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // আপনার নিজস্ব ব্যাকএন্ড API থেকে ডেটা নিয়ে আসা হচ্ছে
//   useEffect(() => {
//     fetch("https://hair-fasiton-demo-project-backend.vercel.app/service")
//       .then((res) => res.json())
//       .then((data) => {
//         setServices(data);
//         setLoading(false);
//         console.log(data);

//       })
//       .catch((err) => {
//         console.error("Error fetching services:", err);
//         setLoading(false);
//       });
//   }, []);

//   // সিলেক্টেড ট্যাব (classic/finishing) অনুযায়ী ফিল্টার
//   const filteredServices = services.filter(item => item.category === activeTab);

//   if (loading) {
//     return (
//       <div className="py-32 bg-white text-center flex flex-col items-center justify-center">
//         <div className="w-10 h-10 border-4 border-t-[#e11d48] border-gray-200 rounded-full animate-spin mb-4"></div>
//         <p className="text-neutral-600 font-medium tracking-wide">Loading Our Premium Services...</p>
//       </div>
//     );
//   }

//   return (
//     <section id="services" className="w-full bg-white py-20 px-4 lg:px-10 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* --- HEADER SECTION --- */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-[#1e293b] text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
//             Our Services
//           </h2>
//           <div className="w-24 h-[3px] bg-[#e11d48] mx-auto mb-6"></div>

//           <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
//             From traditional African braids to modern styles, our experienced stylists are ready to transform your hair.
//             We offer a wide range of premium services that cater to all hair types.
//           </p>
//         </div>

//         {/* --- CUSTOM TABS --- */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex flex-col sm:flex-row bg-gray-50 border border-gray-200 p-1.5 rounded-lg shadow-sm">
//             <button
//               onClick={() => setActiveTab('classic')}
//               className={`px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 ${activeTab === 'classic'
//                   ? 'bg-[#e11d48] text-white shadow-md'
//                   : 'text-neutral-600 hover:text-neutral-900'
//                 }`}
//             >
//               Classic braid styles for men and children
//             </button>
//             <button
//               onClick={() => setActiveTab('finishing')}
//               className={`px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 ${activeTab === 'finishing'
//                   ? 'bg-[#e11d48] text-white shadow-md'
//                   : 'text-neutral-600 hover:text-neutral-900'
//                 }`}
//             >
//               Finishing/maintenance and other services
//             </button>
//           </div>
//         </div>

//         {/* --- CAROUSEL --- */}
//         <div className="relative group px-2 sm:px-6">
//           {/* Nav Buttons */}
//           <button className="serv-prev absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-[#e11d48] hover:text-white p-3 rounded-full text-neutral-800 transition-all shadow-lg border border-gray-100 hidden md:block">
//             <ChevronLeft size={22} />
//           </button>

//           <button className="serv-next absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-[#e11d48] hover:text-white p-3 rounded-full text-neutral-800 transition-all shadow-lg border border-gray-100 hidden md:block">
//             <ChevronRight size={22} />
//           </button>

//           <Swiper
//             modules={[Autoplay, Pagination, Navigation]}
//             navigation={{ prevEl: '.serv-prev', nextEl: '.serv-next' }}
//             spaceBetween={24}
//             slidesPerView={1}
//             autoplay={{ delay: 4000, disableOnInteraction: false }}
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 4 },
//             }}
//             className="services-swiper !pb-14"
//           >
//             {filteredServices.map((service) => (
//               <SwiperSlide key={service._id}>
//                 <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group/card">

//                   {/* Image with zoom effect */}
//                   <div className="relative h-60 overflow-hidden bg-gray-50">
//                     <img
//                       src={service.img}
//                       alt={service.name}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
//                     />
//                   </div>

//                   {/* Details */}
//                   <div className="p-5 flex flex-col flex-grow">
//                     <h3 className="text-[#1e293b] text-lg font-bold tracking-tight mb-1.5 truncate">
//                       {service.name}
//                     </h3>

//                     <p className="text-[#e11d48] text-sm font-bold mb-3">
//                       {service.price}
//                     </p>

//                     <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed flex-grow mb-5 line-clamp-2">
//                       {service.desc}
//                     </p>

//                     {/* ডাইনামিক ডিটেইলস লিংক বাটন */}
//                     {/* ❌ আগের ভুল কোড যা ট্রাই করেছিলেন: */}
//                     {/* to={`${service._id}`} */}

//                     {/* ✅ ১০০% সঠিক কোড: */}
//                     <Link
//                       to={`/service/${service._id}`}
//                       className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-neutral-950 text-white text-xs font-semibold rounded-md hover:bg-[#e11d48] transition-colors duration-300 uppercase tracking-wider"
//                     >
//                       <span>View Details</span>
//                       <ArrowRight size={14} />
//                     </Link>
//                   </div>

//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//       </div>

//       <style jsx="true" global="true">{`
//         .services-swiper .swiper-pagination-bullet { background: #cbd5e1 !important; opacity: 0.7; }
//         .services-swiper .swiper-pagination-bullet-active { background: #e11d48 !important; opacity: 1; width: 22px; border-radius: 4px; }
//       `}</style>
//     </section>
//   );
// };

// export default ServicesSection;
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hair-fasiton-demo-project-backend.vercel.app/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
  }, []);

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(item => item.category === activeTab);

  if (loading) {
    return (
      <div className="py-32 bg-white text-center flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-[#e11d48] border-gray-200 rounded-full animate-spin mb-4"></div>
        <p className="text-neutral-600 font-medium tracking-wide">Loading Our Premium Services...</p>
      </div>
    );
  }

  return (
    <section id="services" className="w-full bg-white py-20 px-4 lg:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[#1e293b] text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">
            Our Services
          </h2>
          <div className="w-24 h-[3px] bg-[#e11d48] mx-auto mb-6"></div>
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
            From traditional African braids to modern styles, our experienced stylists are ready to transform your hair.
          </p>
        </div>

        {/* --- CUSTOM TABS --- */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center bg-gray-50 border border-gray-200 p-1.5 rounded-lg shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 ${activeTab === 'all' ? 'bg-[#e11d48] text-white shadow-md' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('classic')}
              className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 ${activeTab === 'classic' ? 'bg-[#e11d48] text-white shadow-md' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              Classic
            </button>
            <button
              onClick={() => setActiveTab('modern')}
              className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 ${activeTab === 'modern' ? 'bg-[#e11d48] text-white shadow-md' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              Modern
            </button>
            <button
              onClick={() => setActiveTab('fade')}
              className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 ${activeTab === 'fade' ? 'bg-[#e11d48] text-white shadow-md' : 'text-neutral-600 hover:text-neutral-900'}`}
            >
              Fade
            </button>
          </div>
        </div>

        {/* --- GRID DISPLAY (সব প্রোডাক্ট একসাথে দেখানোর জন্য পরিবর্তন) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
          {filteredServices.map((service) => (
            <div key={service._id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group/card">
              
              <div className="relative h-60 overflow-hidden bg-gray-50">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-[#1e293b] text-lg font-bold tracking-tight mb-1.5 truncate">
                  {service.name}
                </h3>
                <p className="text-[#e11d48] text-sm font-bold mb-3">
                  {service.price}
                </p>
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed flex-grow mb-5 line-clamp-2">
                  {service.desc}
                </p>

                <Link
                  to={`/service/${service._id}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-neutral-950 text-white text-xs font-semibold rounded-md hover:bg-[#e11d48] transition-colors duration-300 uppercase tracking-wider"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* যদি কোনো ক্যাটাগরিতে প্রোডাক্ট না থাকে */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-neutral-500">
            No services found in this category.
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesSection;