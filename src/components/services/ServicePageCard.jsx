import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicePageCard = ({ title, description, image, features }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-[5px]
    hover:border hover:border-[var(--primary-color)] hover:border-dashed
    ">
      
      {/* Background Decorative Effect (Blurred Orb) */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Area - Reduced height for compactness */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent z-10 transition-colors duration-300" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow relative z-10">
        {/* Title */}
        <h3 className="text-lg font-bold text-slate-800 mb-4 group-hover:text-[var(--primary-color)] transition-colors line-clamp-1">
          {title}
        </h3>

        {/* Description - limited to 3 lines to keep cards uniform */}
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Features Divider */}
        <div className="w-full h-px bg-slate-100 mb-4" />

        {/* Features List - Compact */}
        <div className="mb- flex-grow">
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                {/* Icon is now fixed width to prevent misalignment */}
                <div className="mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-green)]" />
                </div>
                <span className="text-xs text-slate-600 font-medium leading-tight">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          {/* Subtle "More" indicator if list is long */}
          {features.length > 3 && (
            <p className="text-[10px] text-slate-400 font-medium pl-7 mt-2 uppercase tracking-wide">
              + {features.length - 3} more features
            </p>
          )}
        </div>

        {/* Button - Modern "Soft" Style */}
        <Link
          to="/contact"
          className="mt-auto w-full py-2.5 rounded-lg bg-[var(--primary-color)] text-white text-sm font-semibold 
                     hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 
                     flex items-center justify-center gap-2 group-hover:shadow-md"
        >
          View Service 
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServicePageCard;