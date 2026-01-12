import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCTA = () => {
  return (
    <section className="bg-[var(--primary-color)] py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[300px] flex justify-center">
          <img
            src="/services/service3.png"
            alt="Technician"
            className="w-full max-w-sm rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-fira mb-4">
            Having a problem?
            <br />
            <span className="text-[var(--color-yellow)]">
              We’ll fix it today!
            </span>
          </h2>

          <p className="text-blue-100 font-carrois text-lg max-w-xl mb-8">
            Don’t let HVAC issues disrupt your operations. Our expert team is ready
            to provide fast, reliable solutions with transparent pricing.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-xl font-bold font-fira">
                +91 98205 56276
              </span>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-white text-[var(--primary-color)] px-8 py-3 rounded-md font-bold hover:bg-[var(--color-yellow)] hover:text-slate-900 transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceCTA;
