import React from "react";
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Facebook
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#FFFBF0] pt-10 pb-8 lg:pt-16 overflow-hidden border-t border-gray-100">
      
      {/* Background Blobs (Adjusted for mobile to be less intrusive) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 lg:w-96 lg:h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 lg:w-80 lg:h-80 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* Main Grid: 2 Columns on Mobile, 4 on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-8 mb-10 lg:mb-12">
          
          {/* 1. BRAND SECTION (Full width on mobile) */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Star Enterprises Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                STAR ENTERPRISES
              </span>
            </Link>
            
            <p className="text-slate-500 leading-relaxed text-sm max-w-sm">
              Premium HVAC solutions for industrial and commercial applications. Quality-first chiller, AHU, and cooling tower services.
            </p>
            
            {/* Social Icons - Tighter gap to description */}
            <div className="flex space-x-3 pt-1">
              <SocialIcon href="#" Icon={Instagram} />
              <SocialIcon href="#" Icon={Linkedin} />
              <SocialIcon href="#" Icon={Twitter} />
            </div>
          </div>

          {/* 2. QUICK LINKS (Left side on mobile) */}
          <div className="col-span-1">
            <h3 className="text-slate-900 font-bold text-base lg:text-lg mb-1 lg:mb-2">Quick Links</h3>
            <ul className="space-y-1 lg:space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/services" label="Our Services" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>

          {/* 3. SERVICES (Right side on mobile) */}
          <div className="col-span-1">
            <h3 className="text-slate-900 font-bold text-base lg:text-lg mb-4 lg:mb-6">Services</h3>
            <ul className="space-y-1 lg:space-y-3">
              <FooterServiceItem label="Chiller Descaling" />
              <FooterServiceItem label="AHU Services" />
              <FooterServiceItem label="Cooling Towers" />
              <FooterServiceItem label="VAM Chillers" />
              <FooterServiceItem label="PHE Descaling" />
            </ul>
          </div>

          {/* 4. CONTACT INFO (Full width on mobile for readability) */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-slate-900 font-bold text-base lg:text-lg mb-4 lg:mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              {/* Address */}
              <li className="flex items-start text-slate-500">
                <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 shrink-0" />
                <span>
                  Room No. 09, First Floor, <br />
                  Gurudatta Nagar, Pipe Line Road, <br />
                  Near Chawl No. 05, <br />
                  Kurla West, Mumbai – 400070
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center text-slate-500">
                <Phone className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918928294282" className="hover:text-blue-600 transition">+91 8928294282</a>
                  <a href="tel:+917985385879" className="hover:text-blue-600 transition">+91 7985385879</a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center text-slate-500">
                <Mail className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                <a href="mailto:starenterprises8928@gmail.com" className="hover:text-blue-600 transition break-all">
                  starenterprises8928@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-100  flex flex-col md:flex-row justify-between items-center text-xs lg:text-sm text-slate-400 gap-4">
          <p className="text-center md:text-left">© 2026 STAR ENTERPRISES. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* --- Sub-Components --- */

const SocialIcon = ({ href, Icon }) => (
  <a
    href={href}
    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
    aria-label="Social Link"
  >
    <Icon size={18} />
  </a>
);

const FooterLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="group flex items-center text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200"
    >
      <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
      {label}
    </Link>
  </li>
);

const FooterServiceItem = ({ label }) => (
  <li className="flex items-center text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200 cursor-default">
    <span className="w-1.5 h-1.5 rounded-full bg-blue-200 mr-2 lg:mr-3"></span>
    {label}
  </li>
);