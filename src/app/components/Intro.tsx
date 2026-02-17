import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { imgEvChassis } from "../assets";

export function Intro() {
  return (
    <section className="py-20 px-6 max-w-[1600px] mx-auto border-b border-black/5">
      <div className="flex flex-col md:flex-row gap-12 md:items-start">
        <div className="md:w-1/3 pt-10">
          <div className="w-8 h-[2px] bg-black mb-8"></div>
          <h2 className="font-['Oswald'] text-2xl md:text-3xl font-bold leading-tight mb-8">
            Existing lithium-ion batteries are hitting their technology limits, and the production process harms the environment.
          </h2>
          <p className="font-mono text-xs text-black/60 uppercase tracking-widest">
            — GLOBAL IMPACT
          </p>
        </div>
        
        <div className="md:w-2/3">
          <div className="relative aspect-[16/9] bg-gray-200 overflow-hidden">
             <ImageWithFallback
                src={imgEvChassis}
                alt="EV Chassis and battery components"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
