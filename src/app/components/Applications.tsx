import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { imgSpace, imgDrone, imgMarine } from "../assets";
import { ArrowUpRight } from "lucide-react";

const apps = [
  {
    category: "SPACE",
    image: imgSpace,
    value: "$ 6.81B",
    growth: "+12.5%",
    desc: "High performance packs for extreme environments."
  },
  {
    category: "AVIATION",
    image: imgDrone,
    value: "$ 1.61B",
    growth: "+24.2%",
    desc: "High performance robotics, autonomous and power dense drones."
  },
  {
    category: "MARINE",
    image: imgMarine,
    value: "$ 2.91B",
    growth: "+8.3%",
    desc: "High performance systems for remote and extreme deep failure tested systems."
  }
];

export function Applications() {
  return (
    <section className="py-32 px-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
        <h2 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-white max-w-xl leading-none uppercase">
          Ideal for <span className="text-transparent" style={{ WebkitTextStroke: "1px #fff" }}>mission critical</span> applications.
        </h2>
        <div className="text-white/40 text-[10px] font-mono mt-8 md:mt-0 flex flex-col items-end">
          <div className="mb-2">MARKET ANALYSIS</div>
          <div>TOTAL ADDRESSABLE MARKET 2025</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {apps.map((app, index) => (
          <div 
            key={index}
            className="bg-[#EAEAE6] overflow-hidden text-black group relative"
          >
            <div className="h-64 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
               <ImageWithFallback 
                 src={app.image}
                 alt={app.category}
                 className="w-full h-full object-cover"
               />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-end mb-2">
                <div className="font-['Oswald'] text-4xl font-bold">{app.value}</div>
              </div>
              <div className="text-[10px] text-black/40 font-mono mb-6 uppercase tracking-wider">{app.category}</div>
              
              <p className="text-sm text-black/70 leading-relaxed border-t border-black/10 pt-6 font-medium">
                {app.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
