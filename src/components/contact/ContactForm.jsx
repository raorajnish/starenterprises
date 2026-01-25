import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'VRV / VRF Installation',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle normal form submission here (e.g., API call)
      alert("Form submitted successfully!");
    }
  };

  const handleWhatsApp = () => {
    if (validate()) {
      const message = `*Enquiry from Website*
      
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}

*Message:*
${formData.message}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/918928294282?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-2 border-[var(--primary-color)] border-dashed flex-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Send an Enquiry</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-3 bg-gray-50 rounded-lg border focus:ring-1 outline-none transition-all text-sm ${
                errors.name 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-gray-200 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-4 py-3 bg-gray-50 rounded-lg border focus:ring-1 outline-none transition-all text-sm ${
                errors.email 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-gray-200 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
        </div>

        {/* Row 2: Phone & Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 99999 99999"
              className={`w-full px-4 py-3 bg-gray-50 rounded-lg border focus:ring-1 outline-none transition-all text-sm ${
                errors.phone 
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                  : "border-gray-200 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Service</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all text-sm text-gray-700 cursor-pointer"
            >
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
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            placeholder="Tell us about your project..."
            className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] outline-none transition-all text-sm resize-none"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* <button
            type="submit"
            className="flex-1 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md flex items-center justify-center gap-2 group"
          >
            Send Message
            <Send className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button> */}
          
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex-1 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-green-800 transition-colors duration-300 shadow-md flex items-center justify-center gap-2 group"
          >
            Send via WhatsApp
            <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;