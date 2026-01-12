import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-2 border-[var(--primary-color)] border-dashed flex-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Send an Enquiry</h2>
      
      <form className="space-y-4">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Row 2: Phone & Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Phone</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all text-sm"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Service</label>
            <select className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all text-sm text-gray-700 cursor-pointer">
              <option>VRV / VRF Installation</option>
              <option>Ductable AC Service</option>
              <option>AMC Maintenance</option>
              <option>Repair / Gas Refill</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Message</label>
          <textarea
            rows="3"
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all text-sm resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[var(--primary-color)] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md flex items-center justify-center gap-2 group"
        >
          Send Message
          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;