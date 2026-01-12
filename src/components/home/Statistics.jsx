import React from "react";

const Statistics = () => {
  const stats = [
    { value: "10+", label: "Years Experience", description: "Since 2013" },
    { value: "500+", label: "Projects Done", description: "Commercial & Industrial" },
    { value: "1200+", label: "Happy Clients", description: "Across the Region" },
  ];

  return (
    <section className="bg-white  border-y border-gray-200">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-12 hover:bg-gray-200 transition-colors duration-300 group cursor-default text-center"
            >
              <div className="text-5xl md:text-6xl font-bold font-fira mb-2 text-primary tracking-tighter group-hover:scale-105 transition-transform origin-left duration-300">
                {stat.value}{" "}
                <span className="font-carrois text-xs font-normal text-[var(--color-subtext)] uppercase tracking-widest block mt-3 pl-1">
                  {stat.label}
                </span>
              </div>
              <div className="mt-8 font-fira text-xl font-bold opacity-30 group-hover:opacity-100 transition-opacity tracking-widest uppercase text-maintext">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
