import { motion } from "framer-motion";
import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col pt-32 pb-20 px-6 max-w-[1600px] mx-auto overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-20 z-0 pointer-events-none rotate-[-5deg] scale-110">
        <Marquee duration={40} />
      </div>

      <div className="z-10 mt-12 md:mt-24 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-[#c4f240] rounded-full"></span>
            <div className="text-[#c4f240] text-xs font-mono uppercase tracking-widest">
              Revolutionizing Energy Storage
            </div>
          </div>
          
          <h1 className="font-['Oswald'] text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight mb-8 uppercase">
            Current battery <br/>
            technology is <span className="text-transparent" style={{ WebkitTextStroke: "2px #c4f240" }}>unsustainable.</span>
          </h1>
          
          <div className="flex flex-col gap-8 max-w-md mt-12">
            <p className="text-white/60 text-lg leading-relaxed font-light">
              We're building the next generation of solid-state energy storage to power a cleaner, more efficient world.
            </p>
            
            <div className="flex gap-4 items-center">
              <button className="bg-[#c4f240] text-black px-8 py-3 rounded-full font-['Oswald'] font-bold uppercase tracking-wide hover:bg-[#b0d939] transition-colors">
                Discover Technology
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
