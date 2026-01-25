import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutCEO = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // CEO Data Array
  const ceos = [
    {
      id: 1,
      name: "Ehsan Malik",
      role: "Founder & Proprietor, Star Enterprises",
      image: "/founders/Ehsan_Malik_Founder.jpeg",
    },
    {
      id: 2,
      name: "Raju Jaiswar",
      role: "Founder & Proprietor, Star Enterprises",
      image: "/founders/Raju_Jaiswar_Founder.jpeg",
    },
  ];

  // Cycle CEO every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ceos.length);
    }, 2500); // 2.5s looks smoother than 2s for readability, but you can change to 2000

    return () => clearInterval(interval);
  }, [ceos.length]);

  // GSAP Entry Animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Image Slide In
      gsap.from(".ceo-image-wrapper", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2. Content Fade Up
      gsap.from(".ceo-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-14 bg-[#FFFBF0]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT: CEO IMAGE SECTION --- */}
          <div className="ceo-image-wrapper w-full lg:w-1/2 relative h-[450px] md:h-[500px]">
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white group">
              
              {/* Image Cycler */}
              {ceos.map((ceo, index) => (
                <div
                  key={ceo.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={ceo.image}
                    alt={ceo.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* MOBILE ONLY: Glassmorphic Overlay for Name/Role */}
                  <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-md border-t border-white/20 text-white">
                    <h3 className="text-xl font-bold font-tagass tracking-wide">
                      {ceo.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-90">
                      {ceo.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative background shape */}
            <div className="absolute top-10 -left-10 w-full h-full bg-[var(--primary-color)]/10 rounded-2xl -z-0"></div>
          </div>

          {/* --- RIGHT: CONTENT SECTION --- */}
          <div className="ceo-content w-full lg:w-1/2 space-y-8">
            <Quote size={48} className="text-[var(--primary-color)] opacity-40" />
            
            <div className="space-y-6 text-secondary font-carrois text-lg leading-relaxed text-justify">
              <p>
                Built on years of hands-on field experience, our work is centered around specialized chiller descaling and HVAC system optimization. Backed by skilled technicians, we focus on precision-driven chemical and mechanical cleaning processes that improve efficiency, reduce downtime, and extend equipment life. Every project is approached with technical care, safety, and a commitment to long-term system performance.
              </p>
              
              <p className="italic font-medium text-maintext">
                “Our commitment is simple — deliver quality services that ensure reliable performance and long-term value.”
              </p>
            </div>

            {/* DESKTOP ONLY: Signature Block (Hidden on Mobile) */}
            <div className="hidden lg:block pt-6 border-t border-gray-200 relative min-h-[80px]">
              {ceos.map((ceo, index) => (
                <div
                  key={ceo.id}
                  className={`absolute top-6 left-0 w-full transition-all duration-700 ease-in-out ${
                    index === activeIndex 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <h3 className="text-3xl font-bold font-tagass text-[var(--color-green)] mb-1">
                    {ceo.name}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-secondary/60">
                    {ceo.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCEO;