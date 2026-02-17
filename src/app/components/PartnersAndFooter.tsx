import { motion } from "framer-motion";

export function PartnersAndFooter() {
  return (
    <footer className="pt-24 pb-12 px-6 max-w-[1600px] mx-auto flex flex-col items-center text-center">
      {/* Partners */}
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-20 grayscale mb-24 w-full items-center">
        <span className="text-4xl font-['Inter'] font-light tracking-tighter">DANCER</span>
        <span className="text-4xl font-['Inter'] font-bold tracking-tighter italic">ECOFLOW</span>
        <span className="text-4xl font-['Inter'] font-light tracking-widest">AMAZON</span>
        <span className="text-4xl font-['Inter'] font-bold lowercase tracking-tight">amigo</span>
      </div>

      <div className="max-w-md mx-auto mb-12">
        <p className="text-xs font-bold mb-8 uppercase tracking-widest">
          Partner with us
        </p>
        <div className="flex justify-center gap-4">
          <button className="h-[32px] px-6 rounded-full bg-[#0f1517] text-white text-xs font-bold font-['Oswald'] uppercase hover:bg-black/80 transition-colors flex items-center gap-2">
            Contact Us
          </button>
        </div>
      </div>

      <div className="w-full overflow-hidden mt-12 mb-8">
        <motion.h1 
          className="text-[120px] md:text-[240px] leading-none font-['Oswald'] font-bold text-[#c4f240] text-center tracking-tighter"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          JOULENE
        </motion.h1>
      </div>

      <div className="w-full flex justify-between text-[10px] text-black/30 font-mono uppercase border-t border-black/10 pt-4">
        <div>© 2026 Joulene Inc.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Legal</a>
        </div>
      </div>
    </footer>
  );
}
