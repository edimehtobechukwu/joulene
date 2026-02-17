import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svgPaths from "./svg-1oppexb52i";
import MobileJoulene from "./Joulene-5-400";
import imgImageEvChassis from "../assets/ab54db09bc6df0e4d5160b30a09bef15b8290978.png";
import imgHttpsLottiefilesComAnimationsCubeAnimatorOs7C3VVsqo from "../assets/0ea0327d93ceb10a15541a091aaef796a22302cf.png";
import imgImage from "../assets/37fc0d2254dba6933d75460b5735ecd33603d555.png";
import imgImage1 from "../assets/17e8a87c993403cd7360a98f2d2b1386ef66540c.png";
import imgImage2 from "../assets/a3dbbbd73da540d4cd3fd70066c81097b9c00af1.png";
import imgImage3 from "../assets/ed305a4c7e26604bf6b3194ea3dd4232ad4bb8d1.png";
import { RotatingCubes } from "../app/components/RotatingCubes";

function Container() {
  return (
    <div className="h-[32px] mix-blend-exclusion relative shrink-0 w-[73.719px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-white top-0 tracking-[-1.2px]">JOULENE</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="h-[30px] relative rounded-[33554400px] shrink-0 w-[60.391px] cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[17px] py-[7px] relative size-full">
        <p className="font-['Consolas:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white uppercase">Menu</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
      className="bg-[#c4f240] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[33554400px] cursor-pointer hover:bg-[#addb29] transition-colors"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[41px] text-[#0f1517] text-[12px] text-center top-[8px] uppercase">Invest</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[157.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function JouleneHome() {
  return (
    <div className="absolute z-50 content-stretch flex h-[64px] items-center justify-between left-0 px-[24px] top-0 w-[1534px]" data-name="JouleneHome">
      <Container />
      <Container1 />
    </div>
  );
}

function Marquee1() {
  return (
    <div className="h-[320px] relative shrink-0 w-[1094.734px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[320px] left-0 text-[320px] text-[rgba(0,0,0,0)] top-0 uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee2() {
  return (
    <div className="h-[320px] relative shrink-0 w-[1094.734px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[320px] left-0 text-[320px] text-[rgba(0,0,0,0)] top-0 uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee3() {
  return (
    <div className="h-[320px] relative shrink-0 w-[1094.734px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[320px] left-0 text-[320px] text-[rgba(0,0,0,0)] top-0 uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee4() {
  return (
    <div className="h-[320px] relative shrink-0 w-[1094.734px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[320px] left-0 text-[320px] text-[rgba(0,0,0,0)] top-0 uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee5() {
  return (
    <div className="h-[320px] relative shrink-0 w-[1094.734px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[320px] left-0 text-[320px] text-[rgba(0,0,0,0)] top-0 uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee6() {
  return (
    <div className="h-[320px] relative shrink-0 w-[1094.734px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[320px] left-0 text-[320px] text-[rgba(0,0,0,0)] top-0 uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee7() {
  return (
    <div className="h-[320px] relative shrink-0 w-[1094.734px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[320px] left-0 text-[320px] text-[rgba(0,0,0,0)] top-0 uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee8() {
  return (
    <div className="h-[320px] relative shrink-0 w-[1094.734px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[320px] left-0 text-[320px] text-[rgba(0,0,0,0)] top-0 uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee9() {
  return (
    <div className="h-[320px] relative shrink-0 w-[1094.734px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[320px] left-0 text-[320px] text-[rgba(0,0,0,0)] top-0 uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Marquee10() {
  return (
    <div className="flex-[1_0_0] h-[320px] min-h-px min-w-px relative" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[320px] left-0 text-[320px] text-[rgba(0,0,0,0)] top-0 uppercase">JOULENE</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[320px] relative shrink-0 w-[11235.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
        <Marquee1 />
        <Marquee2 />
        <Marquee3 />
        <Marquee4 />
        <Marquee5 />
        <Marquee6 />
        <Marquee7 />
        <Marquee8 />
        <Marquee9 />
        <Marquee10 />
      </div>
    </div>
  );
}

function Marquee() {
  return (
    <div className="absolute content-stretch flex h-[320px] items-start left-0 opacity-20 overflow-clip top-[128px] w-[1534px]" data-name="Marquee">
      <Container2 />
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[#0f1517] h-[4px] left-0 top-0 w-[48px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[148.5px] left-0 top-[36px] w-[703px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[49.5px] left-0 text-[#0f1517] text-[36px] top-0 w-[635px] whitespace-pre-wrap">Existing lithium-ion batteries are hitting their technology limits, and the production process harms the environment.</p>
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#99a1af] h-px left-0 top-[7.5px] w-[16px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute h-[16px] left-0 top-[216.5px] w-[703px]" data-name="Container">
      <Container7 />
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] top-0 tracking-[1.2px] uppercase">Problem Statement</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[232.5px] left-[24px] top-[275.38px] w-[703px]" data-name="Container">
      <Container5 />
      <Paragraph />
      <Container6 />
    </div>
  );
}

function ImageEvChassis() {
  return (
    <div className="absolute h-[527.25px] left-[807px] rounded-[3.6px] top-[128px] w-[703px]" data-name="Image (EV Chassis)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[3.6px] size-full" src={imgImageEvChassis} />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#ebebe6] h-[783.25px] left-0 top-[736px] w-[1534px]" data-name="Container">
      <Container4 />
      <ImageEvChassis />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#c4f240] left-0 rounded-[33554400px] size-[8px] top-[3.5px]" data-name="Container" />;
}

function SectionLabel() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="SectionLabel">
      <Container10 />
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-[16px] not-italic text-[#c4f240] text-[10px] top-[-1px] tracking-[1px] uppercase">Building the future of battery technology</p>
    </div>
  );
}

const QUOTES = [
  { l1: "Current battery", l2: "technology is", l3: "unsustainable." },
  { l1: "Global energy", l2: "demand is", l3: "accelerating." },
  { l1: "Traditional storage", l2: "solutions are", l3: "outdated." }
];

function Heading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[237.563px] relative shrink-0 w-full overflow-hidden" data-name="Heading 1">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[79.2px] left-0 text-[#f0f0f0] text-[72px] top-0 tracking-[-1.8px]">
            {QUOTES[index].l1}
          </p>
          <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[79.2px] left-0 text-[#f0f0f0] text-[72px] top-[79.19px] tracking-[-1.8px]">
            {QUOTES[index].l2}
          </p>
          <div className="absolute content-stretch flex h-[107px] items-start left-0 top-[144.38px] w-[373.25px]">
            <p className="font-['Oswald:Medium',sans-serif] font-medium leading-[79.2px] relative shrink-0 text-[#6a7282] text-[72px] tracking-[-1.8px]">
              {QUOTES[index].l3}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Container12() {
  return <div className="bg-[#c4f240] shrink-0 size-[4px]" data-name="Container" />;
}

function Container13() {
  return <div className="bg-[#364153] shrink-0 size-[4px]" data-name="Container" />;
}

function Container14() {
  return <div className="bg-[#364153] shrink-0 size-[4px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[352.563px] items-start left-[24px] top-[23.72px] w-[719px]" data-name="Container">
      <SectionLabel />
      <Heading />
      <Container11 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[428px] left-[791px] top-[-28px] w-[719px]" data-name="Container">
      <RotatingCubes />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[400px] left-0 top-[208px] w-[1534px]" data-name="Container">
      <Container9 />
      <Container15 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[1519.25px] overflow-clip relative shrink-0 w-full" data-name="Header">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Marquee />
      </motion.div>
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <Container3 />
      </motion.div>
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
        <Container8 />
      </motion.div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[120px] left-[24px] top-0 w-[768px]" data-name="Heading 2">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[60px] left-0 text-[#addb29] text-[60px] top-0 w-[748px] whitespace-pre-wrap">Leading the way to a sustainable battery future</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#0f1517] text-[30px] top-[-1px]">Experts in solid state battery technology</p>
    </div>
  );
}

function Superscript() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[136.89px] p-px rounded-[33554400px] size-[16px] top-0" data-name="Superscript">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0f1517] text-[12px]">1</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative h-[28px] w-[654px]" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0f1517] text-[18px] top-px">Solid electrolytes</p>
      <Superscript />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative w-[320px] mt-[8px]" data-name="Paragraph">
      <p className="font-['Oswald:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Non-flammable, non-volatile, high thermal stability and safety.</p>
    </div>
  );
}

function Link() {
  return (
    <div
      onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
      className="relative w-[100.453px] cursor-pointer hover:opacity-70 transition-opacity mt-[8px]"
      data-name="Link"
    >
      <p className="decoration-solid font-['Oswald:Bold',sans-serif] font-bold leading-[16px] text-[#0f1517] text-[12px] underline">Read the whitepaper</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex flex-col relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph1 />
      <Link />
    </div>
  );
}

function Superscript1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[115.02px] p-px rounded-[33554400px] size-[16px] top-0" data-name="Superscript">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#0f1517] text-[12px]">2</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative h-[28px] w-[654px]" data-name="Heading 4">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#0f1517] text-[18px] top-px">Metallic anode</p>
      <Superscript1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative w-[320px] mt-[8px]" data-name="Paragraph">
      <p className="font-['Oswald:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px]">Enables ultra-high energy density for long-range applications.</p>
    </div>
  );
}

function Link1() {
  return (
    <div
      onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
      className="relative w-[72.672px] cursor-pointer hover:opacity-70 transition-opacity mt-[8px]"
      data-name="Link"
    >
      <p className="decoration-solid font-['Oswald:Bold',sans-serif] font-bold leading-[16px] text-[#0f1517] text-[12px] underline">See tech specs</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex flex-col relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Paragraph2 />
      <Link1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[196px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[280px] items-start left-0 top-[60px] w-[654px]" data-name="Container">
      <Heading2 />
      <Container19 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#1e2939] content-stretch flex h-[181.019px] items-center left-0 p-px rounded-[4px] top-0 w-[362.039px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex h-[47px] items-center justify-center relative shrink-0 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <p className="font-['Consolas:Regular',sans-serif] leading-[16px] not-italic relative text-[12px] text-white">Cathode</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[#c4f240] content-stretch flex h-[181.019px] items-center left-[45.25px] opacity-90 p-px rounded-[4px] top-0 w-[362.039px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ad0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex h-[113px] items-center justify-center relative shrink-0 w-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <p className="font-['Consolas:Bold',sans-serif] leading-[16px] not-italic relative text-[12px] text-black">Solid Electrolyte</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#d1d5dc] content-stretch flex h-[181.019px] items-center justify-center left-[90.51px] p-px rounded-[4px] top-0 w-[362.039px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
      <p className="font-['Consolas:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black">Metallic Anode</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[181.019px] left-[145.98px] top-[109.49px] w-[362.039px]" data-name="Container">
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[400px] left-[702px] top-0 w-[654px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[400px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container22 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#e2e2dd] h-[530px] left-[24px] rounded-[16.4px] top-[200px] w-[1486px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[65px] px-[65px] relative rounded-[inherit] size-full">
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#ebebe6] h-[858px] relative shrink-0 w-full" data-name="Section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-full relative"
      >
        <Heading1 />
        <Container16 />
      </motion.div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex font-['Oswald:Medium',sans-serif] font-medium gap-[8px] items-center leading-[96px] left-[calc(50%-0.2px)] text-[96px] top-[-24px] tracking-[-2.4px]">
      <p className="relative shrink-0 text-[#f0f0f0]">experience the</p>
      <p className="relative shrink-0 text-[#c4f240]">JOULENE</p>
      <p className="relative shrink-0 text-[#f0f0f0]">difference</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[96px] relative shrink-0 w-[1200.406px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pr-[285.594px] relative size-full">
          <Heading5 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[8.35%] right-[8.26%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3508 16.001">
            <path d={svgPaths.pa65ca00} id="Vector" stroke="var(--stroke-0, #C4F240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-20.01%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3334 9.33078">
            <path d={svgPaths.pfceb200} id="Vector" stroke="var(--stroke-0, #C4F240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-20.01%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3334 9.33078">
            <path d={svgPaths.pfceb200} id="Vector" stroke="var(--stroke-0, #C4F240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[32px] relative shrink-0 w-[420.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[388.656px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[32px] left-0 text-[#f0f0f0] text-[24px] top-0">Bipolar architecture design</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#99a1af] text-[14px] top-0 w-[419px] whitespace-pre-wrap">Smaller battery packs, less components, ultra-high efficiency production, enhanced energy density.</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[88px] relative shrink-0 w-[420.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading6 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container33() {
  return <div className="bg-[#364153] h-px shrink-0 w-[420.656px]" data-name="Container" />;
}

function Container30() {
  return (
    <div className="absolute bg-[#1a2426] content-stretch flex flex-col h-[500px] items-start justify-between left-0 pl-[32px] pt-[32px] rounded-[16.4px] top-0 w-[484.656px]" data-name="Container">
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[324.67px] size-[128px] top-[340px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
        <g id="Icon">
          <path d={svgPaths.p332c680} id="Vector" stroke="var(--stroke-0, #0F1517)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" strokeWidth="10.6667" />
          <path d={svgPaths.p11bc4e00} id="Vector_2" stroke="var(--stroke-0, #0F1517)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" strokeWidth="10.6667" />
          <path d="M64 117.333V64" id="Vector_3" stroke="var(--stroke-0, #0F1517)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.1" strokeWidth="10.6667" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[37.5px] left-0 top-0 w-[420.672px]" data-name="Heading 3">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[37.5px] left-0 text-[#0f1517] text-[30px] top-0">Intelligent modular and composable</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[60px] left-0 top-[53.5px] w-[200px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[20px] left-0 text-[14px] text-[rgba(15,21,23,0.7)] top-0 w-[194px] whitespace-pre-wrap">Our unique modular design allows for infinite configurations to fit any need.</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[113.5px] left-[32px] top-[32px] w-[420.672px]" data-name="Container">
      <Heading7 />
      <Paragraph4 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[#c4f240] h-[500px] left-[500.66px] overflow-clip rounded-[16.4px] top-0 w-[484.672px]" data-name="Container">
      <Icon1 />
      <Container35 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[500px] left-0 top-0 w-[484.656px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Heading8() {
  return (
    <div className="col-1 h-[32px] ml-0 mt-0 relative row-1 w-[420.656px]" data-name="Heading 3">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[32px] left-0 text-[24px] text-white top-0">Specification-driven flexible design</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="col-1 h-[16px] ml-0 mt-[40px] relative row-1 w-[420.656px]" data-name="Paragraph">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#d1d5dc] text-[12px] top-0">Custom solutions for unique problems.</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Heading8 />
      <Paragraph5 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(0,0,0,0.8)] h-[500px] items-start left-0 pl-[32px] pt-[412px] to-[rgba(0,0,0,0)] top-0 w-[484.656px]" data-name="Container">
      <Group />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-white h-[500px] left-[1001.33px] overflow-clip rounded-[16.4px] top-0 w-[484.656px]" data-name="Container">
      <Image />
      <Container37 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container34 />
      <Container36 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[676px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[80px] items-start px-[24px] relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#0f1517] content-stretch flex flex-col h-[933px] items-start pt-[129px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full relative"
      >
        <Container27 />
      </motion.div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[347.5px]" data-name="Heading 2">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#f0f0f0] text-[30px] top-[-1px] w-[285px] whitespace-pre-wrap">Ideal for mission-critical applications.</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[237.516px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 uppercase">Energy density vs range requirements</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div
      onClick={() => document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' })}
      className="h-[16px] relative shrink-0 w-[87.469px] cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Link"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute decoration-solid font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#f0f0f0] text-[12px] top-0 underline">Read case studies</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex h-[72px] items-end justify-between left-[379.5px] pb-[17px] top-0 w-[1106.5px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-b border-solid inset-0 pointer-events-none" />
      <Paragraph6 />
      <Link2 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container39 />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[192px] left-0 opacity-80 top-0 w-[479.328px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[24px] left-[16px] rounded-[4px] top-[16px] w-[53.031px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[8px] text-[#0f1517] text-[12px] top-[4px] tracking-[1.2px] uppercase">Space</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image1 />
      <Container43 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[88.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#0f1517] text-[30px] top-[-1px] w-[89px] whitespace-pre-wrap">$ 6.87B</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[36px] items-end relative shrink-0 w-full" data-name="Container">
      <Text1 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 uppercase w-[192px] whitespace-pre-wrap">By 2032 projected market size</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[39.75px] items-start pt-[17px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Oswald:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#4a5565] text-[14px]">High performance systems for extreme environments where failure is not an option.</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[171.75px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] px-[24px] relative size-full">
        <Container45 />
        <Container46 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[#ebebe6] content-stretch flex flex-col h-[363.75px] items-start left-0 overflow-clip rounded-[16.4px] top-0 w-[479.328px]" data-name="Container">
      <Container42 />
      <Container44 />
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[192px] left-0 opacity-80 top-0 w-[479.328px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[24px] left-[16px] rounded-[4px] top-[16px] w-[70.531px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[8px] text-[#0f1517] text-[12px] top-[4px] tracking-[1.2px] uppercase">Aviation</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image2 />
      <Container49 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[83.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#0f1517] text-[30px] top-[-1px] w-[84px] whitespace-pre-wrap">$ 1.61B</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[36px] items-end relative shrink-0 w-full" data-name="Container">
      <Text2 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 uppercase w-[192px] whitespace-pre-wrap">By 2034 projected market size</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[39.75px] items-start pt-[17px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Oswald:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#4a5565] text-[14px]">High performance systems for extreme environments where failure is not an option.</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[171.75px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] px-[24px] relative size-full">
        <Container51 />
        <Container52 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#ebebe6] content-stretch flex flex-col h-[363.75px] items-start left-[503.33px] overflow-clip rounded-[16.4px] top-0 w-[479.328px]" data-name="Container">
      <Container48 />
      <Container50 />
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute h-[192px] left-0 opacity-80 top-0 w-[479.344px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[24px] left-[16px] rounded-[4px] top-[16px] w-[61.172px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[8px] text-[#0f1517] text-[12px] top-[4px] tracking-[1.2px] uppercase">Marine</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Image3 />
      <Container55 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[87.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#0f1517] text-[30px] top-[-1px] w-[88px] whitespace-pre-wrap">$ 2.91B</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[36px] items-end relative shrink-0 w-full" data-name="Container">
      <Text3 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-0 uppercase w-[192px] whitespace-pre-wrap">By 2032 projected market size</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[39.75px] items-start pt-[17px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Oswald:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#4a5565] text-[14px]">High performance systems for extreme environments where failure is not an option.</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[171.75px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[24px] px-[24px] relative size-full">
        <Container57 />
        <Container58 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[#ebebe6] content-stretch flex flex-col h-[363.75px] items-start left-[1006.66px] overflow-clip rounded-[16.4px] top-0 w-[479.344px]" data-name="Container">
      <Container54 />
      <Container56 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[363.75px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container47 />
      <Container53 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#0f1517] h-[643.75px] relative shrink-0 w-full" data-name="Section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="content-stretch flex flex-col gap-[48px] items-start pt-[80px] px-[24px] relative size-full"
      >
        <Container38 />
        <Container40 />
      </motion.div>
    </div>
  );
}

function Container60() {
  return <div className="absolute h-[364px] left-px opacity-10 top-px w-[1484px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="absolute left-[119.23px] size-[14px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #0F1517)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pf23dd00} id="Vector_2" stroke="var(--stroke-0, #0F1517)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-[#c4f240] h-[24px] left-0 rounded-[3.6px] top-[2px] w-[145.234px]" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-[12px] text-[#0f1517] text-[12px] top-[4px] uppercase">Become an Insider</p>
      <Icon2 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[108px] left-0 top-[50px] w-[672px]" data-name="Heading 2">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[36px] left-0 text-[#f0f0f0] text-[30px] top-[-1px] w-[615px] whitespace-pre-wrap">Follow our progress, receive updates and news on the energy industry, and stay on top of the latest developments in climate tech.</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative rounded-[10px]" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[24px] py-[12px] relative size-full">
          <p className="font-['Consolas:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a5565] text-[14px] uppercase">EMAIL ADDRESS</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button2() {
  return (
    <div
      onClick={() => alert("Thanks for subscribing! We'll be in touch.")}
      className="bg-[#ebebe6] h-[46px] relative rounded-[10px] shrink-0 w-[89.172px] cursor-pointer hover:bg-[#d1d5dc] transition-colors"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[32px] py-[12px] relative size-full">
        <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0f1517] text-[14px] text-center uppercase">Join</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[46px] items-start left-0 top-[190px] w-[672px]" data-name="Container">
      <EmailInput />
      <Button2 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[236px] left-[65px] top-[65px] w-[672px]" data-name="Container">
      <Container62 />
      <Heading10 />
      <Container63 />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#0f1517] h-[366px] relative rounded-[16.4px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container60 />
        <Container61 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c4f240] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#0f1517] h-[526px] relative shrink-0 w-full" data-name="Section">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="content-stretch flex flex-col items-start pt-[80px] px-[24px] relative size-full"
      >
        <Container59 />
      </motion.div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[80px] relative shrink-0 w-[263.422px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Oswald:Medium',sans-serif] font-medium leading-[40px] relative size-full text-[#f0f0f0] text-[36px]">
        <p className="absolute left-0 top-0">Helping solve the</p>
        <p className="absolute left-0 top-[40px]">climate emergency</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[32px] relative shrink-0 w-[320px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Consolas:Regular',sans-serif] leading-[16px] left-[320.7px] not-italic text-[#6a7282] text-[12px] text-right top-0 w-[291px] whitespace-pre-wrap">We create measurable impact through next-gen sustainable battery technology.</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex h-[80px] items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Paragraph10 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#c4f240] text-[12px] top-0 uppercase">Increased Energy Density</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[48px] left-0 text-[#f0f0f0] text-[48px] top-[-1px] tracking-[-2.4px]">+60%</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[12.5px] left-0 text-[#4a5565] text-[10px] top-[-1px]">Compared to current industry standard lithium-ion technology.</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-gradient-to-b col-[1] from-[#1a2426] justify-self-stretch relative rounded-[16.4px] row-[1] self-stretch shrink-0 to-[#0f1517]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-start justify-center pb-[12px] pt-[15px] px-[33px] relative size-full">
          <Container68 />
          <Container69 />
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#c4f240] text-[12px] top-0 uppercase">Unmatched Reliability</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[48px] left-0 text-[#f0f0f0] text-[48px] top-[-1px] tracking-[-2.4px]">~10x</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[12.5px] left-0 text-[#4a5565] text-[10px] top-[-1px]">Compared to current industry standard lithium-ion technology.</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-gradient-to-b col-[2] from-[#1a2426] justify-self-stretch relative rounded-[16.4px] row-[1] self-stretch shrink-0 to-[#0f1517]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-px pt-[15px] px-[33px] relative size-full">
        <Container72 />
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#c4f240] text-[12px] top-0 uppercase">Reduced Emissions</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[48px] left-0 text-[#f0f0f0] text-[48px] top-[-1px] tracking-[-2.4px]">-60%</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[12.5px] left-0 text-[#4a5565] text-[10px] top-[-1px]">Compared to current industry standard lithium-ion technology.</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-gradient-to-b col-[3] from-[#1a2426] justify-self-stretch relative rounded-[16.4px] row-[1] self-stretch shrink-0 to-[#0f1517]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="content-stretch flex flex-col gap-[48px] items-start pt-[15px] px-[33px] relative size-full">
        <Container76 />
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Bold',sans-serif] font-bold leading-[16px] left-0 text-[#c4f240] text-[12px] top-0 uppercase">Improved Recyclability</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Medium',sans-serif] font-medium leading-[48px] left-0 text-[#f0f0f0] text-[48px] top-[-1px] tracking-[-2.4px]">~100%</p>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[12.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Oswald:Regular',sans-serif] font-normal leading-[12.5px] left-0 text-[#4a5565] text-[10px] top-[-1px]">Compared to current industry standard lithium-ion technology.</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-gradient-to-b col-[4] from-[#1a2426] justify-self-stretch relative rounded-[16.4px] row-[1] self-stretch shrink-0 to-[#0f1517]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-px pt-[15px] px-[33px] relative size-full">
        <Container80 />
        <Container81 />
        <Container82 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[206.5px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container71 />
      <Container75 />
      <Container79 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[334.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start px-[24px] relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div id="partners" className="bg-[#0f1517] content-stretch flex flex-col h-[495.5px] items-start pb-px pt-[80px] relative shrink-0 w-full" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-b border-solid inset-0 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full relative"
      >
        <Container64 />
      </motion.div>
    </div>
  );
}

function Marquee12() {
  return (
    <div className="h-[128px] relative shrink-0 w-[2142.078px]" data-name="Marquee">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Oswald:Medium','Noto_Sans:Regular',sans-serif] font-medium leading-[0] left-[calc(50%-694.32px)] text-[84.939px] text-[rgba(15,21,23,0.1)] top-[21.54px] tracking-[-4.2469px] uppercase">
          <span className="font-['Siemreap:Regular','Noto_Sans:Regular',sans-serif] leading-[84.939px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`Dancer   `}</span>
          <span className="leading-[84.939px]">{`ECOFLOW   `}</span>
          <span className="font-['Poiret_One:Regular','Noto_Sans:Regular',sans-serif] leading-[84.939px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            AMAZON
          </span>
          <span className="leading-[84.939px]">{`   `}</span>
          <span className="font-['Righteous:Regular','Noto_Sans:Regular',sans-serif] leading-[84.939px] lowercase" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
            amigo
          </span>
        </p>
      </div>
    </div>
  );
}

function Marquee11() {
  return (
    <div className="absolute content-stretch flex h-[128px] items-center justify-center left-0 overflow-clip top-[80px] w-[1534px]" data-name="Marquee">
      <Marquee12 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Oswald:Medium',sans-serif] font-medium leading-[28px] left-[312.41px] text-[#0f1517] text-[20px] text-center top-0 w-[586px] whitespace-pre-wrap">{`We're always on the lookout for strategic partners that can help us build the future of battery technology.`}</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[120.23px] size-[18px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M13.5 6L16.5 9L13.5 12" id="Vector" stroke="var(--stroke-0, #C4F240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1.5 9H16.5" id="Vector_2" stroke="var(--stroke-0, #C4F240)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div
      onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
      className="bg-[#0f1517] h-[50px] relative rounded-[33554400px] shrink-0 w-[170.234px] cursor-pointer hover:bg-[#1e2939] transition-colors"
      data-name="Button"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Oswald:Bold',sans-serif] font-bold leading-[24px] left-[72.5px] text-[#c4f240] text-[16px] text-center top-[13px] uppercase">Contact Us</p>
        <Icon3 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      onClick={() => document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' })}
      className="h-[50px] relative rounded-[33554400px] shrink-0 w-[160.25px] cursor-pointer hover:bg-[rgba(15,21,23,0.05)] transition-colors"
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-[#0f1517] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[33px] py-[13px] relative size-full">
        <p className="font-['Oswald:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#0f1517] text-[16px] text-center uppercase">See Partners</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center pr-[0.016px] relative size-full">
          <Button3 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[138px] items-start left-[431px] px-[24px] top-[288px] w-[672px]" data-name="Container">
      <Paragraph11 />
      <Container84 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[185.875px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['Oswald:Medium',sans-serif] font-medium leading-[185.88px] left-[742.95px] text-[#c4f240] text-[232.35px] text-center top-[-1px] tracking-[-11.6175px]">JOULENE</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[15px] relative shrink-0 w-[123.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#0f1517] text-[10px] top-[-1px] tracking-[1px] uppercase">© 2026 Joulene Inc.</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[45.5px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#0f1517] text-[10px] top-[-1px] tracking-[1px] uppercase">Privacy</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[32.5px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#0f1517] text-[10px] top-[-1px] tracking-[1px] uppercase">Terms</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#0f1517] text-[10px] top-[-1px] tracking-[1px] uppercase">LinkedIn</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[15px] relative shrink-0 w-[161.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex h-[15px] items-start justify-between opacity-50 relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[249.875px] items-start left-0 pt-[33px] px-[24px] top-[522px] w-[1534px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(15,21,23,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Heading12 />
      <Container86 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#ebebe6] h-[851.875px] overflow-clip relative shrink-0 w-full" data-name="Footer">
      <Marquee11 />
      <Container83 />
      <Container85 />
    </div>
  );
}

function JouleneHome1() {
  return (
    <div className="relative bg-[#0f1517] content-stretch flex flex-col h-[5827.375px] items-start left-0 overflow-clip top-0 w-[1534px]" data-name="JouleneHome">
      <Header />
      <div id="technology" className="w-full"><Section /></div>
      <div id="differentiators" className="w-full"><Section1 /></div>
      <div id="applications" className="w-full"><Section2 /></div>
      <div id="newsletter" className="w-full"><Section3 /></div>
      <div id="impact" className="w-full"><Section4 /></div>
      <div id="footer" className="w-full"><Footer /></div>
    </div>
  );
}

export default function Joulene() {
  return (
    <div className="bg-white relative size-full" data-name="Joulene">
      <div className="hidden xl:block relative w-full overflow-x-hidden">
        <JouleneHome />
        <JouleneHome1 />
      </div>
      <div className="block xl:hidden relative w-full bg-[#0f1517] min-h-screen">
        <div className="w-full max-w-[450px] mx-auto relative bg-[#0f1517] shadow-2xl overflow-hidden min-h-screen">
          <MobileJoulene />
        </div>
      </div>
    </div>
  );
}