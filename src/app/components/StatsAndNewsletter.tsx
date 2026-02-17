import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Range Density", value: "+60%", desc: "More range than current top tier EV battery." },
  { label: "Reliability", value: "10x", desc: "Lower failure rate across full lifecycle." },
  { label: "Weight", value: "-60%", desc: "Significant weight reduction for vehicle body." },
  { label: "Scalability", value: "100%", desc: "Reduction in manufacturing steps required." },
];

export function StatsAndNewsletter() {
  return (
    <section className="py-32 px-6 max-w-[1600px] mx-auto relative">
      {/* Newsletter */}
      <div className="border border-white/20 p-12 md:p-20 mb-32 max-w-4xl mx-auto bg-[#1a2123] relative">
        <div className="relative z-10 text-center">
          <div className="inline-block bg-[#c4f240] text-black text-xs font-bold px-3 py-1 rounded mb-8 uppercase tracking-wider">
            Stay Tuned
          </div>
          <h3 className="font-['Oswald'] text-3xl md:text-5xl font-bold mb-8 leading-tight uppercase">
            Follow our progress in the <br/><span className="text-[#c4f240]">energy revolution.</span>
          </h3>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL ADDRESS" 
              className="flex-1 bg-white/5 border border-white/20 h-14 px-6 text-sm font-mono focus:border-[#c4f240] focus:bg-white/10 outline-none transition-all placeholder:text-white/30 rounded-none"
            />
            <button className="bg-white text-black h-14 px-10 text-xs font-bold font-['Oswald'] uppercase hover:bg-[#c4f240] transition-colors flex items-center justify-center gap-2">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Stats */}
      <div className="border-t border-white/10 pt-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20 items-end">
          <h2 className="font-['Oswald'] text-5xl md:text-6xl font-bold leading-[0.9] md:w-1/2 uppercase">
            Helping solve the <span className="text-[#c4f240]">climate emergency</span>
          </h2>
          <div className="md:w-1/2 flex justify-end">
             <p className="text-xs font-mono text-white/50 max-w-xs text-right uppercase tracking-wider">
              Impact through savings, efficiency, and sustainable manufacturing processes.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0f1517] p-10 hover:bg-[#151b1d] transition-colors">
              <div className="text-[10px] text-[#c4f240] font-bold mb-6 uppercase tracking-wider border border-[#c4f240]/20 inline-block px-2 py-1">{stat.label}</div>
              <div className="font-['Oswald'] text-7xl font-bold mb-6">{stat.value}</div>
              <p className="text-xs text-white/40 leading-relaxed font-mono">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
