import React from "react";
import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ title, description, features, image }) => {
  return (
    <div className="group relative h-[400px] w-full overflow-hidden rounded-2xl cursor-pointer shadow-xl">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 md:group-hover:via-black/60 md:group-hover:to-black/30"></div>

      {/* Arrow Icon - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all duration-300 md:group-hover:bg-[var(--primary-color)] md:group-hover:rotate-45">
          <ArrowUpRight size={24} />
        </div>
      </div>

      {/* Content - Bottom */}
      <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-300 z-20">
        <h3 className="mb-3 text-2xl font-bold font-fira text-white leading-tight">
          {title}
        </h3>
        
        {/* Description - Always visible on mobile, hidden by default on desktop and slides up on hover */}
        <div className="max-h-[300px] opacity-100 md:max-h-0 md:overflow-hidden md:opacity-0 text-white/90 transition-all duration-500 md:group-hover:max-h-[300px] md:group-hover:opacity-100">
           <p className="mb-4 font-carrois text-sm leading-relaxed border-t border-white/20 pt-4">
            {description}
          </p>
          {features && (
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs font-carrois text-gray-300">
                  <span className="mr-2 text-[var(--color-green)]">•</span>
                  {feature}
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-xs italic text-gray-400 mt-1">
                  + {features.length - 3} more features
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
