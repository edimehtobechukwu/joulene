import { motion } from "framer-motion";

interface MarqueeProps {
  text?: string;
  className?: string;
  duration?: number;
  reverse?: boolean;
}

export function Marquee({ text = "JOULENE", className = "", duration = 20, reverse = false }: MarqueeProps) {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap select-none pointer-events-none ${className}`}>
      <motion.div
        className="flex shrink-0 gap-8 items-center"
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="font-['Oswald'] font-bold text-[120px] md:text-[240px] leading-[0.8] tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}>
            {text}
          </span>
        ))}
      </motion.div>
      <motion.div
        className="flex shrink-0 gap-8 items-center"
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="font-['Oswald'] font-bold text-[120px] md:text-[240px] leading-[0.8] tracking-tighter text-transparent" style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
