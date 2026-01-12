import React from "react";
import ServicePageCard from "../components/services/ServicePageCard";
import ServiceCTA from "../components/services/ServiceCTA";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      title: "Condenser & Evaporator Descaling",
      description: "Professional descaling services to remove mineral deposits, scale, and fouling from condenser and evaporator tubes. Improves heat transfer efficiency.",
      image: "/services/service1.png", // Replace with real image
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
      image: "/services/service2.png",
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
      image: "/services/service3.png",
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
      image: "/services/service4.png",
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
      image: "/services/service5.png",
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
      image: "/services/service6.png",
      features: [
        "Chemical circulation using motor pump",
        "Controlled descaling procedure",
        "Mechanical cleaning where required",
        "Final flushing and system inspection"
      ]
    }
  ];

  return (
    <div className="bg-[#FFFBF0] min-h-fit">
      
      {/* 1. Page Header */}
      <div className="bg-white py-16 text-center px-4">
        <span className="inline-block py-1.5 px-3 rounded bg-blue-50 text-blue-600 text-[10px] md:text-xs font-bold tracking-widest uppercase font-carrois">
                Our Services
              </span>
        <h1 className="text-4xl md:text-5xl font-bold font-fira text-slate-900 mb-6">
          Our Services
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-carrois">
          We provide comprehensive industrial HVAC and cooling solutions tailored to your needs. 
          From routine maintenance to complex chemical descaling, we ensure quality first.
        </p>
      </div>

      {/* 2. Services Grid */}
      <section className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServicePageCard 
              key={index}
              {...service}
            />
          ))}
        </div>
      </section>

      {/* 3. Call To Action Section */}
      <ServiceCTA />
      <Footer />
    </div>
  );
};

export default Services;