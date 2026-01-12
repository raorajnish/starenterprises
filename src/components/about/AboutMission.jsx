import React, { useState, useLayoutEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMission = () => {
  const containerRef = useRef(null);
  // Default to 'vision' being open to match your design preference
  const [activeTab, setActiveTab] = useState("mission");


  const tabs = [
    {
      id: "mission",
      label: "Our Mission",
      content:
        "To provide premium industrial and commercial HVAC solutions that prioritize energy efficiency, reliability, and sustainability. We aim to empower businesses with cooling systems that reduce downtime and operational costs.",
    },
    {
      id: "vision",
      label: "Our Vision",
      content:
        "To become the most trusted HVAC partner in the region, known for our technical expertise, 24/7 support availability, and unwavering commitment to quality craftsmanship in every project we undertake.",
    },
    {
      id: "value",
      label: "Our Value",
      content:
        "Integrity, Transparency, and Excellence. We believe in honest pricing, using genuine spare parts, and delivering expert service that builds long-term relationships with our clients.",
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Text Reveal
      gsap.fromTo(
        ".mission-text",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
        }
      );

      // 2. Image Reveal
      gsap.fromTo(
        ".mission-img",
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".mission-img-container",
            start: "top 80%",
          },
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );

      // 3. Accordion Stagger (Fixed Visibility)
      gsap.fromTo(
        ".accordion-item",
        { x: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".accordion-container",
            start: "top 85%",
          },
          x: 0,
          opacity: 1, // Ensures they become fully visible
          duration: 0.6,
          stagger: 0.15,
          clearProps: "all" // Clears inline styles after animation to prevent conflicts
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* 3-Column Layout for PC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-top">
          
          {/* LEFT: Text Content */}
          <div className="lg:col-span-4 space-y-6">
            <span className="mission-text inline-block px-[15px] py-[5px] bg-orange-100 text-orange-600 rounded text-sm font-bold tracking-wider uppercase">
              About Us
            </span>
            <h2 className="mission-text text-3xl md:text-4xl font-bold font-fira text-slate-900 leading-tight">
              Transforming Spaces with Quality <br />
              <span className="text-blue-600">HVAC Solutions</span>
            </h2>
            <p className="mission-text text-slate-500 font-carrois leading-relaxed text-justify">
              From emergency repairs to full chiller plant installations, we treat
              each project as our own. Star Enterprises provides personalized
              solutions tailored to meet the unique cooling needs of your
              industry.
            </p>
            <button className="mission-text btn bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition font-bold text-sm">
              LEARN MORE
            </button>
          </div>

          {/* MIDDLE: Image */}
          <div className="mission-img-container lg:col-span-4 h-full">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
              alt="Technician working"
              className="mission-img w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* RIGHT: Accordion */}
          {/* Flex column with gap-5 ensures cards are separated and distinct */}
          <div className="accordion-container lg:col-span-4 flex flex-col gap-5">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`accordion-item rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                  activeTab === tab.id
                    ? "bg-blue-300 border-blue-600 shadow-xl scale-105" // Active: Blue, Solid Border, Pop Effect
                    : "bg-white border-dashed border-gray-300 hover:border-blue-300" // Inactive: White, Dashed Border
                }`}
              >
                <button
                  onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                  className="w-full flex items-center justify-between p-1 text-left focus:outline-none"
                >
                  <span
                    className={`font-bold font-fira text-lg ${
                      activeTab === tab.id ? "text-black" : "text-slate-900"
                    }`}
                  >
                    {tab.label}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-colors ${
                      activeTab === tab.id 
                        ? "bg-white/20 text-black" 
                        : "bg-gray-100 text-gray-500 group-hover:bg-blue-50"
                    }`}
                  >
                    {activeTab === tab.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                {/* Content Area */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeTab === tab.id ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className={`p-5 pt-0 font-carrois leading-relaxed text-base ${
                    activeTab === tab.id ? "text-black/90" : "text-slate-600"
                  }`}>
                    {tab.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;