import React, { useState } from 'react';
import { MapPin, Mail, Phone, MessageSquare, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ডেমো সাবমিট হ্যান্ডলার (১ সেকেন্ডের ফেক লোডিং ইফেক্টসহ)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert(
        `🎉 Message Sent Successfully! (Demo Mode)\n\n` +
        `👤 From: ${formData.name}\n` +
        `📩 Email: ${formData.email}\n` +
        `📝 Subject: ${formData.subject}\n` +
        `💬 Message: ${formData.message}`
      );
      
      setFormData({ name: '', email: '', subject: '', message: '' }); // ফর্ম রিসেট
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-20 px-4 sm:px-6 lg:px-8 pt-16">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-[#e11d48] text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded-full">
          Find Us Here
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mt-3 tracking-tight">
          Contact Us
        </h2>
        <div className="w-12 h-1 bg-[#e11d48] mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-neutral-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Have questions or ready to book an appointment? Reach out to us using any of the methods below, and our team will get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Section: Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-neutral-100">
          
          {/* Get In Touch Info */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-2">Get In Touch</h3>
              <p className="text-neutral-500 text-sm">Feel free to drop by or reach us through any channel.</p>
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-rose-50 text-[#e11d48] rounded-xl shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Our Location</h4>
                  <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
                    your address,<br />xx, MD 20877
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-rose-50 text-[#e11d48] rounded-xl shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Email Us</h4>
                  <a href="mailto:diamond.style.braidsalon@gmail.com" className="text-neutral-600 hover:text-[#e11d48] text-sm mt-1 block transition-colors break-all">
                    example@gmail.com
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-rose-50 text-[#e11d48] rounded-xl shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Call Us</h4>
                  <a href="tel:+12409265242" className="text-neutral-600 hover:text-[#e11d48] text-sm mt-1 block font-medium transition-colors">
                    +1 (240) 926-5242
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shadow-sm">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Contact WhatsApp</h4>
                  <a href="https://wa.me/12409265242" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-emerald-600 text-sm mt-1 block font-medium transition-colors">
                    +1 (240) 926-5242
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="lg:col-span-3 w-full h-[320px] lg:h-full min-h-[350px] rounded-xl overflow-hidden shadow-inner border border-neutral-100">
            <iframe 
              title="Salon Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.3526978589635!2d-77.19794532341517!3d39.14382583216834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b62ca70912f2c1%3A0xc3199859f9ef7cfb!2s572%20N%20Frederick%20Ave%2C%20Gaithersburg%2C%20MD%2020877%2C%20USA!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              className="w-full h-full border-0 grayscale-[10%] contrast-[110%] hover:grayscale-0 transition-all duration-700" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom Section: Premium Message Form */}
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-neutral-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900">Send Us A Message</h3>
            <p className="text-neutral-500 text-sm mt-1">Have custom requests? Fill out the form below.</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Full Name</label>
                <input 
                  type="text" name="name" required value={formData.name} onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all text-sm bg-neutral-50/50" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Email Address</label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all text-sm bg-neutral-50/50" 
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Subject</label>
              <input 
                type="text" name="subject" required value={formData.subject} onChange={handleInputChange}
                className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all text-sm bg-neutral-50/50" 
                placeholder="Inquiry about custom styling"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Your Message</label>
              <textarea 
                name="message" required rows="5" value={formData.message} onChange={handleInputChange}
                className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-[#e11d48] focus:ring-1 focus:ring-[#e11d48] transition-all text-sm bg-neutral-50/50 resize-none" 
                placeholder="Write your thoughts here..."
              />
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full py-4 bg-neutral-950 hover:bg-[#e11d48] text-white font-bold rounded-xl transition-all duration-300 uppercase tracking-widest text-sm shadow-md inline-flex items-center justify-center gap-2 disabled:bg-neutral-400"
            >
              {loading ? (
                "Sending Message..."
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;