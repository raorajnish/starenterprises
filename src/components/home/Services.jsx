import React, { useLayoutEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  const services = [
    {
      title: "Condenser & Evaporator Descaling",
      description: "Professional descaling services to remove mineral deposits, scale, and fouling from condenser and evaporator tubes. Improves heat transfer efficiency.",
      image: "https://picsum.photos/seed/img1/800/600",
      features: [
        "Chemical descaling using approved chemicals",
        "Complete scale and deposit removal",
        "Improved heat transfer efficiency",
        "Restoration of cooling performance",
        "Extended equipment life"
      ]
    },
    {
      title: "AHU Services (Internal & External)",
      description: "Comprehensive Air Handling Unit (AHU) servicing covering both internal and external components to ensure clean air circulation and efficient cooling.",
      image: "https://picsum.photos/seed/img2/800/600",
      features: [
        "Internal & external AHU cleaning",
        "Filter cleaning / replacement",
        "Cooling coil cleaning with chemical treatment",
        "Motor and blower servicing",
        "Control system checking"
      ]
    },
    {
      title: "Cooling Tower Services",
      description: "Specialized cooling tower cleaning services to remove scale, algae, and dirt accumulation, ensuring smooth water flow and efficient heat rejection.",
      image: "https://picsum.photos/seed/img3/800/600",
      features: [
        "Cooling tower cleaning",
        "High-pressure jet cleaning services",
        "Chemical cleaning and descaling",
        "Strainer cleaning",
        "Removal of sludge and deposits"
      ]
    },
    {
      title: "VAM Chiller Services",
      description: "Professional servicing and descaling of VAM chillers to ensure efficient heat exchange, stable system operation, and reliable performance.",
      image: "https://picsum.photos/seed/img4/800/600",
      features: [
        "VAM chiller inspection and servicing",
        "Chemical cleaning and circulation descaling",
        "Scale and deposit removal",
        "Restoration of cooling efficiency",
        "Performance optimization"
      ]
    },
    {
      title: "PHE Services",
      description: "Expert Plate Heat Exchanger (PHE) descaling and cleaning services to restore heat transfer efficiency and prevent blockages caused by scale.",
      image: "https://picsum.photos/seed/img5/800/600",
      features: [
        "PHE chemical descaling",
        "Plate cleaning and flushing",
        "Removal of scale and fouling",
        "Improved heat exchange efficiency",
        "Reduced pressure drop"
      ]
    },
    {
      title: "Chemical Cleaning Process",
      description: "Our cleaning and descaling process follows industry-standard methods to ensure safe and effective results using approved chemicals.",
      image: "https://picsum.photos/seed/img6/800/600",
      features: [
        "Chemical circulation using motor pump",
        "Controlled descaling procedure",
        "Mechanical cleaning where required",
        "Final flushing and system inspection"
      ]
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Animation (Fade Up)
      gsap.from(".header-animate", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // Starts when top of section hits 80% of viewport
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // 2. Cards Stagger Animation
      gsap.from(".card-animate", {
        scrollTrigger: {
          trigger: ".grid-trigger", // Triggers when the GRID starts entering view
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Delay of 0.2s between each card
        ease: "power2.out"
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#FFFBF0]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block py-1.5 px-3 rounded bg-blue-50 text-blue-600 text-[10px] md:text-xs font-bold tracking-widest uppercase font-carrois">
                Our Expertise
              </span>
          <h2 className="header-animate text-4xl md:text-5xl font-bold font-fira text-maintext mb-6">
            Services We Offer
          </h2>
          <p className="header-animate text-lg text-secondary font-carrois">
            We provide comprehensive industrial HVAC and cooling solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            // We wrap the card in a div with the 'card-animate' class for GSAP to target
            <div key={index} className="card-animate h-full">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;