"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Location = {
  id: string;
  name: string;
  address: string;
  mapQuery: string;
};

const locations: Location[] = [
  {
    id: "jkuat",
    name: "JKUAT",
    address: "Kobbis oven jkuat, Juja",
    mapQuery: "Kobbis+oven+jkuat,+Juja",
  },
  {
    id: "thika",
    name: "THIKA",
    address: "Kobbis Oven Thika, General Kago Rd, Thika",
    mapQuery: "Kobbis+Oven+Thika,+General+Kago+Rd,+Thika",
  },
  {
    id: "ruiru",
    name: "RUIRU",
    address: "Kobbis oven spur mall, Kimbo, Thika road exit 13",
    mapQuery: "Kobbis+oven+spur+mall,+Kimbo,+Thika+road+exit+13",
  },
];

export function Locations() {
  const [activeLocation, setActiveLocation] = useState<Location>(locations[0]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-vanilla py-24 sm:py-32 overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy & Location List */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-black mb-6 leading-[1.1]">
              Where can we meet you?
            </h2>
            <p className="text-black/70 font-body text-lg sm:text-xl mb-12 leading-relaxed max-w-lg">
              There&apos;s probably a little sweetness closer than you think.
              Find your nearest <span className="font-logo normal-case tracking-normal">KoBBi&apos;s</span> Oven and come get your slice.
            </p>

            {/* Location Tabs */}
            <div className="flex flex-col gap-4">
              {locations.map((loc) => {
                const isActive = activeLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className={`relative text-left p-6 rounded-2xl transition-all duration-300 border-2 overflow-hidden group ${
                      isActive
                        ? "border-caramel bg-cream shadow-md"
                        : "border-transparent bg-black/5 hover:bg-black/10"
                    }`}
                  >
                    <div className="relative z-10">
                      <h3 className={`font-display text-2xl mb-2 transition-colors ${isActive ? "text-caramel" : "text-black"}`}>
                        {loc.name}
                      </h3>
                      <p className={`font-body text-sm sm:text-base transition-colors ${isActive ? "text-black" : "text-black/70"}`}>
                        {loc.address}
                      </p>
                    </div>

                    {/* Active State Indicator Animation */}
                    {isActive && (
                      <motion.div
                        layoutId="activeLocationIndicator"
                        className="absolute inset-0 bg-cream"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Google Map */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl shadow-cocoa/10 border-4 border-cream bg-cream"
          >
            {/* Map Placeholder skeleton while iframe loads */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 animate-pulse">
              <svg className="w-10 h-10 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            {/* Google Maps Iframe */}
            <iframe
              title={`Google Map for ${activeLocation.name}`}
              className="absolute inset-0 w-full h-full border-0 rounded-[1.8rem] transition-opacity duration-500"
              src={`https://www.google.com/maps?q=${activeLocation.mapQuery}&output=embed`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
