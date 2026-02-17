import { SvgIcon } from "./JouleneIcons";

export function Technology() {
  return (
    <section className="py-32 px-6 max-w-[1600px] mx-auto">
      <h2 className="font-['Oswald'] text-5xl md:text-7xl font-bold text-[#b5df30] leading-[0.9] mb-20 md:w-3/4 tracking-tight uppercase">
        Leading the way to a <span className="text-black">sustainable</span> battery future
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <div className="inline-block border border-black/20 rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
            Core Technology
          </div>
          <h3 className="font-['Oswald'] text-4xl font-bold mb-8 leading-none uppercase">
            Experts in solid state battery technology
          </h3>
          
          <div className="space-y-12">
            <div className="group border-b border-black/10 pb-8">
              <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-mono text-sm">1</div>
                  <span className="font-bold text-2xl uppercase font-['Oswald']">Safe & Reliable</span>
              </div>
              <p className="pl-12 text-sm text-black/70 max-w-sm leading-relaxed">
                Non-flammable, non-volatile, high thermal stability and safety. Our electrolyte architecture prevents dendrite formation.
              </p>
            </div>

            <div className="group border-b border-black/10 pb-8">
              <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-mono text-sm">2</div>
                  <span className="font-bold text-2xl uppercase font-['Oswald']">Metallic anode</span>
              </div>
              <p className="pl-12 text-sm text-black/70 max-w-sm leading-relaxed">
                Carbon-free high energy density 380 Wh/kg, 800+ Wh/L. Enabling ranges previously thought impossible.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#E0E0DC] rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">
             {/* Abstract representation instead of 3D */}
             <div className="relative w-full aspect-square max-w-md border border-black/10 p-8 flex flex-col justify-between">
                <div className="w-full h-[30%] bg-[#0f1517] flex items-center justify-center text-white/50 font-mono text-xs uppercase tracking-widest">Cathode</div>
                <div className="w-full h-[30%] bg-[#c4f240] flex items-center justify-center text-black/50 font-mono text-xs uppercase tracking-widest">Solid Electrolyte</div>
                <div className="w-full h-[30%] bg-[#dcdcd9] border border-black/5 flex items-center justify-center text-black/50 font-mono text-xs uppercase tracking-widest">Metallic Anode</div>
             </div>
        </div>
      </div>
    </section>
  );
}
