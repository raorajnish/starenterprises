import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/heroimage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-white space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold archivo leading-tight tracking-wide">
            Undertaking All Types of Chiller & HVAC Services
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 font-carrois max-w-lg leading-relaxed">
            Quality-first solutions for chiller descaling, cooling tower service, AHU maintenance, and complete AC repair services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/services" 
              className="btn btn-primary"
            >
              Our Services
            </Link>
            
            <a 
              href="tel:+918928294282" 
              className="btn btn-outline"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Right Side - Empty as per layout or ready for future content */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default Hero;
