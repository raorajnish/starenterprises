import React from "react";

const brands = [
  "/brands/1.svg",
  "/brands/2.svg",
  "/brands/3.svg",
  "/brands/4.svg",
  "/brands/5.svg",
  "/brands/6.svg",
];

const BrandMarquee = () => {
  return (
    <section className="py-16 bg-[#FFFBF0] overflow-hidden border-t border-b border-orange-100/50">
      <div className="container mx-auto px-4 mb-10 text-center">
        <span className="inline-block py-1.5 px-3 rounded bg-blue-50 text-blue-600 text-[15px] md:text-s font-bold tracking-widest uppercase font-carrois">
                Trusted by Industry Leaders
              </span>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        {/* Gradients for fade effect */}
        <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-[#FFFBF0] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-[#FFFBF0] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex items-center space-x-12 sm:space-x-24 w-max">
          {/* Quadruple the list to ensure smooth scrolling on huge screens without gaps if the list is short */}
          {[...brands, ...brands, ...brands, ...brands].map((logo, index) => (
            <div 
              key={index} 
              className="w-32 h-16 sm:w-40 sm:h-20 flex-shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={logo} 
                alt={`Brand Partner ${index}`} 
                className="max-w-full max-h-full object-contain" 
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* Move half the width of the quadrupled list? No, we need to move by the length of ONE set. */
          /* Actually, simpler logic:
             If we have 4 sets: [A B] [A B] [A B] [A B]
             We need to scroll by the width of [A B] (1/4th of total width) to make it loop seamlessly? 
             Wait, if I use a simple "duplicate list" approach: [List] [List].
             Translate -50% moves it exactly the width of one [List]. 
             So resetting to 0 looks identical.
             So I will stick to double list, but if list is short, double list might not fill screen.
             6 brands * (160px width + 96px gap) ~= 1500px.
             On a 1920px screen, 1500px is not enough.
             So I should probably duplicate it 4 times to be safe.
             And translate by -25% (one set width) or just rely on a really long strip.
             Let's use a standard trick: two identical containers animating.
             Or just one really long container animating -50% if consistent.
             
             Let's try the keyframe approach with 4 sets and -25% translation?
             If width is 400%, translate -25% needs to match exactly 1 set.
             
             The simplest robust way without measuring width is:
             Two identical div layers, absolute positioned? No, that's messy.
             
             Let's just use the 'marquee' class with a track that is forced to be large enough.
             6 items is small.
             Let's duplicate 6 times.
          */
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BrandMarquee;
