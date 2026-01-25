import React from 'react';

const MapComponent = () => {
  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-md relative group border-2 border-[var(--primary-color)] border-dashed">
      <a 
        href="https://maps.google.com/maps?q=Gurudatta+Nagar+Pipe+Line+Road+Kurla+West+Mumbai+400070" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full h-full cursor-pointer"
        title="Open in Google Maps"
      >
        <iframe
          title="Star Enterprises Location"
          src="https://maps.google.com/maps?q=Gurudatta%20Nagar%2C%20Pipe%20Line%20Road%2C%20Kurla%20West%2C%20Mumbai%20400070&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" hover:grayscale-0 transition-all duration-500 pointer-events-none"
        ></iframe>
      </a>
    </div>
  );
};

export default MapComponent;