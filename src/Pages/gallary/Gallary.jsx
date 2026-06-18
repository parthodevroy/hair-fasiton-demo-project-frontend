import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Gallary = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // আপনার গ্যালারির ডেমো ডাটা (এখানে আপনার ইমেজের পাথ বা লিঙ্ক বসাবেন)
 const galleryItems = [
    { id: 1, title: 'Knotless Braids', category: 'Braids', img: 'https://images.pexels.com/photos/37489459/pexels-photo-37489459.jpeg' },
    { id: 2, title: 'Stitch Cornrows', category: 'Cornrows', img: 'https://plus.unsplash.com/premium_photo-1694618624110-1a7d0cac51e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWZyaWNhbiUyMEFtZXJpY2FuJTIwaGFpciUyMGJyYWlkaW5nfGVufDB8fDB8fHww' },
    { id: 3, title: 'Box Braids with Curls', category: 'Braids', img: 'https://images.unsplash.com/photo-1665923148259-3340e61d3ff2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, title: 'Fulani Inspired Style', category: 'Trending', img: 'https://images.unsplash.com/photo-1641381963146-5bb5941a4bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFmcmljYW4lMjBBbWVyaWNhbiUyMGhhaXIlMjBicmFpZGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 5, title: 'Tribal Feed-in', category: 'Cornrows', img: 'https://images.unsplash.com/photo-1688592969417-953dd3c2b9d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFmcmljYW4lMjBBbWVyaWNhbiUyMGhhaXIlMjBicmFpZGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 6, title: 'Goddess Locs', category: 'Trending', img: 'https://images.unsplash.com/photo-1657446969158-e6b37b6d2692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWZyaWNhbiUyMEFtZXJpY2FuJTIwaGFpciUyMGJyYWlkaW5nfGVufDB8fDB8fHww' },
    { id: 7, title: 'Jumbo Box Braids', category: 'Braids', img: 'https://plus.unsplash.com/premium_photo-1708969431010-504162ca1379?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEFmcmljYW4lMjBBbWVyaWNhbiUyMGhhaXIlMjBicmFpZGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 8, title: 'Sleek Feed-in Ponytail', category: 'Cornrows', img: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=600&auto=format&fit=crop' },
    { id: 9, title: 'Bohemian Passion Twists', category: 'Trending', img: 'https://images.unsplash.com/photo-1618803210382-99dbc64f10e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFmcmljYW4lMjBBbWVyaWNhbiUyMGhhaXIlMjBicmFpZGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 10, title: 'Lemonade Side Braids', category: 'Cornrows', img: 'https://images.unsplash.com/photo-1593570224405-b00c8b8f0b35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFmcmljYW4lMjBBbWVyaWNhbiUyMGhhaXIlMjBicmFpZGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 11, title: 'Micro Triangle Braids', category: 'Braids', img: 'https://images.unsplash.com/photo-1594254773847-9fce26e950bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHNhbG9uJTIwTWljcm8lMjBUcmlhbmdsZSUyMEJyYWlkc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 12, title: 'Butterfly Distressed Locs', category: 'Trending', img: 'https://images.unsplash.com/photo-1567884092701-1e55852d7877?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWZyaWNhbiUyMEFtZXJpY2FuJTIwaGFpciUyMGJyYWlkaW5nfGVufDB8fDB8fHww' },
    { id: 13, title: 'Classic Goddess Braids', category: 'Braids', img: 'https://plus.unsplash.com/premium_photo-1733342654514-820af792c969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFpciUyMHNhbG9uJTIwTWljcm8lMjBUcmlhbmdsZSUyMEJyYWlkc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 14, title: 'Zig-Zag Stitch Lines', category: 'Cornrows', img: 'https://images.unsplash.com/photo-1606416132922-22ab37c1231e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFmcmljYW4lMjBBbWVyaWNhbiUyMGhhaXIlMjBicmFpZGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 15, title: 'Ombre Goddess Twists', category: 'Trending', img: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=600&auto=format&fit=crop' },
    { id: 16, title: 'Chunky Flat Twists', category: 'Cornrows', img: 'https://images.unsplash.com/photo-1583899536095-98b6c82324ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFmcmljYW4lMjBBbWVyaWNhbiUyMGhhaXIlMjBicmFpZGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 17, title: 'Honey Blonde Box Braids', category: 'Braids', img: 'https://plus.unsplash.com/premium_photo-1726862841008-ce1b97cefc40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEFmcmljYW4lMjBBbWVyaWNhbiUyMGhhaXIlMjBicmFpZGluZ3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 18, title: 'Curly Ends Cornrows', category: 'Trending', img: 'https://images.unsplash.com/photo-1618803208984-d8ce17b9093d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEFmcmljYW4lMjBBbWVyaWNhbiUyMGhhaXIlMjBicmFpZGluZ3xlbnwwfHwwfHx8MA%3D%3D' }
  ];

  const categories = ['All', 'Braids', 'Cornrows', 'Trending'];

  // ফিল্টার অনুযায়ী ইমেজ সিলেক্ট করা
  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // লাইটবক্স মডাল ওপেন হ্যান্ডলার
  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  // নেক্সট ইমেজ দেখা
  const nextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIdx]);
    setCurrentIndex(nextIdx);
  };

  // প্রিভিয়াস ইমেজ দেখা
  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIdx]);
    setCurrentIndex(prevIdx);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-20 px-4 sm:px-6 lg:px-8 pt-16">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-[#e11d48] text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded-full">
          Our Lookbook
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mt-3 tracking-tight">
          Photo Gallery
        </h2>
        <div className="w-12 h-1 bg-[#e11d48] mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Browse through our gallery and discover some of our signature creations. Each hairstyle is unique, each style is a masterpiece. Get inspired and find your next look!
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2 text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full transition-all duration-300 ${
              activeFilter === category
                ? 'bg-neutral-950 text-white shadow-md scale-105'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Premium Gallery Grid */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(item, index)}
            className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-white border border-neutral-100"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-rose-400 text-xs font-bold uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-white text-lg font-bold mt-1 flex items-center justify-between">
                  {item.title}
                  <span className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                    <Maximize2 size={14} />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- PREMIUM LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>

          {/* Navigation Buttons */}
          <button 
            className="absolute left-4 sm:left-6 text-white/70 hover:text-white p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all"
            onClick={prevImage}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-4 sm:right-6 text-white/70 hover:text-white p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all"
            onClick={nextImage}
          >
            <ChevronRight size={24} />
          </button>

          {/* Lightbox Content */}
          <div 
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.img} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <p className="text-rose-400 text-xs font-bold uppercase tracking-wider">{selectedImage.category}</p>
              <h4 className="text-white text-lg font-semibold mt-0.5">{selectedImage.title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallary;