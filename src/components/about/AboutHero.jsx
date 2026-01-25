import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const AboutHero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Image Scale Effect
      gsap.from(".hero-img", {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out",
      });

      // 2. Card Slide Up
      gsap.from(".hero-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="relative w-full pb-12 pt-4 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto relative">
        
        {/* Background Image Container */}
        {/* Adjusted height to be prominent but not taking full viewport on laptops */}
        <div className="relative w-full h-[550px] md:h-[650px] rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/services/service6.png"
            alt="Star Enterprises HVAC Team"
            className="hero-img w-full h-full object-cover"
          />
          {/* subtle gradient overlay for image depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

        {/* Floating White Card */}
        {/* Positioned absolutely at the bottom, overlapping the image */}
        <div className="hero-card absolute bottom-6 bg-bottom-accent md:bottom-10 left-0 right-0 mx-auto w-[92%] md:w-[90%] rounded-2xl shadow-2xl p-6 md:p-10 lg:p-12">
          
          {/* Grid Layout: Left (Title) vs Right (Desc + Btn) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start md:items-center">
            
            {/* LEFT COLUMN: Badge + Heading */}
            <div className="space-y-3">
              <span className="inline-block py-1.5 px-3 rounded bg-blue-50 text-blue-600 text-[10px] md:text-xs font-bold tracking-widest uppercase font-carrois">
                Affordable, Reliable, & Built to Last
              </span>
              <h1 className="text-2xl md:text-4xl font-bold font-fira text-slate-900 leading-tight">
                Strong, Durable, and <br className="hidden md:block" />
                <span className="text-blue-600">Efficient HVAC Solutions</span>
              </h1>
            </div>

            {/* RIGHT COLUMN: Description + Button */}
            <div className="space-y-6 flex flex-col items-start lg:items-start">
              <p className="text-slate-500 font-carrois text-sm md:text-base leading-relaxed text-justify md:text-left">
                When it comes to protecting your facility, the HVAC system is
                the first line of defense. We provide top-notch cooling services
                designed to safeguard your operations, ensuring comfort and 
                efficiency around the clock.
              </p>
              
              <button className="group relative overflow-hidden bg-[var(--primary-color)] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-lg font-bold text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  SCHEDULE CONSULTATION <ArrowRight size={18} />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;