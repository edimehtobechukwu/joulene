import { motion } from "framer-motion";
import { SvgIcon } from "./JouleneIcons";

export function Difference() {
  return (
    <section className="py-32 px-6 max-w-[1600px] mx-auto">
      <h2 className="font-['Oswald'] text-5xl md:text-7xl font-bold text-white mb-20 leading-tight uppercase">
        experience the <br/> <span className="text-[#c4f240]">JOULENE</span> difference
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#1a2123] p-10 min-h-[400px] flex flex-col justify-between border border-white/5">
          <div className="w-16 h-16 text-[#c4f240] mb-8 bg-[#c4f240]/10 rounded-full p-4 flex items-center justify-center">
              <SvgIcon name="p332c680" className="w-full h-full" viewBox="0 0 120 120" />
          </div>
          
          <div>
            <h3 className="font-['Oswald'] text-3xl font-bold text-white mb-6 uppercase">
              Bipolar architecture
            </h3>
            <div className="w-12 h-1 bg-[#c4f240] mb-6"></div>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Simple optimized form component allows high thermal stability and enhanced safety features. Our patented design reduces internal resistance by 40%.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#c4f240] p-10 min-h-[400px] flex flex-col justify-between text-[#0f1517]">
          <div className="relative z-10">
              <h3 className="font-['Oswald'] text-3xl font-bold mb-6 uppercase">
                Intelligent modular
              </h3>
              <div className="w-12 h-1 bg-black mb-6"></div>
              <p className="text-[#0f1517]/80 text-sm leading-relaxed font-medium">
                One unique module design allows for infinite configurations to fit any need. From micro-mobility to grid storage.
              </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1a2123] p-10 min-h-[400px] flex flex-col justify-between border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
               <div className="w-16 h-16 text-[#c4f240] mb-8 bg-[#c4f240]/10 rounded-full p-4 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-[#c4f240] rounded-full"></div>
               </div>
               
              <h3 className="font-['Oswald'] text-3xl font-bold text-white mb-6 uppercase">
                Flexible design
              </h3>
              <div className="w-12 h-1 bg-[#c4f240] mb-6"></div>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Optimized for specific capacity requirements without retooling.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
