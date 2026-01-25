import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-[var(--primary-color)] to-blue-800 p-6 rounded-2xl text-white w-full lg:w-80 h-full shadow-xl relative overflow-hidden flex flex-col justify-between">
      
      {/* Decorative Background */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

      {/* Top Section */}
      <div>
        <h2 className="text-xl font-bold mb-1">Contact Info</h2>
        <p className="text-blue-100 text-xs mb-6">Get in touch with our expert team.</p>
        
        {/* Contact Details List */}
        <div className="space-y-4">
          
          {/* Address */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-[var(--color-yellow)]">
              <MapPin className="w-5 h-5" />
            </div>
            <p className="text-sm leading-snug text-blue-50">
              Room No. 09, First Floor, Gurudatta Nagar, Pipe Line Road, Near Chawl No. 05, Kurla West, Mumbai – 400070
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-[var(--color-yellow)]">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-sm text-blue-50">
              <p>+91 8928294282</p>
              <p>+91 7985385879</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-[var(--color-yellow)]">
              <Mail className="w-5 h-5" />
            </div>
            <p className="text-sm text-blue-50 break-all">starenterprises8928@gmail.com</p>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-[var(--color-yellow)]">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-sm text-blue-50">
              <p>Mon - Sat</p>
              <p>9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Bottom Section */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <p className="text-[10px] text-blue-200 uppercase tracking-wider">
          Star Enterprises • HVAC Solutions
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;