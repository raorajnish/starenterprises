import React from 'react';

const MapComponent = () => {
  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-md relative group border-2 border-[var(--primary-color)] border-dashed">
      <iframe
        title="Star Enterprises Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.455436814987!2d72.94663637497985!3d19.1752779820501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f9e67f08b3%3A0x6a19363387877522!2sSagar%20Garden!5e0!3m2!1sen!2sin!4v1709228919241!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className=" group-hover:grayscale-0 transition-all duration-500"
      ></iframe>
      
      {/* Mobile Overlay Hint (Optional) */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow text-xs font-semibold text-gray-600 md:hidden pointer-events-none">
        Use two fingers to move map
      </div>
    </div>
  );
};

export default MapComponent;