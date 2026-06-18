import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ShieldCheck, Clock, X } from 'lucide-react';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // বুকিং মডাল এবং ফর্মের স্টেটসমূহ
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    customerName: '',
    phone: '',
    date: '',
    time: ''
  });
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    fetch(`https://hair-fasiton-demo-project-backend.vercel.app/service/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch service details");
        return res.json();
      })
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching service details:", err);
        setLoading(false);
      });
  }, [id]);

  // ইনপুট চেঞ্জ হ্যান্ডলার
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  // বুকিং সাবমিট হ্যান্ডলার (ব্যাকএন্ডে পাঠানোর জন্য)
  // বুকিং সাবমিট হ্যান্ডলার (ডেমো প্রজেক্টের জন্য ফেক লোডিং ও সাকসেস মেসেজ)
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingLoading(true);

    // ১ সেকেন্ড (১০০০ মিলিসেকেন্ড) পর সাকসেস মেসেজ দেখাবে
    setTimeout(() => {
      // সাকসেস অ্যালার্ট মেসেজ
      alert(
        `🎉 Appointment Booked Successfully!\n\n` +
        `👤 Name: ${bookingData.customerName}\n` +
        `📞 Phone: ${bookingData.phone}\n` +
        `💇 Style: ${service.name}\n` +
        `📅 Date: ${bookingData.date}\n` +
        `⏰ Time: ${bookingData.time}`
      );

      setIsModalOpen(false); // মডাল বন্ধ হবে
      setBookingData({ customerName: '', phone: '', date: '', time: '' }); // ফর্মের ইনপুটগুলো ফাঁকা হবে
      setBookingLoading(false); // লোডিং স্টেট বন্ধ হবে
    }, 1000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-[#e11d48] border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-neutral-800 mb-4">Service Not Found!</h2>
        <Link to="/service" className="inline-flex items-center gap-2 px-5 py-2 bg-[#e11d48] text-white rounded-md font-semibold">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-28">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        <div className="p-6 bg-white border-b border-gray-100">
          <Link to="/service" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-[#e11d48] transition-colors">
            <ArrowLeft size={16} /> Back to All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10">
          <div className="rounded-xl overflow-hidden bg-gray-100 h-[350px] sm:h-[450px] shadow-sm">
            <img src={service.img} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-pink-50 text-[#e11d48] text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                {service.category} Style
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-3">{service.name}</h1>
              <p className="text-2xl font-black text-[#e11d48] mb-6">{service.price}</p>
              <hr className="border-gray-100 mb-6" />
              <p className="text-neutral-600 text-base leading-relaxed mb-8">{service.desc}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-neutral-700 font-medium">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span>Premium Organic Extensions Used</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-700 font-medium">
                  <Clock size={18} className="text-[#e11d48]" />
                  <span>Duration: Fits your comfort level</span>
                </div>
              </div>
            </div>

            {/* বুকিং বাটন এখন মডাল ওপেন করবে */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-neutral-950 hover:bg-[#e11d48] text-white font-bold rounded-xl transition-colors duration-300 uppercase tracking-widest text-sm shadow-md inline-flex items-center justify-center gap-2"
            >
              <Calendar size={18} />
              Book This Hair Appointment
            </button>
          </div>
        </div>
      </div>

      {/* --- POPUP MODAL BOOKING FORM --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-neutral-900 mb-1">Confirm Your Appointment</h3>
            <p className="text-sm text-neutral-500 mb-6">Styling: <span className="font-semibold text-[#e11d48]">{service.name}</span></p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Your Name</label>
                <input 
                  type="text" name="customerName" required value={bookingData.customerName} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#e11d48] transition-colors text-sm" placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Phone Number</label>
                <input 
                  type="tel" name="phone" required value={bookingData.phone} onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#e11d48] transition-colors text-sm" placeholder="017XXXXXXXX"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Select Date</label>
                  <input 
                    type="date" name="date" required value={bookingData.date} onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#e11d48] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Select Time</label>
                  <input 
                    type="time" name="time" required value={bookingData.time} onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#e11d48] transition-colors text-sm"
                  />
                </div>
              </div>

              <button 
                type="submit" disabled={bookingLoading}
                className="w-full mt-2 py-3 bg-[#e11d48] hover:bg-rose-700 text-white font-bold rounded-xl transition-all text-sm uppercase tracking-wider shadow-md disabled:bg-gray-400"
              >
                {bookingLoading ? "Processing Booking..." : "Confirm & Book Now"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;