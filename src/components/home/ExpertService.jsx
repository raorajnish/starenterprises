import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExpertService = () => {
  const containerRef = useRef(null);

  const features = [
    "Experienced Technicians",
    // "Transparent Pricing",
    "Quality Guarantee",
    "Quick Response Time",
    "Modern Equipment",
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Starts animation when top of section hits 75% of viewport height
          toggleActions: "play none none reverse",
        },
      });

      // 1. Image Reveal (Width 0 -> 100%)
      tl.fromTo(
        ".image-mask",
        { width: "0%" },
        { 
          width: "100%", 
          duration: 1.4, 
          ease: "power4.out" 
        }
      )
      // 2. Badge Pop (Scale & Opacity)
      .fromTo(
        ".badge-pop",
        { scale: 0, opacity: 0, y: 20 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: "back.out(1.7)" // Bouncy effect
        },
        "-=0.8" // Overlap with image animation
      )
      // 3. Text Content Staggered Reveal
      .fromTo(
        ".text-animate",
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power2.out" 
        },
        "-=1.0" // Start while image is still revealing
      );

    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-[#FFFBF0] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Left Column: Image Area --- */}
          {/* We use a relative container to hold the badge outside the overflow mask */}
          <div className="relative">
            
            {/* Image Mask - This div animates width from 0 to 100 */}
            <div className="image-mask overflow-hidden rounded-2xl shadow-2xl relative z-0 w-full">
              <img
                src="/expertpage.jpg"
                alt="Technician working on HVAC equipment"
                className="w-full h-auto object-cover min-h-[400px] transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* 24/7 Badge - Placed absolutely relative to the column, outside the mask so it can 'pop' */}
            <div className="badge-pop absolute -bottom-6 right-1 md:bottom-6 md:-right-8 z-10">
              <div className="bg-[var(--color-yellow)] text-maintext px-8 py-6 rounded-tl-2xl rounded-br-2xl shadow-xl flex flex-col items-center justify-center text-center min-w-[150px] border-4 border-white">
                <span className="text-3xl font-bold font-fira leading-none mb-1">
                  24/7
                </span>
                <span className="text-xs font-bold uppercase tracking-wider font-carrois">
                  Emergency Support
                </span>
              </div>
            </div>
          </div>

          {/* --- Right Column: Content --- */}
          <div className="space-y-8 lg:pl-6">
            <div className="space-y-4">
              <h2 className="text-animate text-3xl md:text-5xl font-bold font-fira text-maintext leading-tight">
                Expert Service You Can <br />
                <span className="text-[var(--color-green)]">Always Trust</span>
              </h2>
              
              <p className="text-animate text-lg text-secondary font-carrois leading-relaxed text-justify">
                With over 10 years of specialized experience, our HVAC maintenance technicians bring deep expertise in chiller descaling and system optimization. They understand the critical nature of industrial cooling systems and deliver end-to-end descaling solutions for centrifugal, screw, and reciprocating chillers. Through expert chemical and mechanical cleaning processes, our technicians help improve cooling efficiency, extend equipment lifespan, and ensure reliable system performance.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {features.map((feature, index) => (
                <div key={index} className="text-animate flex items-center gap-3">
                  <CheckCircle2
                    size={24}
                    className="text-[var(--color-green)] flex-shrink-0"
                  />
                  <span className="text-base font-medium font-fira text-maintext">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-animate pt-4">
              <Link to="/about" className="btn btn-primary inline-flex items-center justify-center px-8 py-3 bg-[var(--color-primary)] text-white rounded-md font-medium hover:bg-opacity-90 transition-all">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertService;