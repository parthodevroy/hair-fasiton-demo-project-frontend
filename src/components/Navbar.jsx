
import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom'; // 👈 ১. এখানে Link ইম্পোর্ট করা হয়েছে

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // বুকিং মডাল এবং ফর্মের স্টেটসমূহ
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingData, setBookingData] = useState({
    customerName: '',
    phone: '',
    date: '',
    time: '',
    serviceName: 'General Consultation' 
  });

  // স্ক্রল পজিশন ট্র্যাক করার জন্য useEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ইনপুট চেঞ্জ হ্যান্ডলার
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingLoading(true);

    setTimeout(() => {
      alert(
        `🎉 Appointment Booked Successfully! (Demo Mode)\n\n` +
        `👤 Name: ${bookingData.customerName}\n` +
        `📞 Phone: ${bookingData.phone}\n` +
        `💇 Service: ${bookingData.serviceName}\n` +
        `📅 Date: ${bookingData.date}\n` +
        `⏰ Time: ${bookingData.time}`
      );

      setIsModalOpen(false); 
      setBookingData({ customerName: '', phone: '', date: '', time: '', serviceName: 'General Consultation' }); 
      setBookingLoading(false);
    }, 1000);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Services', path: '/service' },
    { name: 'Photo Gallery', path: '/gallary' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white text-neutral-900 shadow-md py-4'
            : 'bg-transparent text-pink-800 py-6 border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex items-center gap-3">
            <svg
              className={`w-8 h-8 transition-colors duration-300 ${
                isScrolled ? 'text-neutral-900' : 'text-red-500'
              }`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span className="font-serif font-bold text-xl md:text-2xl tracking-tight">
             Hair Style Braids
            </span>
          </div>

          {/* --- DESKTOP NAV LINKS --- */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              /* 👈 ২. এখানে <a> বদলে <Link to={...}> ব্যবহার করা হয়েছে */
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-extrabold tracking-wide transition-colors duration-300 hover:text-pink-500 ${
                  isScrolled ? 'text-neutral-900' : 'text-yellow-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- BUTTON SECTION (DESKTOP) --- */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-neutral-950 text-white hover:bg-neutral-800'
                  : 'bg-white text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              Book Appointment
            </button>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 focus:outline-none ${
              isScrolled ? 'text-neutral-900' : 'text-white'
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white text-neutral-900 border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col p-6 space-y-4 font-semibold">
            {navLinks.map((link) => (
              /* 👈 ৩. মোবাইল মেনুতেও <a> বদলে <Link to={...}> ব্যবহার করা হয়েছে */
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-neutral-700 hover:text-pink-500 transition-colors py-2 border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full text-center py-3 bg-neutral-950 text-white font-bold rounded-md hover:bg-neutral-800 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* --- POPUP MODAL BOOKING FORM --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white text-neutral-900 rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-neutral-900 mb-1">Book an Appointment</h3>
            <p className="text-sm text-neutral-500 mb-6">Fill in the details to secure your spot.</p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Your Name</label>
                <input 
                  type="text" name="customerName" required value={bookingData.customerName} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors text-sm" placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Phone Number</label>
                <input 
                  type="tel" name="phone" required value={bookingData.phone} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors text-sm" placeholder="017XXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Select Service</label>
                <select 
                  name="serviceName" value={bookingData.serviceName} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors text-sm bg-white"
                >
                  <option value="General Consultation">General Consultation</option>
                  <option value="Knotless Braids">Knotless Braids</option>
                  <option value="Box Braids">Box Braids</option>
                  <option value="Cornrows">Cornrows</option>
                  <option value="Goddess Locs">Goddess Locs</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Select Date</label>
                  <input 
                    type="date" name="date" required value={bookingData.date} onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Select Time</label>
                  <input 
                    type="time" name="time" required value={bookingData.time} onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <button 
                type="submit" disabled={bookingLoading}
                className="w-full mt-2 py-3 bg-neutral-950 hover:bg-pink-600 text-white font-bold rounded-xl transition-all text-sm uppercase tracking-wider shadow-md disabled:bg-gray-400 inline-flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                {bookingLoading ? "Processing Booking..." : "Confirm & Book Now"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;