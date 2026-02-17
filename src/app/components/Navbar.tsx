import { motion } from "framer-motion";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-[1600px] mx-auto right-0">
      <div className="font-['Oswald'] font-bold text-2xl tracking-tighter mix-blend-exclusion text-white">
        JOULENE
      </div>
      <div className="flex items-center gap-4">
        <button className="h-[30px] px-4 rounded-full border border-white/20 text-xs font-mono uppercase text-white hover:bg-white/10 transition-colors">
          Menu
        </button>
        <button className="h-[32px] px-6 rounded-full bg-[#c4f240] text-[#0f1517] text-xs font-bold font-['Oswald'] uppercase hover:bg-[#b0d939] transition-colors">
          Invest
        </button>
      </div>
    </nav>
  );
}
