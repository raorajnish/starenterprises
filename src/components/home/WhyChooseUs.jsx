import React, { useLayoutEffect, useRef } from "react";
import { Wrench, ShieldCheck, Clock, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  const features = [
    {
      icon: <Wrench size={48} />,
      title: "Expert Service",
      description: "Specialized in Chiller Descaling and Cooling Tower Descaling",
    },
    {
      icon: <ShieldCheck size={48} />,
      title: "Quality First",
      description: "Committed to delivering the highest quality service.",
    },
    {
      icon: <Clock size={48} />,
      title: "24/7 Support",
      description: "Available around the clock for emergency services.",
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal
      gsap.fromTo(
        ".section-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // Starts when top of section hits 80% of viewport
          },
        }
      );

      // 2. Cards Stagger Reveal
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1, // 0.2s delay between each card
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cards-grid",
            start: "top 85%", // Starts slightly later so user sees the grid entering
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-[#FFFBF0] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold font-tagass text-maintext mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-secondary font-fira">
            We provide comprehensive HVAC solutions with a commitment to
            excellence and customer satisfaction.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 relative bg-white p-8 rounded-xl border-3 border-gray-200 shadow-md
                         transition-all duration-300 hover:bg-gray-100 hover:shadow-xl
                         hover:border-dashed hover:border-gray-400
                         flex flex-col items-center text-center group cursor-default"
            >
              {/* Icon */}
              <div className="mb-6 p-4 bg-primary/5 rounded-full text-primary group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-fira text-maintext mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-secondary font-carrois leading-relaxed group-hover:text-maintext transition-colors duration-300">
                {feature.description}
              </p>

              {/* Bottom inset accent */}
              <div
                className="pointer-events-none absolute inset-x-6 bottom-0 h-0.5
                           bg-gradient-to-r from-transparent via-primary to-transparent
                           opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;